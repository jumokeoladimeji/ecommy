const stripeHandler = {
    listener: async(req, res) => {
        try {
            const sig = req.headers.get('stripe-signature');
            let event;
            // const event = request.body;

            try {
                const reqBuffer = await req.text();
                const signSecret = process.env.STRIPE_SECRET_KEY;
                event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
              } catch (e) {
                console.error('stripe error');
                console.log(e);
                return Response.json(e, {status: 400});
              }

            // Handle the event
            switch (event.type) {
                case 'payment_intent.succeeded':
                const paymentIntent = event.data.object;
                console.log('PaymentIntent was successful!');
                break;
                case 'payment_method.attached':
                const paymentMethod = event.data.object;
                console.log('PaymentMethod was attached to a Customer!');
                break;
                case 'checkout.session.completed':
                const checkoutSessionCompleted = event.data.object;
 
                default:
                console.log(`Unhandled event type ${event.type}`);
            }

            return res.status(200).json({received: true});
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
}

export default stripeHandler;