import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoStrip from "./InfoStrip";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <InfoStrip />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
