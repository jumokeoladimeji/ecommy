import express from 'express';

import cardHandler from '../requestHandler/card.js';
const cardRouter = express.Router();

cardRouter
  .post('/', cardHandler.create)
  .get('/', cardHandler.getAll)
  .get('/:cardId', cardHandler.getOne)
  .put('/:cardId', cardHandler.update)
  .delete('/:cardId', cardHandler.delete)

export default cardRouter
