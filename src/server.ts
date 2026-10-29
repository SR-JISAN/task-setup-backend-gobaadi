import app from "./app";
import config from "./config"

const port = config.port
 async function main (){
    try {
       
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error: any) {
        console.error("Error starting the server:", error);
        process.exit(1)
    }
}

main()