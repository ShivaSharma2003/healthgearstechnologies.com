import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] mt-12">

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Company Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-md bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">
                H
              </div>
              <div>
                <div className="font-semibold">Health Gear Technologies</div>
                <div className="text-sm text-slate-600">
                  Innovating healthcare
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              We design reliable medical hardware and software to improve
              patient outcomes. Reach out to learn more about partnerships and
              projects.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+917850099148"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600"
              >
                <FaPhoneAlt className="text-blue-600" />
                +91 78500 99148
              </a>
              <a
                href="tel:+917727866635"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600"
              >
                <FaPhoneAlt className="text-blue-600" />
                +91 77278 66635
              </a>
              <a
                href="mailto:healthgearstechnologies@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600"
              >
                <FiMail className="text-blue-600" />
                healthgearstechnologies@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FaMapMarkerAlt className="text-blue-600" />
                115-116, Parshavnath Colony
                <br />
                Janpath, Nirman Nagar, Jaipur - 302019
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:col-span-5 grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products/ge"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    GE Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="/products/philips"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Philips
                  </a>
                </li>
                <li>
                  <a
                    href="/products/samsung"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Samsung
                  </a>
                </li>
                <li>
                  <a
                    href="/products/cardiology"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Cardiology Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/products/radiology"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Radiology Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    News & Updates
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="md:col-span-3"
          >
            <h4 className="font-semibold text-slate-900 mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} Health Gear Technologies. All rights
              reserved.
            </div>
            <div className="flex items-center gap-8">
              <a
                href="/privacy"
                className="text-sm text-slate-600 hover:text-blue-600"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-600 hover:text-blue-600"
              >
                Terms of Service
              </a>
              <a
                href="/accessibility"
                className="text-sm text-slate-600 hover:text-blue-600"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
