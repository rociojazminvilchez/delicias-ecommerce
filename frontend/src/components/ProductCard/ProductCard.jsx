import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ producto }) {
  return (
    <Link to={`/producto/${producto.id}`} className="product-card">
      <div className="product-card__img">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="product-card__info">
        <span className="product-card__nombre">{producto.nombre}</span>
        <span className="product-card__precio">
          ${producto.precio.toLocaleString("es-AR")}
        </span>
      </div>
    </Link>
  );
}