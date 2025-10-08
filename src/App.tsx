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

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/ge" element={<GE />} />
        <Route path="/products/hitachi" element={<Hitachi />} />
        <Route path="/products/samsung" element={<Samsung />} />
      </Routes>
    </Layout>
  );
};

export default App;
