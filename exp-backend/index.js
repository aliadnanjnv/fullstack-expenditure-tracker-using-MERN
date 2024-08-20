const express = require("express");
const app = express();

require("dotenv").config()

const port = 4000;
app.use(express.json());

const mount = require('./routes/allRoutes');
app.use('/api/v1', mount);

const userConnect = require('./database/userDatabaseCon');
userConnect();


app.get('/', (req, res) => {
    res.send("yes you are at the / route")
});

app.get('/jokes', (req, res) => {
    const arr = [
        {
            id: '89',
            name: 'raju',
            rollNo: '749948'
        },
        {
            id: '89',
            name: 'raju',
            rollNo: '749948'
        },
        {
            id: '89',
            name: 'raju',
            rollNo: '749948'
        },
        {
            id: '89',
            name: 'raju',
            rollNo: '749948'
        },
        {
            id: '89',
            name: 'raju',
            rollNo: '749948'
        },
    ]
    res.send(arr);
})

app.listen(port, () => {
    console.log(`this server is running on the port ${port}`);
})