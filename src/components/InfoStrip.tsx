import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoStrip() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiClock className="text-blue-200" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="tel:+917850099148"
                  className="flex items-center gap-2 hover:text-blue-200"
                >
                  <FiPhone />
                  <span>+91 78500 99148</span>
                </a>
                <a
                  href="tel:+917727866635"
                  className="flex items-center gap-2 hover:text-blue-200"
                >
                  <FiPhone />
                  <span>+91 77278 66635</span>
                </a>
                <a
                  href="mailto:healthgearstechnologies@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-200"
                >
                  <FiMail />
                  <span>healthgearstechnologies@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
