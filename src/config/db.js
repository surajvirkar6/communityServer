const mongoose = require('mongoose');

const connetDB = async () => {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(err => console.log(err));
    console.log(`MongoDB is connected: ${conn.connection.host}`);
}

module.exports = connetDB;