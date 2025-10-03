import ProductLayout from "../../components/ProductLayout";

// Get the product data based on the current path
const GE_PRODUCTS = {
  "Voluson E10": {
    manufacturer: "GE Healthcare",
    model: "Voluson E10",
    modelNumber: "VE10-PRO",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800",
    description: "The Voluson E10 is GE's premium ultrasound system for women's health, providing exceptional image quality and advanced tools for complex women's health exams.",
    features: [
      "HDlive™ advanced visualization technology for extraordinary anatomical realism",
      "Advanced Volume Contrast Imaging (VCI) with OmniView",
      "Electronic 4D technology with high volume rates",
      "Advanced STIC (Spatio-Temporal Image Correlation) for fetal cardiac assessment",
      "Real-time 4D imaging with exceptional frame rates",
      "Advanced automation tools for consistent measurements",
      "SonoNT (Sonography-based Nuchal Translucency) automated measurements",
      "Integrated security features with encrypted data protection"
    ],
    specifications: [
      {
        category: "Display & Interface",
        items: [
          { label: "Monitor Type", value: "23\" LED HD" },
          { label: "Touch Panel", value: "12.1\" LCD" },
          { label: "User Interface", value: "Intuitive touch interface" }
        ]
      },
      {
        category: "Imaging Capabilities",
        items: [
          { label: "2D Image Processing", value: "Advanced" },
          { label: "3D/4D Capability", value: "Yes, with HDlive" },
          { label: "Frame Rate", value: "Up to 1000 fps" }
        ]
      },
      {
        category: "System Architecture",
        items: [
          { label: "Hard Drive", value: "1TB SSD" },
          { label: "Memory", value: "32GB RAM" },
          { label: "Operating System", value: "Windows 10 IoT" }
        ]
      },
      {
        category: "Physical Specifications",
        items: [
          { label: "Weight", value: "145 kg" },
          { label: "Dimensions", value: "55 x 70 x 140 cm" },
          { label: "Power Supply", value: "100-240V" }
        ]
      }
    ]
  }
};

export default function GE() {
  // In a real application, you would use useParams or similar to get the specific model
  // For now, we'll show the Voluson E10 as an example
  const product = GE_PRODUCTS["Voluson E10"];
  
  return <ProductLayout {...product} />;
}