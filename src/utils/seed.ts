import bcrypt from "bcryptjs";
import config from "../config";
import { prisma } from "../lib/prisma";
import AppError from "./appError";
import httpStatus from "http-status"
import { UsersRole } from "../../generated/prisma/enums";

export const AdminSeed = async () => {
  try {
    const isExistAdmin = await prisma.users.findFirst({
      where: {
        role: UsersRole.ADMIN,
      },
    });

    if (isExistAdmin) {
      console.log("Admin already exists");
      return;
    }

    const name = config.admin_name;
    const email = config.admin_email;
    const password = config.admin_password;

    if (!name || !email || !password) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Something is missing name, email or password",
      );
    }

    const hashPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const createAdmin = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
        role: UsersRole.ADMIN,
        profile: {
          create: {
            contactNumber: "",
          },
        },
      },
      include: {
        profile: true,
      },
      omit: {
        password: true,
      },
    });

    console.log(createAdmin);
  } catch (error) {
    console.log(error);
    await prisma.users.delete({
      where: {
        email: config.admin_email,
      },
    });
  }
};
