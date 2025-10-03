import { motion } from "framer-motion";
import { FiCheckCircle, FiDownload, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

interface ProductLayoutProps {
  manufacturer: string;
  model: string;
  modelNumber: string;
  imageUrl: string;
  description: string;
  features: string[];
  specifications: {
    category: string;
    items: Array<{ label: string; value: string }>;
  }[];
}

export default function ProductLayout({
  manufacturer,
  model,
  modelNumber,
  imageUrl,
  description,
  features,
  specifications,
}: ProductLayoutProps) {
  return (
    <main className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
              {/* Image */}
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[4/3] sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-800"
                >
                  <img
                    src={imageUrl}
                    alt={`${manufacturer} ${model}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {manufacturer} {model}
                  </h1>
                  <p className="text-blue-300">Model: {modelNumber}</p>
                  <p className="text-base sm:text-lg text-slate-200">{description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base"
                    >
                      <FiDownload className="shrink-0" />
                      <span>Download Brochure</span>
                    </a>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
                    >
                      <FiMail className="shrink-0" />
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-0"
              >
                <div className="mt-1">
                  <FiCheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                </div>
                <p className="text-sm sm:text-base text-slate-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
                  {spec.category}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {spec.items.map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-sm sm:text-base text-slate-600">{item.label}</span>
                      <span className="text-sm sm:text-base text-slate-900 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}