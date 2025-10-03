import { motion } from "framer-motion";
import {
  FiCode,
  FiShield,
  FiCloud,
  FiCpu,
  FiHardDrive,
  FiDatabase,
  FiTool,
  FiCheckCircle,
  FiClipboard,
  FiGitBranch,
  FiMonitor,
  FiServer
} from "react-icons/fi";

const services = [
  {
    icon: FiCpu,
    title: "Medical Device Development",
    description: "End-to-end development of innovative medical devices with a focus on ultrasound technology",
    features: [
      "Hardware design and prototyping",
      "Firmware development",
      "Signal processing",
      "Performance optimization"
    ]
  },
  {
    icon: FiCode,
    title: "Software Solutions",
    description: "Custom healthcare software development tailored to your specific needs",
    features: [
      "Medical imaging software",
      "Patient management systems",
      "Clinical workflow tools",
      "Data analytics platforms"
    ]
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description: "Secure cloud solutions for healthcare data management and analysis",
    features: [
      "HIPAA-compliant storage",
      "Real-time data synchronization",
      "Scalable infrastructure",
      "Remote access solutions"
    ]
  },
  {
    icon: FiShield,
    title: "Regulatory Compliance",
    description: "Comprehensive support for medical device certification and compliance",
    features: [
      "FDA documentation",
      "CE marking assistance",
      "Quality management systems",
      "Regulatory strategy"
    ]
  }
];

const processList = [
  {
    icon: FiClipboard,
    title: "Requirements Analysis",
    description: "Thorough analysis of your needs and compliance requirements"
  },
  {
    icon: FiGitBranch,
    title: "Development Planning",
    description: "Detailed project roadmap and milestone planning"
  },
  {
    icon: FiTool,
    title: "Implementation",
    description: "Agile development with regular updates and feedback"
  },
  {
    icon: FiCheckCircle,
    title: "Testing & Validation",
    description: "Comprehensive testing and regulatory validation"
  }
];

const techStack = [
  {
    icon: FiHardDrive,
    title: "Hardware",
    items: ["Ultrasound Systems", "Medical Sensors", "Embedded Systems", "Custom PCB Design"]
  },
  {
    icon: FiDatabase,
    title: "Backend",
    items: ["Cloud Infrastructure", "HIPAA Compliance", "Data Processing", "API Development"]
  },
  {
    icon: FiMonitor,
    title: "Frontend",
    items: ["Medical Imaging UI", "Clinical Dashboards", "Mobile Apps", "Web Applications"]
  },
  {
    icon: FiServer,
    title: "Infrastructure",
    items: ["Cloud Hosting", "Security", "Scalability", "Monitoring"]
  }
];

export default function Services() {
  return (
    <main className="pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Healthcare Technology Services
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              From concept to certification, we provide comprehensive services for medical 
              device development and healthcare software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg sm:rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <service.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Development Process
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
              A systematic approach to delivering high-quality healthcare solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-blue-100 -translate-y-1/2 hidden md:block" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {processList.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-3 sm:mb-4 relative z-10">
                    <process.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Technology Stack
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
              Cutting-edge technologies for modern healthcare solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 sm:mb-6">
                  <tech.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
                  {tech.title}
                </h3>
                
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full shrink-0" />
                      <span className="text-sm sm:text-base text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Healthcare Solutions?
            </h2>
            <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you deliver better healthcare 
              outcomes through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                Schedule Consultation
              </a>
              <a
                href="/products"
                className="px-6 sm:px-8 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                View Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
