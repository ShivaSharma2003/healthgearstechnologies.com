import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ModalContact from "./ModalContact";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
];

const productsDropdown = [
  {
    label: "Ultrasound Systems",
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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
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

  // Close modal on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowEnquiryModal(false);
    }
    if (showEnquiryModal) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showEnquiryModal]);

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
                    className={`items-center inline-flex gap-2 px-2 py-1 font-medium hover:text-blue-600 ${
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

          <button
            className="hidden md:flex border border-blue-600 text-blue-600 px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white font-semibold"
            onClick={(e) => {
              e.preventDefault();
              setShowEnquiryModal(true);
            }}
          >
            Get Enquiry
          </button>
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
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 22 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl border-l overflow-auto"
            >
              <div className="p-4 flex items-center justify-between border-b">
                <div className="font-semibold">Menu</div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md"
                >
                  <FiX />
                </button>
              </div>

              <div className="p-4 space-y-3">
                {/* Main links (Products handled separately) */}
                {links.map((l) => (
                  <div key={l.to}>
                    {l.label !== "Products" ? (
                      <NavLink
                        to={l.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded font-medium hover:bg-slate-50 ${
                            isActive ? "text-blue-600" : "text-slate-700"
                          }`
                        }
                      >
                        {l.label}
                      </NavLink>
                    ) : (
                      <button
                        onClick={() => setMobileProductsOpen(true)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded font-medium hover:bg-slate-50 text-slate-700"
                      >
                        <span>Products</span>
                        <FiChevronRight />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>

            {/* Products Panel - slides in from right to left on top of drawer */}
            <AnimatePresence>
              {mobileProductsOpen && (
                <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 22 }}
                  className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl border-l overflow-auto"
                >
                  <div className="p-4 flex items-center gap-3 border-b">
                    <button
                      onClick={() => setMobileProductsOpen(false)}
                      className="p-2 rounded-md"
                    >
                      <FiChevronLeft />
                    </button>
                    <div className="font-semibold">Products</div>
                  </div>

                  <div className="p-4 space-y-4">
                    {productsDropdown.map((category, idx) => (
                      <div key={idx}>
                        <div className="text-sm font-semibold text-slate-900 mb-2">
                          {category.label}
                        </div>
                        <div className="flex flex-col gap-1">
                          {category.items.map((item) => (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileProductsOpen(false);
                              }}
                              className={({ isActive }) =>
                                `block px-3 py-2 rounded text-sm hover:bg-slate-50 ${
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
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Enquiry Modal for large screens */}
      <AnimatePresence>
        {showEnquiryModal && <ModalContact onClose={() => setShowEnquiryModal(false)} />}
      </AnimatePresence>
    </header>
  );
}
