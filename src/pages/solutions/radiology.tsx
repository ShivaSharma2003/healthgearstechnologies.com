import SolutionLayout from "../../components/SolutionLayout";
import { FiImage, FiSearch, FiDatabase, FiCpu, FiCloud, FiShield } from "react-icons/fi";

const radiologyData = {
  title: "Radiology Solutions",
  description: "State-of-the-art ultrasound imaging solutions for radiologists, providing superior image quality and advanced diagnostic tools for comprehensive patient care.",
  imageUrl: "https://images.unsplash.com/photo-1584017911691-b197a5a8c6a4?auto=format&fit=crop&w=1200",
  benefits: [
    "Superior image resolution for accurate diagnostics",
    "Advanced visualization tools for detailed analysis",
    "Comprehensive measurement capabilities",
    "Streamlined workflow optimization",
    "Integration with PACS and hospital systems",
    "Multi-modality image comparison",
    "Advanced reporting capabilities",
    "Automated image optimization"
  ],
  features: [
    {
      title: "Advanced Imaging",
      description: "High-resolution ultrasound imaging with advanced processing capabilities.",
      icon: FiImage
    },
    {
      title: "Diagnostic Tools",
      description: "Comprehensive suite of measurement and analysis tools.",
      icon: FiSearch
    },
    {
      title: "Data Management",
      description: "Efficient storage and retrieval of patient imaging data.",
      icon: FiDatabase
    },
    {
      title: "Processing Power",
      description: "High-performance computing for real-time image processing.",
      icon: FiCpu
    },
    {
      title: "Cloud Integration",
      description: "Secure cloud storage and sharing capabilities.",
      icon: FiCloud
    },
    {
      title: "Security Features",
      description: "Advanced data protection and access control.",
      icon: FiShield
    }
  ],
  caseStudies: [
    {
      title: "Major Hospital Implementation",
      description: "How a large hospital system improved diagnostic accuracy and reduced wait times using our radiology solutions.",
      imageUrl: "https://images.unsplash.com/photo-1583912685222-a941d28841e4?auto=format&fit=crop&w=800"
    },
    {
      title: "Imaging Center Upgrade",
      description: "A radiology center's journey to enhanced imaging capabilities and improved patient throughput.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
    }
  ]
};

export default function Radiology() {
  return <SolutionLayout {...radiologyData} />;
}