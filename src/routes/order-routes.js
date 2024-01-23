import express from 'express';
import orderHandler from '../requestHandler/order.js';
import { verifyToken } from '../middleware/authentication.js';

const orderRouter = express.Router();

orderRouter
  .post('/orders', verifyToken, orderHandler.create)
  .get('/orders', verifyToken, orderHandler.getAll) // admin
  .get('/users/:userId/orders ', verifyToken, orderHandler.getUserOrders)
  .get('/orders/:orderId', verifyToken, orderHandler.getOne)
  .put('/orders/:orderId', verifyToken, orderHandler.update) // can't update once paid
  .delete('/orders/:orderId', verifyToken, orderHandler.delete) // admin

export default orderRouter
