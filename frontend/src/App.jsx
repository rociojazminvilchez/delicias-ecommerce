import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Catalogo from "./pages/Catalogo/Catalogo";
import DetalleProducto from "./pages/Catalogo/DetalleProducto";
import Carrito from "./pages/Pedido/Carrito";
import Checkout from "./pages/Pedido/Checkout";
import Confirmacion from "./pages/Pedido/Confirmacion";
import Retiro from "./pages/Pedido/Retiro";
import Login from "./pages/Auth/Login";
import Registro from "./pages/Auth/Registro";
import RecuperarPassword from "./pages/Auth/RecuperarPassword";
import Perfil from "./pages/Cuenta/Perfil";
import MisPedidos from "./pages/Cuenta/MisPedidos";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/retiro" element={<Retiro />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mis-pedidos" element={<MisPedidos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}