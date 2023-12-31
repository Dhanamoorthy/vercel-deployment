import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/Students.js";
// import { userRouter } from "./Routers/users.js";


// import { isAuthenticated } from "./Authentication/auth.js";


//confgure the environment
dotenv.config();
// const PORT = process.env.PORT
//initiating server
const app = express();
//middleware
app.use(express.json());
// app.use(cors());

//studers routers
app.use("/students",studentsRouter)
// app.use("/users",userRouter )
//starting ther server
app.listen(9090, ()=>console.log("server running in localhost:9090")) 