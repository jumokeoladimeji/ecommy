import cors from 'cors';
// import cartRouter from './cart-routes';
// import cardRouter from './card-routes';
// import addressesRouter from './addresses-routes';
// import billingRouter from './billing-routes';
// import categoryRouter from './category-routes';
// import orderRouter from './order-routes';
import userRouter from './user-routes.js';

export default (app) => {
    app.use(cors());
    app.use('/api/v1/user', userRouter)
    app.get('/', (req, res) => {
        res.json({ mesage: 'Welcome to ecommy' })
    })

    app.use((err, req, res, next) => {
        res.status(500).json({error: 'an error occurred'});
    })
    app.get('*', (req, res) => res.status(404).send({
        status: 404,
        message: 'Nothing to see here',
    }))   
}
