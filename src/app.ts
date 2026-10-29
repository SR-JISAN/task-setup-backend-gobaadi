import  express, {Request, Response, response, type Application }  from "express"
import cors from "cors"
import config from "./config";
import cookieParser from "cookie-parser";
import httpStatus from "http-status"


const app:Application = express();

app.use(
    cors({
        origin:[
            config.app_url,
            config.app_url_frontend
        ]
    })
)

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cookieParser())

app.get("/",(req:Request, res:Response)=>{
    res.status(httpStatus.OK).json({
        success: true,
        message: "Welcome to  gobaadi"
    })
})
export default app;