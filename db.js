const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017"

const dbConnect = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log("DB ka connection successful"))
    .catch((error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;