import Nav from "./components/Navbar";
import Footer from "./components/Footer";
// import Product from "./components/Product";
import Home from "./pages/Home";
import Routes from "./Routes";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}
