import React, { useState, useEffect } from 'react'
import Product from './Product'

const url = "http://localhost:8888/drupal/api/v1/products"

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await (await fetch(url)).json()
            setProducts(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            {products.map(product => {
                return <Product key={product.field_id} product={product} />
            })}
        </div>
    )
}

export default Products
