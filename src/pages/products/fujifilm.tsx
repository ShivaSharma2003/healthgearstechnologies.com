import ProductLayout from "../../components/ProductLayout";

const FUJIFILM_PRODUCTS = {
  "Sonosite PX": {
    manufacturer: "Fujifilm",
    model: "Sonosite PX",
    modelNumber: "PX-ULT",
    imageUrl: "https://images.unsplash.com/photo-1583912685341-9f34c4472de3?auto=format&fit=crop&w=800",
    description: "The Fujifilm Sonosite PX is a portable ultrasound system designed for reliability and ease of use in any environment, featuring an adaptable form factor and advanced imaging capabilities.",
    features: [
      "Advanced high-resolution imaging technology",
      "Intuitive touch interface for rapid operation",
      "Drop-tested durability for reliability",
      "Fast boot-up time for emergency situations",
      "Spill-resistant design for enhanced durability",
      "Comprehensive exam types support",
      "Extended battery life for portable use",
      "Integrated infection control features"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "15.6\" LED" },
          { label: "Touch Interface", value: "12.1\" LCD" },
          { label: "Adjustability", value: "8-position" }
        ]
      },
      {
        category: "Portability",
        items: [
          { label: "Weight", value: "7.9 kg" },
          { label: "Battery Life", value: "3 hours" },
          { label: "Boot Time", value: "< 25 seconds" }
        ]
      },
      {
        category: "System Features",
        items: [
          { label: "Storage", value: "256GB SSD" },
          { label: "Durability", value: "IP47 rated" },
          { label: "Connectivity", value: "Wi-Fi, DICOM" }
        ]
      }
    ]
  }
};

export default function Fujifilm() {
  const product = FUJIFILM_PRODUCTS["Sonosite PX"];
  return <ProductLayout {...product} />;
}