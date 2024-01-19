import cors from 'cors';
import cardRouter from './card-routes';
// import addressesRouter from './addresses-routes';
// import billingRouter from './billing-routes';
import categoryRouter from './category-routes';
import orderRouter from './order-routes';
import userRouter from './user-routes.js';
import stripeWebhookListenerRouter from './stripe-webhook-routes.js'

export default (app) => {
    app.use(cors());
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/categories', categoryRouter)
    app.use('/api/v1', orderRouter)
    app.use('/api/v1/cards', cardRouter)
    app.use('/api/v1/stripe/listen', stripeWebhookListenerRouter)
    app.get('/', (req, res) => {
        res.json({ mesage: 'Welcome to ecommy' })
    })

    app.use((err, req, res, next) => {
        console.log('err', err)
        res.status(500).json({error: 'an error occurred'});
    })
    app.get('*', (req, res) => res.status(404).send({
        status: 404,
        message: 'Nothing to see here',
    }))   
}
