import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect () {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {}

        cached.promise = mongoose.connect("mongodb+srv://naban:naban@cluster0.uaz2vqe.mongodb.net/?retryWrites=true&w=majority", opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect