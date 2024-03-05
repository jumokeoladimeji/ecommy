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
    app.use('/api/v1/orders', orderRouter)
    app.use('/api/v1/cards', cardRouter)
    app.use('/api/v1/stripe', stripeWebhookListenerRouter)
    app.get('/', (req, res) => {
        res.json({ mesage: 'Welcome to ecommy' })
    })

    app.use((err, req, res, next) => {
        if(err) {
            console.log('test', err)
        }
        console.log('it has done', res)
       return  res.status(500).json({error: 'an error occurred'});
    })
    app.get('*', (req, res) => {
        console.log('about to send 404')
        return res.status(404).send({
        status: 404,
        message: 'Nothing to see here',
    })})   
}
