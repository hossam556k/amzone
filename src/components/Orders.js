import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/GlobalState';
import { QuerySnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Order from './Order';

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const collRef = collection(db, 'users', user?.uid, 'orders');
      const orderRef = query(collRef, orderBy('created', 'desc'));
      onSnapshot(orderRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className='orders'>
      <h1>Your orders</h1>
      <div className='orders-order'>
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
