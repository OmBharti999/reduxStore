// import Nav from "../components/Navbar";
import { useState, useEffect } from "react";
import Product from "../components/Product";

// import "./styles.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log(data);

      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="home">
      <h1>Our Products</h1>
      <Product products={products} />
    </div>
  );
}
