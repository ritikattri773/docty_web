# Docty - Healthcare Appointment Booking Platform

A full-stack web application for booking doctor appointments and discussing health issues, built with React, Vite, Tailwind CSS, Express.js, and Prisma.

## Project Structure

```
docty/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Express.js + Prisma
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file in the backend directory with your database URL:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/docty?schema=public"
   PORT=5000
   ```

3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

4. Generate Prisma Client:
   ```bash
   npm run prisma:generate
   ```

5. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## Features

- **Landing Page**: Modern, responsive landing page with navigation
- **User Authentication**: User model schema ready for sign-up/sign-in
- **Doctor Appointments**: Book appointments with doctors
- **Health Discussions**: Platform for discussing health issues

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Express.js, Prisma ORM
- **Database**: PostgreSQL (via Prisma)

## Database Schema

The User model includes:
- `id` (UUID)
- `email` (unique)
- `name`
- `password`
- `phone` (optional)
- `role` (patient, doctor, admin)
- `createdAt` and `updatedAt` timestamps

## Next Steps

1. Add your database URL to the `.env` file in the backend directory
2. Run the database migrations
3. Implement authentication routes
4. Add appointment booking functionality
5. Create doctor profiles

