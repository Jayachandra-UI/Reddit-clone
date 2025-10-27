const mongoose = require("mongoose");
const colors = require("colors");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {

    })
        .then(() => console.log(colors.green("Database connected successfully")))
        .catch(() => {
            console.log(colors.red.underline("Database connection Failed"))
            console.error(error.message);
            process.exit(1)
        })
}