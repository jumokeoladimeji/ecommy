import db from '../models';
const { Orders, CardOrderDetails } = db;
  
export const createOrder = async (orderDetails) => {
    const newOrder = await Orders.create(orderDetails);
    const cardOrderDetail = await CardOrderDetails.create({
        card_id: cardId,
        order_id: newOrder.id,
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
