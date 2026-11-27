import "./Retiro.css";

export default function Retiro() {
  const carrito = [
    {
      id: 1,
      nombre: "Torta de chocolate",
      precio: 24000,
      cantidad: 1,
      variante: "12 porciones",
      nota: "Feliz cumple Ana",
    },
  ];

  const total = carrito.reduce(
    (acum, item) => acum + item.precio * item.cantidad,
    0
  );

  return (
    <div className="retiro-container">
      <h1>Retiro del pedido</h1>

      <section className="retiro-card">
        <h2>Resumen del pedido</h2>

        {carrito.map((item) => (
          <div key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Variante: {item.variante}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Mensaje: {item.nota}</p>
            <p>Precio: ${item.precio}</p>
          </div>
        ))}

        <h3>Total: ${total}</h3>
      </section>

      <section className="retiro-card">
        <h2>Datos de retiro</h2>

        <p>Fecha de retiro</p>
        <input type="date" />

        <p>Franja horaria</p>
        <select>
          <option>09:00 - 10:00</option>
          <option>10:00 - 11:00</option>
          <option>11:00 - 12:00</option>
          <option>16:00 - 17:00</option>
        </select>

        <p>Nombre de quien retira</p>
        <input
          type="text"
          placeholder="Nombre completo"
        />
      </section>

      <button className="retiro-btn">
        Continuar al checkout
      </button>
    </div>
  );
}