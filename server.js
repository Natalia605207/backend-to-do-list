const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./TaskRoutes');
const cors = require('cors');

require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`)
})

//natmusikhina ZJhYCcv0QC57iss7

//mongodb+srv://natmusikhina:<password>@cluster0.bwcjwq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0