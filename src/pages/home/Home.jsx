import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="cards-container">
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
