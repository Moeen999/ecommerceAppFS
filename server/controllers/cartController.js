import userModel from "../models/userModel";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const user = await userModel.findById(userId);
    let cartData = await user.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {};

const getCartData = async (req, res) => {};

export { addToCart, getCartData, updateCart };
