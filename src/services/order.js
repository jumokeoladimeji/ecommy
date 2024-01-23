import db from '../models';
const { Orders, CardOrderDetails, Addresses } = db;
  
export const createOrder = async (orderDetails) => {
    const newAddress = await Addresses.create({
        user_id: orderDetails.user_id,
        address1: orderDetails.address1,
        address2: orderDetails.address2,
        city: orderDetails.city,
        state: orderDetails.state,
        zip: orderDetails.zip,
        country: "United States",
    })

    const address = newAddress.toJSON()
    const orderToCreate = {
        user_id: orderDetails.user_id,
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
        paid: orderDetails.paid
    }

    const newOrder = await Orders.create(orderToCreate);
    const orderCreated = newOrder.toJSON()
    const cardOrderDetail = await CardOrderDetails.create({
        // card_id: cardId,// make it an array orchange to cart details
        order_id: orderCreated.id,
        quantity: orderDetails.quantity
    })
    return newOrder.toJSON();
};


/**
 * @description - Fetches all Orders
*/
export const listOrders = async () => {
    const orders = await Orders.findAll({
        include: [{
            model: CardOrderDetails,
            as: 'cardOrderDetails',
        }]
    });
    return orders;
};

export const listOrdersByUser = async (userId) => {
    const orders = await Orders.findAll({
        where: { user_id: userId }}, {
        include: [{
            model: CardOrderDetails,
            as: 'cardOrderDetails',
        }]
    });
    return Orders;
};


/**
  * @description - Fetches a order
*/
export const getOne = async (orderId) => {
    const order = await Orders.findOne({ where: { id: orderId }}, 
        {
            include: [{
                model: CardOrderDetails,
                as: 'cardOrderDetails',
            }]
    });
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
    const order = await Orders.findOne({ where: { id: orderId }}, 
        {
            include: [{
                model: CardOrderDetails,
                as: 'cardOrderDetails',
            }]
    })
    if (!order) {
        return { 
            success: false, 
            status: 404, 
            error: 'Order not found'
        };
    }

    order.name = orderDetails.name || order.name,
    await card.save();
    return card;
};

/**
 * @description - Deletes a Card
*/
export const destroyOrder = async (orderId) => {
    const order = await Orders.findOne({ where: { id: orderId }},
        {
            include: [{
                model: CardOrderDetails,
                as: 'cardOrderDetails',
            }]
    });
    if (!orders) {
        return {
            error: 'Orders not found',
            status: 404
        }
    }
    await orders.destroy({ where: { id: orderId }})
    return { 
        success: true, 
        status: 200,
        message: 'Orders deleted'
    }
                
}
