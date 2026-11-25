import { Link } from "react-router-dom";
import "./Navbar.css";

const categorias = [
  { nombre: "Pastelería", valor: "pasteleria" },
  { nombre: "Tortas", valor: "tortas" },
  { nombre: "Viennoiserie", valor: "viennoiserie" },
  { nombre: "Masa madre", valor: "masa-madre" },
];

export default function Navbar() {
  // Por ahora fijo en 0. Más adelante lo conectamos al carrito real.
  const cantidadCarrito = 0;

  return (
    <header className="navbar">
      <div className="navbar__contenido">
        <Link to="/" className="navbar__logo">
          Delicias
        </Link>

        <nav className="navbar__links">
          {categorias.map((cat) => (
            <Link key={cat.valor} to={`/catalogo?categoria=${cat.valor}`}>
              {cat.nombre}
            </Link>
          ))}
        </nav>

        <div className="navbar__acciones">
          <Link
            to="/catalogo"
            className="navbar__icono navbar__icono--rosa"
            aria-label="Buscar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </Link>

          <Link
            to="/carrito"
            className="navbar__icono navbar__icono--durazno"
            aria-label="Carrito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 9h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 9z" />
              <path d="M9 9l3-5 3 5" />
            </svg>
            {cantidadCarrito > 0 && (
              <span className="navbar__badge">{cantidadCarrito}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}