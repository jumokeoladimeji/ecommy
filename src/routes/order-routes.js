import express from 'express';
import orderHandler from '../requestHandler/order.js';
import { verifyToken } from '../middleware/authentication.js';

const orderRouter = express.Router();

orderRouter
  .post('/', orderHandler.create)
  .get('/', verifyToken, orderHandler.getAll) // admin
  .get('/users/:userId/orders', orderHandler.getUserOrders)
  .get('/:orderId', orderHandler.getOne)
  .put('/:orderId', orderHandler.update) // can't update once paid
  .delete('/:orderId', verifyToken, orderHandler.delete) // admin

export default orderRouter
