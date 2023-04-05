// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useStore } from '../../store/StoreContext';

const Product = () => {
  const { id } = useParams();
  const { handleAddProductsToCart } = useStore();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios(`https://dummyjson.com/products/${id}`);
      setProduct(product);
    };

    getProduct();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <img src={product?.images?.[0]} alt="avatar" />
        <h1>{product?.title}</h1>
        <h2>Price: {product?.price}</h2>
        <h2>Brand: {product?.brand}</h2>
      </div>
      <h2 onClick={() => handleAddProductsToCart(product)}>Add to Cart</h2>
    </div>
  );
};

export default Product;
