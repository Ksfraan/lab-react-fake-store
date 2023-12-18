import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products'
                );
                console.log('response1: ', response);
                setProducts(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='ProductListPage'>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/details/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '50px', marginRight: '10px' }}
                            />
                            {product.title} - <strong>${product.price}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductListPage;
