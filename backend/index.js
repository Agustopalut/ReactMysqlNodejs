import express from "express"
import cors  from "cors"
import UserRoute from "./Routes/UserRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(UserRoute);
app.listen(8080,() =>console.log("server up and running"));
