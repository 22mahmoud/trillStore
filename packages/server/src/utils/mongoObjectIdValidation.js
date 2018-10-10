import mongoose from 'mongoose';

export default id => mongoose.Types.ObjectId.isValid(id);
