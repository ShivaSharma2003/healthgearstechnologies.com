import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SolutionLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  caseStudies: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export default function SolutionLayout({
  title,
  description,
  imageUrl,
  benefits,
  features,
  caseStudies,
}: SolutionLayoutProps) {
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
              {/* Content */}
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {title}
                  </h1>
                  <p className="text-base sm:text-lg text-slate-200">
                    {description}
                  </p>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base"
                  >
                    <span>Schedule Consultation</span>
                    <FiArrowRight className="shrink-0" />
                  </Link>
                </motion.div>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-800"
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-0"
              >
                <div className="mt-1">
                  <FiCheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                </div>
                <p className="text-sm sm:text-base text-slate-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Success Stories
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] sm:aspect-video">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {study.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you deliver better patient care
              through innovative technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              <span>Get Started</span>
              <FiArrowRight className="shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}