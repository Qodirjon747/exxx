import "./card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <h3 className="card-title">{item.title}</h3>
      <p className="card-price">${item.price}</p>
      <Link to={`/product/${item.id}`} className="card-button">
        View Product
      </Link>
    </div>
  );
}

export default Card;
