import ProductLayout from "../../components/ProductLayout";

const PHILIPS_PRODUCTS = {
  "EPIQ Elite": {
    manufacturer: "Philips",
    model: "EPIQ Elite",
    modelNumber: "EPIQ-E7C",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    description: "The Philips EPIQ Elite ultrasound system represents a revolutionary advance in premium ultrasound, delivering exceptional clinical performance across applications.",
    features: [
      "nSIGHT Imaging architecture for exceptional clarity",
      "xMATRIX technology for real-time 3D imaging",
      "Anatomical Intelligence for automated measurements",
      "PureWave crystal technology for enhanced penetration",
      "Advanced elastography capabilities",
      "MicroFlow Imaging for small vessel visualization",
      "Comprehensive automation tools",
      "Advanced clinical decision support features"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "24\" LCD" },
          { label: "Touch Screen", value: "12\" LED" },
          { label: "Control Panel", value: "Articulating arm" }
        ]
      },
      {
        category: "Imaging Technology",
        items: [
          { label: "Architecture", value: "nSIGHT" },
          { label: "Crystal Tech", value: "PureWave" },
          { label: "3D/4D", value: "xMATRIX" }
        ]
      },
      {
        category: "System Features",
        items: [
          { label: "Storage", value: "1TB SSD" },
          { label: "Processing", value: "Multi-core" },
          { label: "Connectivity", value: "Wireless, DICOM" }
        ]
      }
    ]
  }
};

export default function Philips() {
  const product = PHILIPS_PRODUCTS["EPIQ Elite"];
  return <ProductLayout {...product} />;
}