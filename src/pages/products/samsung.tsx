import { motion } from "framer-motion";

// Samsung Product Models with their images
const SAMSUNG_PRODUCTS = [
  {
    model: "HS 17",
    imageUrl:
      "/products/samsung/SamsungHS17.jpg",
  },
  {
    model: "WS 80",
    imageUrl:
      "/products/samsung/SamsungWS80.jpg",
  },
  {
    model: "HS 50",
    imageUrl:
      "/products/samsung/SamsungHS50.jpg",
  },
  {
    model: "HS 40",
    imageUrl:
      "/products/samsung/SamsungHS40.jpg",
  },
  {
    model: "V8",
    imageUrl:
      "/products/samsung/SamsungV8.jpg",
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
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {SAMSUNG_PRODUCTS.map((product) => (
                    <div
                      className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.model}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          {product.model}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </main>
  );
}
