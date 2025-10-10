import { motion } from "framer-motion";

// GE Product Models with their images
const GE_PRODUCTS = [
  {
    model: "Varsana Premier",
    imageUrl: "/products/ge/GEVarsanaPremier.jpg",
  },
  {
    model: "Varsana Essential",
    imageUrl: "/products/ge/GEVarsanaEssential.jpg",
  },
  {
    model: "Varsana Balance",
    imageUrl: "/products/ge/GEVarsanaValence.jpg",
  },
  {
    model: "Logiq V5",
    imageUrl: "/products/ge/GElogicV5.jpg",
  },
  {
    model: "Logiq F6",
    imageUrl: "/products/ge/GELogicF6.jpg",
  },
  {
    model: "Volution P8",
    imageUrl: "/products/ge/GEVolutionP8.jpg",
  },
  {
    model: "Volution S6",
    imageUrl: "/products/ge/GEVolutionS6.jpg",
  },
  {
    model: "Volution E8",
    imageUrl: "/products/ge/GEVolutionE8.jpg",
  }
];

export default function GE() {
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
              GE Healthcare Products
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of GE Healthcare ultrasound systems and medical imaging equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {GE_PRODUCTS.map((product) => (
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
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