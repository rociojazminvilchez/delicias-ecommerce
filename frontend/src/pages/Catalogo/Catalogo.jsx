import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import productos from "../../data/productos.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Catalogo.css";

const filtros = [
  { nombre: "Todos", tipo: null, valor: null },
  { nombre: "Pastelería", tipo: "categoria", valor: "pasteleria" },
  { nombre: "Tortas", tipo: "categoria", valor: "tortas" },
  { nombre: "Viennoiserie", tipo: "categoria", valor: "viennoiserie" },
  { nombre: "Masa madre", tipo: "categoria", valor: "masa-madre" },
  { nombre: "Sin lácteos", tipo: "inclusivo", valor: "sin-lacteos" },
];

// Pasa a minúsculas y saca los acentos, para que "pasteleria" encuentre "Pastelería"
function limpiar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState("");

  const categoria = searchParams.get("categoria");
  const inclusivo = searchParams.get("inclusivo");

  const productosFiltrados = productos.filter((p) => {
    const cumpleCategoria = !categoria || p.categoria === categoria;
    const cumpleInclusivo = !inclusivo || p.inclusivo.includes(inclusivo);
    const cumpleBusqueda = limpiar(p.nombre).includes(limpiar(busqueda));
    return cumpleCategoria && cumpleInclusivo && cumpleBusqueda;
  });

  function estaActivo(filtro) {
    if (filtro.tipo === null) return !categoria && !inclusivo;
    if (filtro.tipo === "categoria") return categoria === filtro.valor;
    return inclusivo === filtro.valor;
  }

  function elegirFiltro(filtro) {
    if (filtro.tipo === null) {
      setSearchParams({});
    } else {
      setSearchParams({ [filtro.tipo]: filtro.valor });
    }
  }

  return (
    <section className="catalogo">
      <h1>Catálogo</h1>

      <input
        type="search"
        className="catalogo__buscador"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="catalogo__filtros">
        {filtros.map((filtro) => (
          <button
            key={filtro.nombre}
            className={
              estaActivo(filtro)
                ? "catalogo__filtro catalogo__filtro--activo"
                : "catalogo__filtro"
            }
            onClick={() => elegirFiltro(filtro)}
          >
            {filtro.nombre}
          </button>
        ))}
      </div>

      <p className="catalogo__cantidad">
        {productosFiltrados.length} producto(s)
      </p>

      {productosFiltrados.length === 0 ? (
        <p className="catalogo__vacio">
          No encontramos productos con esos filtros.
        </p>
      ) : (
        <div className="catalogo__grid">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}