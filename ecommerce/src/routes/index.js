import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Carrinho from '../pages/Carrinho';
import Produto from '../pages/Produto';
import Produtos from '../pages/Produtos';
import Sobre from '../pages/Sobre';
import NotFound from '../pages/NotFound';

const RouteList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/produtos/produto" element={<Produto />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)



export default RouteList;