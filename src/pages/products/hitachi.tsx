import ProductLayout from "../../components/ProductLayout";

const HITACHI_PRODUCTS = {
  "ARIETTA 850": {
    manufacturer: "Hitachi",
    model: "ARIETTA 850",
    modelNumber: "A850-SE",
    imageUrl: "https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&w=800",
    description: "The Hitachi ARIETTA 850 is a premium diagnostic ultrasound system that combines advanced imaging technologies with an intuitive workflow to deliver exceptional diagnostic confidence and operational efficiency.",
    features: [
      "eFocusing technology for enhanced image clarity throughout the field of view",
      "Carving Imaging for advanced 3D/4D visualization",
      "Real-time Virtual Sonography (RVS) fusion imaging",
      "Advanced CPPS (Clinical Pure Pixel Solution) technology",
      "Dual crystal wide-band transducer technology",
      "Real-time Tissue Elastography with strain ratio measurement",
      "Enhanced B-mode imaging with speckle reduction",
      "Comprehensive measurement and analysis packages"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "21.5\" IPS LCD" },
          { label: "Touch Panel", value: "10.4\" Color LCD" },
          { label: "Control Panel", value: "Height-adjustable" }
        ]
      },
      {
        category: "Imaging Technology",
        items: [
          { label: "B-mode Processing", value: "CPPS Advanced" },
          { label: "Doppler Modes", value: "Color, Power, PW, CW" },
          { label: "3D/4D", value: "Real-time with Carving" }
        ]
      },
      {
        category: "System Features",
        items: [
          { label: "Storage", value: "1TB SSD" },
          { label: "Image Archive", value: "500GB dedicated" },
          { label: "Connectivity", value: "DICOM 3.0" }
        ]
      },
      {
        category: "Physical Specifications",
        items: [
          { label: "Weight", value: "165 kg" },
          { label: "Dimensions", value: "58 x 85 x 140 cm" },
          { label: "Power Supply", value: "100-240V AC" }
        ]
      }
    ]
  },
  "Noblus": {
    manufacturer: "Hitachi",
    model: "Noblus",
    modelNumber: "EUB-8500",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800",
    description: "The Hitachi Noblus is a versatile ultrasound system that combines premium imaging capabilities with a compact, flexible design, making it ideal for both routine and specialized examinations.",
    features: [
      "Compact and flexible system design",
      "High-resolution LCD monitor with wide viewing angle",
      "Advanced harmonics imaging technology",
      "Real-time Tissue Elastography",
      "Wireless DICOM connectivity",
      "Quick boot-up and sleep mode",
      "Ergonomic control panel layout",
      "Comprehensive application packages"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "19\" LED" },
          { label: "Operating Panel", value: "Tablet-style" },
          { label: "Touchscreen", value: "10.4\" LCD" }
        ]
      },
      {
        category: "System Performance",
        items: [
          { label: "Boot Time", value: "< 30 seconds" },
          { label: "Battery Life", value: "1 hour" },
          { label: "Storage", value: "500GB SSD" }
        ]
      },
      {
        category: "Connectivity",
        items: [
          { label: "Network", value: "Wi-Fi, Ethernet" },
          { label: "USB Ports", value: "4x USB 3.0" },
          { label: "Video Output", value: "DVI-D, HDMI" }
        ]
      }
    ]
  }
};

export default function Hitachi() {
  // For now, we'll show the ARIETTA 850 as the main product
  const product = HITACHI_PRODUCTS["ARIETTA 850"];
  return <ProductLayout {...product} />;
}