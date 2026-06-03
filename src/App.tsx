import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import PedidoPage from "./pages/Pedido";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/pedido" element={<PedidoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
