import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {
      orderId: { type: String, required: true },         // Razorpay order ID
      paymentId: { type: String, required: true },       // Razorpay payment ID
      signature: { type: String, required: true },       // Razorpay payment signature
      amount: { type: Number, required: true },          // Total amount paid
      status: { type: String, default: "Pending" },      // Payment status (Pending, Completed, Failed)
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "Delivered", "Canceled"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
