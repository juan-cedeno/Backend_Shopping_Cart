import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express'
import userRouter from "./routes/user.route";
import cors from 'cors'


createConnection().then(async connection => {

    console.log('connection');

}).catch(error => console.log(error));

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/product', userRouter)

app.listen(process.env.PORT , () => {
    console.log(process.env.PORT);
})