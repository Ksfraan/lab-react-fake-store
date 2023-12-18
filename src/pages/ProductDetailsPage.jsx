import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function ProductDetailsPage() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${productId}`
                );
                console.log('response: ', response);
                setProduct(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do produto:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    return (
        <div className='ProductDetailsPage'>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: '15em', height: '15em' }}
            />
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-category'>{product.category}</p>
            <p className='product-description'>{product.description}</p>
            <p>
                <strong>Price:</strong> {product.price}
            </p>

            <button>
                <Link to='/'>Back</Link>
            </button>
            {/* */}
        </div>
    );
}

export default ProductDetailsPage;
