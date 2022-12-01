import mongoose from "mongoose";

const userChema = new mongoose.Schema(
    {
        name: { type: String, required: 'Por favor ingresa el nombre' },
        email: {type: String, required:true},
        password: {type: String, required:true},
        isAdmin: {type: Boolean, default:false, },

    },
    {
        timestamps: true
    }
);
const User = mongoose.model('User', userChema);
export default User;