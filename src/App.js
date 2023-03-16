import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import DetalhesProdutos from "./pages/DetalhesProduto";

import "./index.css";
import Collum from "./pages/Collum";

export default function App() {
  return (
    <div>
      <Collum/>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />
          <Route path="/produtos/:id" element={<DetalhesProdutos/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
