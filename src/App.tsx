import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";
import GE from "./pages/products/ge";
import Hitachi from "./pages/products/hitachi";
import Samsung from "./pages/products/samsung";
import NotFound from "./pages/NotFound";
import ReusableGuide from "./pages/products/reusable-guide";
import DisposableGuides from "./pages/products/disposable-guides";
import NewProbes from "./pages/new-probes";
import RefurbishedProbes from "./pages/refurbished-probes";
import SellUltrasound from "./pages/services/sell-ultrasound";
import RepairProbes from "./pages/services/repair-probes";

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products/ge" element={<GE />} />
        <Route path="/products/hitachi" element={<Hitachi />} />
        <Route path="/products/samsung" element={<Samsung />} />
        <Route path="/products/disposable-biopsy-guide" element={<DisposableGuides />}/>
        <Route path="/products/reusable-biopsy-guide" element={<ReusableGuide />}/>
        <Route path="/products/new-probes" element={<NewProbes />} />
        <Route path="/products/refurbished-probes" element={<RefurbishedProbes />}/>
        <Route path="/service/sell-ultrasound" element={<SellUltrasound />} />
        <Route path="/service/probe-repair" element={<RepairProbes />} />
      </Routes>
    </Layout>
  );
};

export default App;
