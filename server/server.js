import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

// Middlewares 
app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
// API Routes
app.get('/', (req, res) => res.send("API Working fine"))

// Initialize DB and then Start Server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`>>> Server is active on: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Failed to start server:", error);
    }
}

startServer();