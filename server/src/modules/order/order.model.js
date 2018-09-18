import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({});

export const OrderModel = mongoose.model('Order', orderSchema);
