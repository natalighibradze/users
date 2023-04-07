
// import React, { useState, useEffect } from 'react';

// const CheckoutModal = () => {
//     const [totalCost, setTotalCost] = useState(0);
//     const [formVisible, setFormVisible] = useState(false);
//     const [city, setCity] = useState('');
//     const [address, setAddress] = useState('');

//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//             .then(response => response.json())
//             .then(data => {
//                 let totalCost = 0;
//                 data.forEach(product => {
//                     totalCost += product.price; 
//                 });
//                 setTotalCost(totalCost);
//             });
//     }, []);

//     return (
//         <div>
//             <button onClick={() => setFormVisible(true)}>Checkout</button>
//             {formVisible && (
//                 <form>
//                     <input 
//                         type="text" 
//                         name="city" 
//                         placeholder="Enter your city"
//                         value={city}
//                         onChange={e => setCity(e.target.value)}
//                     />
//                     <input 
//                         type="text" 
//                         name="address" 
//                         placeholder="Enter your address"
//                         value={address}
//                         onChange={e => setAddress(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         name="totalCost"
//                         disabled="true"
//                         value={totalCost}
//                     />
//                 </form>
//             )}
//         </div>
//     );
// };

// export default CheckoutModal;