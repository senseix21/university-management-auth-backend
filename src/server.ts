import mongoose from "mongoose";
import app from "./app";
import config from "./config";


const port = config.port;

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        console.log(` :smile Connected to database successfully!`);

        app.listen(port, () => {
            console.log('App listening on port', port);
        });

    } catch (error) {
        console.error('Error connecting to Mongoose server', error);
    }
}

main();
