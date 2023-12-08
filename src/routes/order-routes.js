import express from 'express';
import orderHandler from '../requestHandler/order.js';
const orderRouter = express.Router();

orderRouter
  .post('/orders', orderHandler.create)
  .get('/orders', orderHandler.getAll) // admin
  .get('/users/:userId/orders ',orderHandler.getUserOrders)
  .get('/orders/:orderId', orderHandler.getOne)
  .put('/orders/:orderId', orderHandler.update) // can't update once paid
  .delete('/orders/:orderId', orderHandler.delete) // admin

export default orderRouter
