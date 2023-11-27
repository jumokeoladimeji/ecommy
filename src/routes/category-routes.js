import express from 'express';

import categoryHandler from '../requestHandler/category.js';
const categoryRouter = express.Router();

categoryRouter
  .post('/', categoryHandler.create)
  .get('/', categoryHandler.getAll)
  .get('/:categoryId', categoryHandler.getOne)
  .put('/:categoryId', categoryHandler.update)
  .delete('/:categoryId', categoryHandler.delete)

export default categoryRouter
