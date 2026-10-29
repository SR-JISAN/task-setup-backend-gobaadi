import app from "./app";
import config from "./config"
import { transporter } from "./lib/nodmailer";
import { prisma } from "./lib/prisma";
import { redisClient } from "./lib/redis";
import { AdminSeed } from "./utils/seed";

const port = config.port
 async function main (){
    try {
       await prisma.$connect();
       AdminSeed();
        //redis connected

    await redisClient.connect()



    //nodemailer connected

    await transporter.verify()
      
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error: any) {
        console.error("Error starting the server:", error);
        await prisma.$disconnect()
        process.exit(1)
    }
}

main()