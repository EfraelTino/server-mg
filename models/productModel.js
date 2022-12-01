import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: 'Por favor ingresa el nombre', unique: true },
        slug: { type: String, required: true, unique: true},
        img: { type: String },
        brand: { type: String },
        category: { type: String },
        description: { type: String },
        preview: { type: String },
        talla: { type: String },
        price: { type: Number },
        stock: { type: Number},
        rating: { type: Number },
        numReviews: { type: Number },
    },
    {
        "timestamps": true
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;