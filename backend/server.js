import express from'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  console.log("Home")
  res.send('API is running...')
})


app.use('/api/products', productRoutes)

// when the address don't meet / and /api/products, it will call the app.use(notFound), app.use(notFound) will pass the error to errorHandler
app.use(notFound);
// errorHandler will handle the error throw by productRouter.js and error passed by notFound
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

