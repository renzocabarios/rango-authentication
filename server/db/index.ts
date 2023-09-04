import mongoose from "mongoose";
import { MONGODB_URI } from "../env";

const dbOptions = {};

const connect = () => {
  mongoose
    .connect(MONGODB_URI, dbOptions)
    .then(() => console.log("Database connected!"))
    .catch((err: any) => console.log(err));
};

export default connect;
