import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiFilter, FiSearch, FiGrid, FiList, FiStar } from "react-icons/fi";
import ultrasoundMachines from "../data/Products";

type ViewMode = "grid" | "list";
type FilterType = "all" | string;

export default function Products() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState<FilterType>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique manufacturers
  const manufacturers = ["all", ...new Set(ultrasoundMachines.map(m => m.manufacturer))];

  // Filter products based on search and manufacturer
  const filteredProducts = ultrasoundMachines.filter(product => {
    const matchesSearch = 
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.modelNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesManufacturer = selectedManufacturer === "all" || 
      product.manufacturer === selectedManufacturer;

    return matchesSearch && matchesManufacturer;
  });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medical Imaging Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Explore our comprehensive range of ultrasound systems from leading manufacturers.
              Find the perfect solution for your clinical needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-grow md:flex-grow-0">
              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center gap-2 border rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid" 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  <FiGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list" 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  <FiList size={20} />
                </button>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-lg text-slate-600"
              >
                <FiFilter />
                <span>Filter</span>
              </button>

              {/* Desktop Manufacturer Filter */}
              <div className="hidden md:block relative">
                <select
                  value={selectedManufacturer}
                  onChange={(e) => setSelectedManufacturer(e.target.value)}
                  className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {manufacturers.map(m => (
                    <option key={m} value={m}>
                      {m === "all" ? "All Manufacturers" : m}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Search */}
            <div className="relative flex-grow md:max-w-md">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile Filters Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="space-y-4 py-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Manufacturer
                    </label>
                    <select
                      value={selectedManufacturer}
                      onChange={(e) => setSelectedManufacturer(e.target.value)}
                      className="w-full bg-white border rounded-lg px-4 py-2 text-slate-600"
                    >
                      {manufacturers.map(m => (
                        <option key={m} value={m}>
                          {m === "all" ? "All Manufacturers" : m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-600">No products found matching your criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={
                viewMode === "grid"
                  ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  : "space-y-6"
              }
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.article
                    key={`${product.manufacturer}-${product.model}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div className={viewMode === "list" ? "w-48 shrink-0" : ""}>
                      <img
                        src={product.imageUrl}
                        alt={product.model}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg text-slate-900">
                            {product.model}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {product.manufacturer}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className="text-yellow-400 fill-current"
                              size={16}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          Model: {product.modelNumber}
                        </div>
                      </div>

                      {viewMode === "list" && (
                        <div className="mt-4">
                          <p className="text-slate-600">
                            Advanced ultrasound system with exceptional image quality and
                            intuitive workflow features designed for enhanced diagnostic
                            confidence.
                          </p>
                          <div className="mt-4 flex gap-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Learn More
                            </button>
                            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                              Request Quote
                            </button>
                          </div>
                        </div>
                      )}

                      {viewMode === "grid" && (
                        <div className="mt-4">
                          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}