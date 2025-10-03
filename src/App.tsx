import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";

// Product Pages
import Canon from "./pages/products/canon";
import CartBased from "./pages/products/cart-based";
import Compact from "./pages/products/compact";
import Fujifilm from "./pages/products/fujifilm";
import GE from "./pages/products/ge";
import Hitachi from "./pages/products/hitachi";
import Philips from "./pages/products/philips";
import Samsung from "./pages/products/samsung";

// Solution Pages
import Cardiology from "./pages/solutions/cardiology";
import Radiology from "./pages/solutions/radiology";
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

        {/* Product Routes */}
        <Route path="/products/canon" element={<Canon />} />
        <Route path="/products/cart-based" element={<CartBased />} />
        <Route path="/products/compact" element={<Compact />} />
        <Route path="/products/fujifilm" element={<Fujifilm />} />
        <Route path="/products/ge" element={<GE />} />
        <Route path="/products/hitachi" element={<Hitachi />} />
        <Route path="/products/philips" element={<Philips />} />
        <Route path="/products/samsung" element={<Samsung />} />

        {/* Solution Routes */}
        <Route path="/products/cardiology" element={<Cardiology />} />
        <Route path="/products/radiology" element={<Radiology />} />
      </Routes>
    </Layout>
  );
};

export default App;
