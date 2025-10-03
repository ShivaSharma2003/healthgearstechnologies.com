import ProductLayout from "../../components/ProductLayout";

const CANON_PRODUCTS = {
  "Aplio i800": {
    manufacturer: "Canon",
    model: "Aplio i800",
    modelNumber: "TUS-AI800",
    imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800",
    description: "The Canon Aplio i800 is a premium ultrasound system that delivers outstanding clinical precision and productivity for the most demanding radiology departments.",
    features: [
      "iBeam+ advanced beamforming technology for enhanced image quality",
      "Smart Sensor 3D for intuitive volume navigation",
      "Advanced contrast imaging capabilities",
      "SMI (Superb Micro-vascular Imaging) technology",
      "Real-time application of multiple image improvement technologies",
      "Comprehensive measurement and analysis packages",
      "Ergonomic design for improved workflow efficiency",
      "Advanced imaging modes for specialized examinations"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor", value: "22\" LCD" },
          { label: "Touch Panel", value: "13\" LCD" },
          { label: "Control Panel", value: "Adjustable height & rotation" }
        ]
      },
      {
        category: "Imaging Technology",
        items: [
          { label: "Beam Technology", value: "iBeam+" },
          { label: "Contrast Modes", value: "Multiple" },
          { label: "3D/4D Capability", value: "Yes" }
        ]
      },
      {
        category: "System Features",
        items: [
          { label: "Storage", value: "1TB SSD" },
          { label: "Connectivity", value: "DICOM, Wireless" },
          { label: "Power", value: "100-240V" }
        ]
      }
    ]
  }
};

export default function Canon() {
  const product = CANON_PRODUCTS["Aplio i800"];
  return <ProductLayout {...product} />;
}