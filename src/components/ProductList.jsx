import React from 'react'
import { useGetProductsQuery } from '../store/features/products/products'

const ProductList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
   // console.log(products);
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products</p>;

    return (
        <div>
            <h2>Product List</h2>
            {
                products?.map((product) => {
                    return <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <button>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList