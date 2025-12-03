import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Set connection options
        const options = {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
            maxPoolSize: 10, // Maintain up to 10 socket connections
        };

        mongoose.connection.on('connected', () => {
            console.log("✅ Database Connected Successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("❌ MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("⚠️ MongoDB disconnected");
        });

        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/Docty_web`, options);
        
        console.log(`✅ Connected to MongoDB: ${mongoose.connection.host}`);

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        console.error("Please check:");
        console.error("1. MongoDB server is running");
        console.error("2. MONGODB_URI is set correctly in .env file");
        console.error("3. Network connectivity");
        process.exit(1); // Exit process if DB connection fails
    }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.