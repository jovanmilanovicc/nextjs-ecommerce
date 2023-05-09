import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        name: { type: String, require: true },
        quantity: { type: Number, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
    shippingAdress: {
      fullName: { type: String, require: true },
      adress: { type: String, require: true },
      city: { type: String, require: true },
      postal: { type: String, require: true },
      country: { type: String, require: true },
    },
    paymentMethod: { type: String, require: true },
    itemsPrice: { type: Number, require: true },
    shippingPrice: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
