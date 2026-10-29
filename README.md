# Gobaadi Backend - Task Setup & Authentication Service

A robust, scalable backend boilerplate and authentication service built with **Express.js**, **PostgreSQL**, **Prisma ORM**, and **Redis**. This project features user registration, secure password hashing, and an OTP-based email verification flow powered by Redis and EJS templating.

---

## 🚀 Features

- **Modular Architecture**: Clean, modular structure for routes, controllers, and services.
- **Database & ORM**: PostgreSQL integrated with Prisma ORM (multi-file schema support).
- **In-Memory Caching (Redis)**: High-speed OTP storage, temporary verification tokens, and expiration management.
- **Authentication & Security**:
  - Secure user registration with role-based access.
  - Password hashing with bcrypt.
  - OTP generation with automatic TTL expiration.
- **Email Notifications**: Responsive HTML email templates rendered using EJS and delivered via Nodemailer.

---

## 🛠 Tech Stack

- **Runtime**: Node.js (v20+)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Cache/Store**: Redis
- **Template Engine**: EJS
- **Mailer**: Nodemailer
- **Package Manager**: pnpm

---

## 📁 Project Structure

```text
├── prisma/
│   └── schema/              # Prisma schema modules
├── src/
│   ├── config/              # Environment & app configurations
│   ├── lib/                 # Database, Redis & mailer client setups
│   ├── middleware/          # Global & route-level middlewares
│   ├── module/
│   │   └── auth/            # Auth controller, service, routes & validation
│   ├── template/            # EJS email notification templates
│   ├── utils/               # Helper utilities & database seeds
│   ├── app.ts               # Express application initialization
│   └── server.ts            # Server entry point
├── .env.example
├── package.json
└── tsconfig.json
