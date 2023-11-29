import express from 'express';
import orderHandler from '../requestHandler/order.js';
const orderRouter = express.Router();

orderRouter
  .post('/orders', orderHandler.create)
  .get('/orders', orderHandler.getAll) // admin
  .get('/orders/:orderId', orderHandler.getOne)
  .get(':userId/orders/:orderId ',orderHandler.getUserOrders)
  .put('/orders/:orderId', orderHandler.update) // can't update once paid
  .delete('/orders/:orderId', orderHandler.delete) // admin

export default orderRouter
