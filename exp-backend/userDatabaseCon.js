const mongoose = require('mongoose');
require('dotenv').config();

const userConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => { console.log("database is connected successfully") })
        .catch((error) => {
            console.log("issue in db connection")
            console.log(error);
            process.exit(1);
        })

}
module.exports = userConnect;