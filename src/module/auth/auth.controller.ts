import type{ Request, Response } from "express";
import { CatchAsync } from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status"
import { accessTokenCookies, refreshTokenCookies } from "../../utils/cookies";
import { AuthService } from "./auth.service";




const register = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  await AuthService.register(payload);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      "Sent email verification otp successfully to you email. Please verify it to complete your registration",
    data: "verify the email with otp",
  });
});

const emailVerify = CatchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.emailVerify(payload);
  res.cookie("accessToken", result.accessToken, accessTokenCookies);
  res.cookie("refreshToken", result.refreshToken, refreshTokenCookies);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Your email verification is successful",
    data: result,
  });
});


export const AuthController = {register,emailVerify}