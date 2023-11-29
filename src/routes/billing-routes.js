// const billingController = require('../controllers/billing')
// const auth = require('../middleware/authentication');

// module.exports = (app) => {
//   app.route('/api/v1/users/:userId([0-9]+)/billings') 
//     .post(auth.verifyToken, billingController.validate, billingController.create)
//     .get(auth.verifyToken, billingController.list);
//   app.route('/api/v1/users/:userId([0-9]+)/billings/:billingId([0-9]+)')
//     .get(auth.verifyToken, billingController.getOne)
//     .put(auth.verifyToken, billingController.validateBeforeUpdate, billingController.update)
//     .delete(auth.verifyToken, billingController.destroy);
// }
