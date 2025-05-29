 import express from "express"
import cors from "cors"
import"dotenv/config"
import songRouter from "./src/routes/soundRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

//app config
 const app=express();
 const port=process.env.PORT || 4000;
 
// connect mondodb and cloudinary
connectDB();
connectCloudinary(); 




 //middlewares
//  [parse any getting request using this json method]
 app.use(express.json());

//  use cors for connected fontend to backend when frontend running on another port or backend running on another port
 app.use(cors());


//  Routes
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter)

 //initializing routes
 app.get("/",(req,res)=>{
   res.send("route working");
})

 app.listen(port,()=>console.log(`server is started on ${port}`));