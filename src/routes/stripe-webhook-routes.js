import express from 'express';

import stripeHandler from '../requestHandler/stripe-webhook';
const stripeWebhookListenerRouter = express.Router();

stripeWebhookListenerRouter
    .post('/listen', stripeHandler.listener)

export default stripeWebhookListenerRouter;