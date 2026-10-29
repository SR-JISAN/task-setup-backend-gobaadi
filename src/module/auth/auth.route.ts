import { Router } from "express";
import { AuthController } from "./auth.controller";



const router = Router()

router.post("/register",AuthController.register)
router.post("/email-verify", AuthController.emailVerify);
export const AuthRoute:Router = router