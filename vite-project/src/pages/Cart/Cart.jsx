// @ts-nocheck
import React from 'react';

import CardItem from '../../components/Card';
import { useStore } from '../../store/StoreContext';
// import FormItem, { Form, SuccessPage } from '../../components/FormItem/Form';
// import CheckoutModal from '../../components/CheckoutModal/Check';

const Cart = () => {
  const { cartItems } = useStore();
  return (
    <>
      <h1>This is your cart</h1>
      {cartItems.map((product) => {
        return <CardItem key={product.id} product={product} />;
      })}
    </>
  );
};

export default Cart;
