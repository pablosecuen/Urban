const { Router } = require("express");

const paymentInputRouter = Router();

paymentInputRouter.post("/new", postPaymentHandler);

paymentInputRouter.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});
module.exports = paymentInputRouter;
