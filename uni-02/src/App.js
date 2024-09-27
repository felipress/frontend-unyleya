import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products'
import Product from './pages/Product'
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ProductReviews from './pages/ProductReviews'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />}>
                <Route path="reviews" element={<ProductReviews />} />
            </Route>
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App