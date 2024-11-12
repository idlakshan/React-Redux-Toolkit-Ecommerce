import React from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../store/features/products/products'

const ProductList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
   // console.log(products);
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products</p>;

    const handleDelete = async (id) => {
       // console.log("hi");
        await deleteProduct(id);
      };

    return (
        <div>
            <h2>Product List</h2>
            {
                products?.map((product) => {
                    return <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <img className='product-image' src={product.image} alt="" />
                        <p>${product.price}</p>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList