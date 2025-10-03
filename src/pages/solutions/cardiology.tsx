import SolutionLayout from "../../components/SolutionLayout";
import { FiHeart, FiActivity, FiTrendingUp, FiUsers, FiClipboard, FiZap } from "react-icons/fi";

const cardiologyData = {
  title: "Cardiology Solutions",
  description: "Advanced ultrasound solutions designed specifically for cardiac imaging and diagnostics, providing exceptional visualization and comprehensive tools for accurate cardiac assessment.",
  imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200",
  benefits: [
    "High-resolution cardiac imaging for accurate diagnosis",
    "Advanced quantification tools for detailed measurements",
    "Comprehensive cardiac assessment workflows",
    "Enhanced visualization of complex cardiac structures",
    "Real-time 4D imaging for dynamic cardiac evaluation",
    "Stress echo capabilities for functional assessment",
    "Integrated reporting tools for efficient documentation",
    "Advanced strain analysis for early detection"
  ],
  features: [
    {
      title: "Advanced Cardiac Imaging",
      description: "High-quality visualization of cardiac structures with advanced processing algorithms.",
      icon: FiHeart
    },
    {
      title: "Real-time Analysis",
      description: "Instant measurements and calculations for quick diagnostic decisions.",
      icon: FiActivity
    },
    {
      title: "Performance Metrics",
      description: "Comprehensive tools for evaluating cardiac function and efficiency.",
      icon: FiTrendingUp
    },
    {
      title: "Patient Management",
      description: "Integrated solutions for patient data handling and follow-up care.",
      icon: FiUsers
    },
    {
      title: "Reporting System",
      description: "Automated reporting tools for efficient documentation and sharing.",
      icon: FiClipboard
    },
    {
      title: "Quick Diagnosis",
      description: "Streamlined workflows for faster and more accurate diagnoses.",
      icon: FiZap
    }
  ],
  caseStudies: [
    {
      title: "Regional Heart Center Success Story",
      description: "How a leading cardiac center improved diagnostic accuracy by 40% using our advanced cardiac imaging solutions.",
      imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800"
    },
    {
      title: "Private Practice Implementation",
      description: "A private cardiology practice streamlined their workflow and reduced diagnosis time by 50%.",
      imageUrl: "https://images.unsplash.com/photo-1583912685222-a941d28841e4?auto=format&fit=crop&w=800"
    }
  ]
};

export default function Cardiology() {
  return <SolutionLayout {...cardiologyData} />;
}