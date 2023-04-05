// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography, Button, Stack } from '@mui/material';

import './CardItem.scss';
import { useStore } from '../../store/StoreContext';

const CartProductItem = ({ product }) => {
  const { handleDeleteProductFromCart } = useStore();
  return (
    <div className="card">
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <p
          style={{ color: 'red', cursor: 'pointer', marginLeft: 2 }}
          onClick={() => handleDeleteProductFromCart(product.id)}>
          Remove
        </p>
      </div>
      <div className="card-info">
        <p>
          Brand: <strong>{product?.brand}</strong>
        </p>
        <p>
          Category: <strong> {product?.category} </strong>
        </p>
        <p>
          Quantity: <strong>{product.quantity}</strong>{' '}
        </p>
      </div>
    </div>
  );
};

const CardItem = ({ product, handleDeleteProduct, onUpdateProduct }) => {
  const { handleAddProductsToCart } = useStore();

  const [editableProduct, setEditableProduct] = useState({});

  const location = useLocation();

  const handleEditProduct = (product) => {
    setEditableProduct((prev) => {
      if (prev.id === product.id) {
        return {};
      }
      return product;
    });
  };

  const handlEditValues = (event) => {
    setEditableProduct((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUpdateProduct = () => {
    onUpdateProduct?.(editableProduct);
    setEditableProduct({});
  };

  // @ts-ignore
  const renderEditableProduct = () => (
    <div className="card">
      <div className="card-header">
        <img
          src={
            // @ts-ignore
            product.images[0]
          }
          width="50px"
          height="100px"
        />
        <span>
          {/* <strong>{product.firstName} </strong>
          <strong> {product.lastName} </strong> */}
          <input
            // @ts-ignore
            value={editableProduct.title}
            name="title"
            // @ts-ignore
            onChange={handlEditValues}
          />
          <input
            // @ts-ignore
            value={editableProduct.lastName}
            name="lastName"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <div className="card-info">
        <span>
          Phone number:{' '}
          <input
            // @ts-ignore
            value={editableProduct.phone}
            name="phoneNumber"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{' '}
          <input
            // @ts-ignore
            value={editableProduct.brand}
            name="city"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <button
        onClick={
          // @ts-ignore
          handleUpdateProduct
        }>
        Update Product
      </button>
    </div>
  );

  const renderProduct = () => (
    <div className="card">
      <div className="card-header">
        <img src={product.images[0]} width="50px" height="100px" />
        <p>
          <Link to={`product/${product.id}`}>
            <strong>{product.title}</strong>{' '}
          </Link>
        </p>
        <Typography
          color="error"
          sx={{ cursor: 'pointer', marginLeft: 2 }}
          onClick={() => handleDeleteProduct(product.id)}>
          Delete
        </Typography>
      </div>
      <div className="card-info">
        <Typography color="text">
          Brand: <strong>{product?.brand}</strong>
        </Typography>
        <Typography>
          Category: <strong> {product?.category} </strong>
        </Typography>
      </div>
      <Button variant="outlined" color="info" onClick={() => handleEditProduct(product)}>
        Edit Product
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: '10px' }}
        onClick={() => handleAddProductsToCart(product)}>
        Add To Cart
      </Button>
    </div>
  );

  const renderContent = useMemo(() => {
    if (location.pathname === '/cart') {
      return <CartProductItem product={product} />;
    }
    if (editableProduct.id) {
      return renderEditableProduct();
    }
    return renderProduct();
  }, [editableProduct.id, product.quantity]);

  return <>{renderContent}</>;
};

export default CardItem;
