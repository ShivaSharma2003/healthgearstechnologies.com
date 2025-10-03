import ProductLayout from "../../components/ProductLayout";

const SAMSUNG_PRODUCTS = {
  "HERA W10": {
    manufacturer: "Samsung",
    model: "HERA W10",
    modelNumber: "HS70A",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    description: "The Samsung HERA W10 is a premium women's health ultrasound system that combines exceptional image quality with innovative features for advanced diagnostic confidence.",
    features: [
      "Crystal Architecture™ for exceptional image clarity",
      "ShadowHDR™ for enhanced contrast resolution",
      "Advanced 3D/4D rendering capabilities",
      "MV-Flow™ for advanced blood flow visualization",
      "S-Vue Transducer™ technology for wider bandwidth",
      "AI-powered image optimization",
      "Ergonomic design with 23.8\" LED monitor",
      "Integrated security and data protection features"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "23.8\" LED" },
          { label: "Touch Screen", value: "13.3\" LED" },
          { label: "Control Panel", value: "Height-adjustable" }
        ]
      },
      {
        category: "Image Processing",
        items: [
          { label: "Architecture", value: "Crystal Architecture™" },
          { label: "3D/4D", value: "Advanced rendering" },
          { label: "AI Features", value: "Multiple" }
        ]
      },
      {
        category: "System",
        items: [
          { label: "Storage", value: "2TB SSD" },
          { label: "Memory", value: "64GB" },
          { label: "Connectivity", value: "Wi-Fi, DICOM" }
        ]
      }
    ]
  }
};

export default function Samsung() {
  const product = SAMSUNG_PRODUCTS["HERA W10"];
  return <ProductLayout {...product} />;
}