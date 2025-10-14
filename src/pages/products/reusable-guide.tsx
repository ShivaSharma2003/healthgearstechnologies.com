import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ReusableGuide = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images
  const carouselImages = [
    {
      src: "/products/reusable-guides/ReusableGuideImg1.jpg",
      alt: "Reusable Needle Guide Main View",
    },
    {
      src: "/products/reusable-guides/ReusableGuideImg2.jpg",
      alt: "Medical Equipment Detail",
    },
    {
      src: "/products/reusable-guides/ReusableGuideImg3.jpg",
      alt: "Professional Medical Setup",
    },
    {
      src: "/products/reusable-guides/ReusableGuideImg4.jpg",
      alt: "Quality Medical Equipment",
    },
  ];

  const Brand = [
    {
      src: "/Brands/CanonLogo.png",
      alt: "Brand 1",
      pdfLink: "",
    },
    {
      src: "/Brands/FujifilmLogo.png",
      alt: "Brand 2",
      pdfLink: "",
    },
    {
      src: "/Brands/EdanLogo.png",
      alt: "Brand 3",
      pdfLink: "",
    },
    {
      src: "/Brands/GeLogo.png",
      alt: "Brand 4",
      pdfLink: "",
    },
    {
      src: "/Brands/HitachiLogo.png",
      alt: "Brand 5",
      pdfLink: "",
    },
    {
      src: "/Brands/MindrayLogo.png",
      alt: "Brand 6",
      pdfLink: "",
    },
    {
      src: "/Brands/SamsungLogo.png",
      alt: "Brand 7",
      pdfLink: "",
    },
    {
      src: "/Brands/SiemensLogo.png",
      alt: "Brand 8",
      pdfLink: "",
    },
    {
      src: "/Brands/SiuiLogo.png",
      alt: "Brand 9",
      pdfLink: "",
    },
    {
      src: "/Brands/VinnoLogo.png",
      alt: "Brand 10",
      pdfLink: "",
    },
    {
      src: "/Brands/WisonicLogo.png",
      alt: "Brand 11",
      pdfLink: "",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <main className="pt-20">
      {/* Hero Section with Split Layout */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16">
            {/* Left Side - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/4] rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Main Carousel Image */}
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
                >
                  Premium Medical Equipment
                </motion.span>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
                  Enhanced Ultrasound Needle Guidance Solutions from HealthGears
                  Technologies
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  To provide customers with advanced ultrasound solutions,
                  HealthGears Technologies offers a comprehensive range of
                  needle guidance systems, designed to deliver precision,
                  safety, and ease of use across various clinical applications.
                  These systems feature a two-part design comprising a custom
                  reusable biopsy bracket and a disposable needle guide. The
                  single-use guides help minimize the risk of
                  cross-contamination while ensuring consistent and reliable
                  performance. The Infiniti Plus system enables precise in-plane
                  needle positioning, ideal for vascular access and regional
                  anesthesia procedures. In addition to general-purpose
                  applications, HealthGears Technologies also offers Endocavity
                  Needle Guides, custom-designed for transrectal and
                  transvaginal ultrasound transducers. The disposable endocavity
                  guides are single-use, attach securely to the transducers
                  locating features, and help reduce the risk of
                  cross-contamination while ensuring patient safety. For
                  reusable options, HealthGears Technologies stainless steel
                  endocavity needle guides offer durability and precision, ideal
                  for tissue biopsy, fluid aspiration, and therapeutic
                  procedures. Proper cleaning and sterilization between uses are
                  essential to maintain safety and device integrity
                </motion.p>
              </div>
            </motion.div>
          </div>
          <section className="bg-white py-16 overflow-hidden border-t border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-blue-600 uppercase tracking-wide mb-2">
                  Compatible Brands
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              >
                {Brand.map((src, index) => (
                  <motion.div
                    key={src.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="aspect-[3/3] bg-slate-50 rounded-xl p-6 flex items-center justify-center hover:bg-slate-100 transition-colors">
                      {/* Replace with actual logo URLs when available */}
                        <div className="text-center">
                          <img
                            className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors"
                            src={src.src}
                            alt={src.src}
                          />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ReusableGuide;
