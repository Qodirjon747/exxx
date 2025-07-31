import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./product.css";

function Product() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="product-container">
        <img src={item.image} alt={item.title} className="product-image" />
        <div className="product-info">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p><strong>${item.price}</strong></p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
