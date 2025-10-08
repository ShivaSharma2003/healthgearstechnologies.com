import { motion } from "framer-motion";

// Samsung Product Models with their images
const SAMSUNG_PRODUCTS = [
  {
    model: "HERA W10",
    modelNumber: "HS70A",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
  },
  {
    model: "HERA I10",
    modelNumber: "HS60",
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800",
  },
  {
    model: "HERA W9",
    modelNumber: "HS50",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800",
  },
  {
    model: "RS85",
    modelNumber: "RS85A",
    imageUrl:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800",
  },
  {
    model: "RS80A",
    modelNumber: "RS80A-EVO",
    imageUrl:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800",
  },
  {
    model: "HS70A",
    modelNumber: "HS70A-PRO",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800",
  },
];

export default function Samsung() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Samsung Healthcare Products
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our advanced Samsung ultrasound systems with cutting-edge
              imaging technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid - Larger Cards */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SAMSUNG_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.modelNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {product.model}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6">
                    Model: {product.modelNumber}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
