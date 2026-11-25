import productos from "../../data/productos.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Catalogo.css";

export default function Catalogo() {
  return (
    <section className="catalogo">
      <h1>Catálogo</h1>
      <div className="catalogo__grid">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}