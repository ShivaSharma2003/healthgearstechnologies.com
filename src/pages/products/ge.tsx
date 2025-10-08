import { motion } from "framer-motion";

// GE Product Models with their images
const GE_PRODUCTS = [
  {
    model: "Voluson E10",
    modelNumber: "VE10-PRO",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800",
  },
  {
    model: "Voluson E8",
    modelNumber: "VE8-EX",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800",
  },
  {
    model: "Voluson E6",
    modelNumber: "VE6-BT",
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800",
  },
  {
    model: "Logiq E9",
    modelNumber: "LE9-XDclear",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800",
  },
  {
    model: "Logiq E10",
    modelNumber: "LE10-S",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800",
  },
  {
    model: "Venue 40",
    modelNumber: "V40-POC",
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800",
  },
  {
    model: "Venue 50",
    modelNumber: "V50-GO",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800",
  },
  {
    model: "Vivid S70",
    modelNumber: "VS70-4D",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
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
            {GE_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.modelNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}