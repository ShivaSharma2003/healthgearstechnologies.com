import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiClock,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiLifeBuoy,
  FiSettings,
} from "react-icons/fi";

const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000",
    alt: "Modern medical device",
    title: "Advanced Ultrasound Systems",
    desc: "Next-generation imaging clarity",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000",
    alt: "Healthcare professional with device",
    title: "Smart Diagnostic Tools",
    desc: "Precision meets innovation",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=2000",
    alt: "Medical monitoring device",
    title: "Remote Patient Monitoring",
    desc: "Continuous care solutions",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000",
    alt: "Medical dashboard interface",
    title: "Healthcare Analytics",
    desc: "Data-driven decisions",
  },
];

const partneredBrands = [
  "GE Healthcare",
  "Philips",
  "Samsung",
  "Canon Medical",
  "Hitachi Healthcare",
  "Fujifilm Sonosite",
  "Mindray",
  "Siemens Healthineers",
];

const certifications = [
  { name: "FDA Approved", icon: FiCheck },
  { name: "ISO 13485", icon: FiShield },
  { name: "HIPAA Compliant", icon: FiLayers },
  { name: "CE Marked", icon: FiAward },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* HERO: Full-screen carousel + overlay */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 z-10" />

        {/* Carousel */}
        <div className="relative h-full overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slides[index].id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={slides[index].src}
                alt={slides[index].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center pt-20">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-lg font-medium text-blue-400 mb-2">
                  {slides[index].title}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Transforming Healthcare Through Innovation
                </h1>
                <p className="text-xl text-slate-200 max-w-xl">
                  Health Gear Technologies delivers cutting-edge medical devices
                  and smart software solutions that enhance patient care,
                  improve clinical workflows, and drive better healthcare
                  outcomes.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/products"
                    className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 group"
                  >
                    Explore Solutions
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    Schedule Consultation
                  </a>
                </div>

                {/* Certifications */}
                <div className="mt-12 md:flex hidden">
                  <div className="flex-wrap gap-4 flex">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        <cert.icon className="text-blue-400" size={16} />
                        <span className="text-sm text-white">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute left-0 right-0 bottom-8 z-30 hidden md:block">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end">
              <div className="flex gap-3">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className={`w-16 h-1 rounded-full transition-colors ${
                      i === index ? "bg-blue-500" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="text-sm text-white/70">{slides[index].desc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="bg-white py-16 overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-slate-700">
              Partnering with world-class manufacturers to deliver excellence in
              healthcare
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {partneredBrands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/2] bg-slate-50 rounded-xl p-6 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  {/* Replace with actual logo URLs when available */}
                  <div className="relative w-full max-w-[140px]">
                    {/* Placeholder card with brand name and styling */}
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-bold text-blue-600">
                          {brand.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                        {brand}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Trusted Partner
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partner Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Certified Quality
              </h4>
              <p className="text-slate-600 text-sm">
                All our partners meet rigorous quality and safety standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Innovation Leaders
              </h4>
              <p className="text-slate-600 text-sm">
                Cutting-edge technology from industry pioneers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Global Support
              </h4>
              <p className="text-slate-600 text-sm">
                Worldwide service and maintenance network
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Icons */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="mt-1 text-sm text-slate-600">
                Years Experience
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600">500k+</div>
              <div className="mt-1 text-sm text-slate-600">
                Patients Benefited
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600">40+</div>
              <div className="mt-1 text-sm text-slate-600">
                Countries Served
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FiLifeBuoy className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="mt-1 text-sm text-slate-600">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Complete Healthcare Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From diagnostic imaging to patient monitoring, we provide
              comprehensive solutions that help healthcare providers deliver
              exceptional care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                  <FiShield size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Diagnostic Imaging
                </h3>
                <p className="text-blue-100">
                  State-of-the-art ultrasound systems and imaging solutions for
                  precise diagnostics.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    High-resolution imaging
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Advanced 3D/4D capabilities
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    AI-assisted diagnostics
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="/products"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn more <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                  <FiSettings size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Clinical Workflow
                </h3>
                <p className="text-slate-300">
                  Streamlined solutions for enhanced clinical efficiency and
                  patient care management.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Automated reporting
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Real-time collaboration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Resource optimization
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="/products"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn more <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Patient Monitoring
                </h3>
                <p className="text-blue-100">
                  Advanced monitoring systems for continuous patient care and
                  early intervention.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Remote monitoring
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Smart alerts
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                    <FiCheck className="text-blue-500" />
                    Trend analysis
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="/products"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn more <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Pushing the Boundaries of Healthcare Technology
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our commitment to innovation drives us to develop solutions that
                address the evolving needs of healthcare providers and improve
                patient outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiTrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      AI-Powered Analytics
                    </h3>
                    <p className="text-slate-600">
                      Advanced algorithms that provide actionable insights and
                      support clinical decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiShield className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Enhanced Security
                    </h3>
                    <p className="text-slate-600">
                      HIPAA-compliant infrastructure with enterprise-grade
                      security and data protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiUsers className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Clinical Collaboration
                    </h3>
                    <p className="text-slate-600">
                      Tools that enable seamless communication and data sharing
                      among healthcare teams.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000"
                  alt="Medical professional using Health Gear device"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-blue-100 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <FiStar className="text-blue-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Trusted by Leading Healthcare Providers
            </h3>
            <p className="text-slate-600">
              Discover why healthcare professionals choose Health Gear
              Technologies
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex gap-2 text-blue-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">
                "Their ultrasound systems have transformed our diagnostic
                capabilities. The image quality and AI-assisted features are
                exceptional."
              </p>
              <footer className="mt-4 text-sm text-slate-600">
                — Dr. Amanda Smith
                <div className="text-xs">
                  Director of Radiology, Metro Medical Center
                </div>
              </footer>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex gap-2 text-blue-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">
                "The remote monitoring platform has significantly improved our
                patient care and operational efficiency. Outstanding support
                team."
              </p>
              <footer className="mt-4 text-sm text-slate-600">
                — James Chen, MD
                <div className="text-xs">
                  Chief of Cardiology, Heart Care Institute
                </div>
              </footer>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex gap-2 text-blue-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">
                "Implementation was seamless, and the workflow improvements have
                been remarkable. A true partner in healthcare innovation."
              </p>
              <footer className="mt-4 text-sm text-slate-600">
                — Sarah Johnson
                <div className="text-xs">CEO, Regional Healthcare Network</div>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Advanced CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <h4 className="text-3xl font-bold text-white mb-4">
                Ready to Elevate Your Healthcare Services?
              </h4>
              <p className="text-lg text-blue-100 mb-8">
                Join leading healthcare providers who trust Health Gear
                Technologies to deliver innovative solutions that improve
                patient outcomes and streamline clinical workflows.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                >
                  Schedule Demo
                </a>
                <a
                  href="/products"
                  className="px-8 py-4 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  Explore Solutions
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-400/30">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-200" />
                    <span className="text-sm text-blue-100">
                      Free consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-200" />
                    <span className="text-sm text-blue-100">
                      Expert support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-200" />
                    <span className="text-sm text-blue-100">
                      Custom solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
