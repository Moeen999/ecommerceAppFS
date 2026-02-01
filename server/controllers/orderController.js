// ! order placement using COD
const placeOrder = async (req, res) => {};

// ! order placement using stripe
const placeOrderStrip = async (req, res) => {};

// ! order placement using razorpay
const placeOrderRazorpay = async (req, res) => {};

// ! all orders data for the admin
const allOrders = async (req, res) => {};

// ! orders of a single user

const userOrders = async (req, res) => {};

const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
