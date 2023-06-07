import mongoose from "mongoose";
import app from './app'
import config from "./config";
import dotenv from 'dotenv/config'
console.log(process.env.PORT)

const port = process.env.PORT
console.log(port, 'From server.ts')

async function main() {
    try {
        await mongoose.connect('mongodb+srv://university-management-db:NzuY50j5T19QfqCM@cluster1.bhuozyz.mongodb.net/university-management?retryWrites=true&w=majority');
        console.log('Database connection established successfully');

        app.listen(config.port, () => {
            console.log('App listening on port', config.port)
        });

    } catch (error) {
        console.error('Error connecting to Mongoose server', error)
    }
}

main();