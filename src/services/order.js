import db from '../models';
const { Orders, CardOrderDetails, Addresses } = db;
  
export const createOrder = async (orderDetails) => {
    const newAddress = await Addresses.create({
        // user_id: orderDetails.user_id,
        address1: orderDetails.address1,
        address2: orderDetails.address2,
        city: orderDetails.city,
        state: orderDetails.state,
        zip: orderDetails.zip,
        country: "United States",
        full_address: orderDetails.full_address,
    })
    const address = newAddress.toJSON()
    console.log('address after create:::', address)
    const orderToCreate = {
        // user_id: orderDetails.user_id,
        email: orderDetails.email,
        expected_time_of_delivery: orderDetails.expected_time_of_delivery,
        status: orderDetails.status,
        confirm_delivery: orderDetails.confirm_delivery,
        address_id: address.id,
        bill: orderDetails.bill,
        customized_message: orderDetails.customized_message,
        shipping_phone_number: orderDetails.shipping_phone_number,
        payment_id: orderDetails.payment_id,
        stripe_charge_id: orderDetails.stripe_charge_id,
        extra_notes: orderDetails.extra_notes,
        paid: orderDetails.paid,
        line_items: orderDetails.line_items
    }

    const newOrder = await Orders.create(orderToCreate);
    const orderCreated = newOrder.toJSON()
    const cardOrderDetail = await CardOrderDetails.create({
        order_id: orderCreated.id,
        quantity: orderDetails.quantity
    })
    return newOrder.toJSON();
};


/**
 * @description - Fetches all Orders
*/
export const listOrders = async () => {
    const orders = Orders.findAll({
        include: [{
          model: Addresses,
          as: 'addresses'
        },
        {
            model: CardOrderDetails,
            as: 'card_order_details'
        }],
        order: [['updatedAt', 'DESC']]
    });
    return orders;
};


export const listOrdersByUser = async (userId) => {
    const orders = await Orders.findAll({
        where: { user_id: userId }}, 
        {
        include: [{
            model: CardOrderDetails,
            as: 'card_order_details',
        },
        {
            model: Addresses,
            as: 'addresses',
        }],
        order: [['updatedAt', 'DESC']]
    });
    return orders;
};


/**
  * @description - Fetches a order
*/
export const getOneOrder = async (orderId) => {
    const order = await Orders.findOne(
        {
            where: { id: orderId },
            include: [{
                model: Addresses,
                as: 'addresses'
            },
            {
                model: CardOrderDetails,
                as: 'card_order_details'
            }]
        }
    );
    if (!order) {
        return {
            error: 'Order not found',
            status: 404
        }
    }
    return order || order.toJSON();
};

/**
* @description - Updates Order details
*/
export const updateOrder = async (orderDetails, orderId) => {
    const order = await Orders.findOne(
        {
            where: { id: orderId },
            include: [{
                model: Addresses,
                as: 'addresses'
            },
            {
                model: CardOrderDetails,
                as: 'card_order_details'
            }]
        }
    )

    if (!order) {
        return { 
            success: false, 
            status: 404, 
            error: 'Order not found'
        };
    }

    const orderToEdiT = order.toJSON()

    orderToEdiT.status = orderDetails.status || orderToEdiT.status;
    orderToEdiT.expected_time_of_delivery =  orderDetails.expected_time_of_delivery || orderToEdiT.expected_time_of_delivery;
    orderToEdiT.confirm_delivery = orderDetails.confirm_delivery || orderToEdiT.confirm_delivery;
    orderToEdiT.bill = orderDetails.bill || orderToEdiT.bill;
    orderToEdiT.customized_message = orderDetails.customized_message || orderToEdiT.customized_message;
    orderToEdiT.shipping_phone_number = orderDetails.shipping_phone_number || orderToEdiT.shipping_phone_number;
    orderToEdiT.stripe_charge_id = orderDetails.stripe_charge_id || orderToEdiT.stripe_charge_id;
    orderToEdiT.extra_notes = orderDetails.extra_notes || orderToEdiT.extra_notes;
    orderToEdiT.paid = orderDetails.paid || orderToEdiT.paid;
    orderToEdiT.line_items = orderDetails.line_items || orderToEdiT.line_items;

    await Orders.update(
        orderToEdiT,
        { where: { id:  orderId } }
    )
    console.log('edit complete')
    return orderToEdiT;
};

/**
 * @description - Deletes an Order
*/
export const destroyOrder = async (orderId) => {
    const order = await Orders.findOne({ where: { id: orderId }});
    if (!order) {
        return {
            error: 'order not found',
            status: 404
        }
    }
    await Orders.destroy({ where: { id: orderId }})
    return { 
        success: true, 
        status: 200,
        message: 'order deleted'
    }
                
}
