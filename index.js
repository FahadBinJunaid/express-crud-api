import express from "express"
import userRoutes from "./routes/user.routes.js"
import logger from "./middleware/logger.js"

const app = express()
const PORT = 5000

app.use(express.json())
app.use(logger)

app.use("/users",userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})