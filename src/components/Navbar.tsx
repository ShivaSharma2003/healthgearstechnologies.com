import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
];

const productsDropdown = [
  {
    label: "Refurbished Ultrasound Systems",
    items: [
      { to: "/products/ge", label: "GE Healthcare" },
      { to: "/products/samsung", label: "Samsung" },
      { to: "/products/hitachi", label: "Hitachi" },
    ],
  },
  {
    label: "Biopsy Guide",
    items: [
      { to: "/products/reusable-biopsy-guide", label: "Reusable" },
      { to: "/products/disposable-biopsy-guide", label: "Disposable" },
    ],
  },
  {
    label: "Probes",
    items: [
      { to: "/products/new-probes", label: "New Probes" },
      { to: "/products/refurbished-probes", label: "Refurbished Probes" },
    ],
  },
  {
    label: "Services",
    items: [
      { to: "/service/probe-repair", label: "Probes Repair" },
      { to: "/service/sell-ultrasound", label: "Sell Ultrasound" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 w-full z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">
            H
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Health Gear Technologies</div>
            <div className="text-xs text-slate-500">Innovate health</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <div key={l.to} className="relative">
              {l.label === "Products" ? (
                <>
                  <button
                    ref={buttonRef}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`inline-flex items-center gap-2 px-2 py-1 font-medium hover:text-blue-600 ${
                      location.pathname.startsWith("/products")
                        ? "text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    Products
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown />
                    </motion.span>
                  </button>
                  {location.pathname.startsWith("/products") && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded"
                    />
                  )}
                </>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative px-2 py-1 font-medium hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-slate-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{l.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )}

              {l.label === "Products" && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute left-0 mt-2 w-[42rem] grid grid-cols-4 gap-4 rounded-xl bg-white shadow-xl p-6"
                    >
                      {productsDropdown.map((category, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="font-medium text-slate-900">
                            {category.label}
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.to}>
                                <NavLink
                                  to={item.to}
                                  onClick={() => setDropdownOpen(false)}
                                  className={({ isActive }) =>
                                    `block text-sm py-1 px-2 rounded-md transition-colors ${
                                      isActive
                                        ? "text-blue-600 bg-blue-50"
                                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                                    }`
                                  }
                                >
                                  {item.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-white border focus:outline-none"
            aria-label="toggle menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden bg-white/95 border-t"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {/* Main links */}
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded font-medium hover:bg-slate-50 ${
                      isActive ? "text-blue-600" : "text-slate-700"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              {/* Products nested for mobile */}
              <div className="mt-1 space-y-4">
                {productsDropdown.map((category, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-semibold px-2 py-1 text-slate-900">
                      {category.label}
                    </div>
                    <div className="pl-3 flex flex-col gap-1">
                      {category.items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block px-2 py-2 rounded text-sm hover:bg-slate-50 ${
                              isActive
                                ? "text-blue-600 bg-blue-50"
                                : "text-slate-600"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:+1234567890"
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm"
              >
                <FiPhone />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
