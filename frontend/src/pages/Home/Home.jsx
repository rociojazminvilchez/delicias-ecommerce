import { Link } from "react-router-dom";
import productos from "../../data/productos.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const categorias = [
  { nombre: "Pastelería", enlace: "/catalogo?categoria=pasteleria", icono: "🎂", color: "#f4c6dc" },
  { nombre: "Tortas", enlace: "/catalogo?categoria=tortas", icono: "💜", color: "#e0d0f5" },
  { nombre: "Viennoiserie", enlace: "/catalogo?categoria=viennoiserie", icono: "🥐", color: "#fde9a8" },
  { nombre: "Masa madre", enlace: "/catalogo?categoria=masa-madre", icono: "🌿", color: "#c9e8d2" },
  { nombre: "Sin lácteos", enlace: "/catalogo?inclusivo=sin-lacteos", icono: "🍃", color: "#fdd5b8" },
];

export default function Home() {
  const favoritos = productos.filter((p) => p.destacado).slice(0, 8);

  return (
    <main className="home">
      {/* 1. Hero */}
      <section className="hero">
        <div className="hero__texto">
          <h1>Dulce, artesanal y listo para vos.</h1>
          <p>Elegí, reservá y retirá sin filas.</p>
          <Link to="/catalogo" className="boton boton--oscuro">
            Ver productos →
          </Link>
        </div>
        <div className="hero__imagen">
          <span className="hero__etiqueta">🕐 Retiro desde mañana</span>
        </div>
      </section>

      {/* 2. Categorías */}
      <section className="categorias">
        {categorias.map((cat) => (
          <Link key={cat.nombre} to={cat.enlace} className="categoria">
            <span className="categoria__circulo" style={{ background: cat.color }}>
              {cat.icono}
            </span>
            <span className="categoria__nombre">{cat.nombre}</span>
          </Link>
        ))}
      </section>

      {/* 3. Favoritos */}
      <section className="favoritos">
        <h2>Favoritos de la semana</h2>
        <div className="favoritos__grid">
          {favoritos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      {/* 4. Banner de retiro */}
      <section className="banner">
        <div className="banner__texto">
          <h2>Elegí el día y la hora de retiro.</h2>
          <Link to="/retiro" className="boton boton--rosa">
            Reservar mi retiro
          </Link>
        </div>
        <div className="banner__imagen" />
      </section>
    </main>
  );
}