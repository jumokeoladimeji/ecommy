import { createOrder, listOrders, listOrdersByUser, getOneOrder,  updateOrder, destroyOrder } from '../services/order';

const orderHandler = {
    create: async(req, res) => {
        try {
            const orderDetails = req.body
            orderDetails['user_id'] = req.decoded.id
            const createdOrder = await createOrder(orderDetails);
            if (createdOrder.error) {
                return res.json({ status: 500, error: createdOrder.error });
            }
            return res.status(201).json({ status: 201, message: 'Order Created Successfully', data: createdOrder });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    getAll: async(req, res) => {
      try {
        console.log('list orders')
          const orders = await listOrders();
          console.log('orders in order handler', orders)
          if (orders.error) {
              return res.json({ status: 500, error: orders.error });
          }
          return res.status(200).json({ status: 200, message: 'Orders Returned Successfully', data: response });
        } catch (error) {
          return res.status(500).json({
            error: 'Internal server error'
          });
      }
    },
    getUserOrders: async(req, res) => {
        try {
            const orders = await listOrdersByUser(req.params.userId);
            if (orders.error) {
                return res.json({ status: 500, error: orders.error });
            }
            return res.status(200).json({ status: 200, message: 'Orders Returned Successfully', data: response });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    getOne: async(req, res) => {
        try {
            const order = await getOneOrder(req.params.orderId);
            if (order.error) {
                return res.json({ status: order.status || 500, error: order.error });
            }
            return res.status(200).json({ status: 200, message: 'Order Returned Successfully', data: order });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    update: async(req, res) => {
        try {
            const updatedOrder = await updateOrder(req.body, req.params.orderId);
            if (updatedOrder.error) {
              return res.json({ status: updatedOrder.status || 500, error: updatedOrder.error });
            }
            return res.status(200).json({ status: 200, message: 'Order Updated Successfully', data: updatedOrder });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    delete: async(req, res) => {
        try {
            const orderToDelete = await destroyOrder(req.params.OrderId, req.params.userId);
            if (orderToDelete.error) {
                return res.json({ status: 500, error: orderToDelete.error });
            }
            return res.status(200).json({ status: 200, message: 'Order Deleted Successfully'});
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    }
}

export default orderHandler;