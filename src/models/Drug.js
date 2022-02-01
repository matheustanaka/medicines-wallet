import { Mongoose } from "mongoose";

const Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: Date,
        require: true,
    },
    wallet: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

export default Mongoose.model('Drug', Schema);