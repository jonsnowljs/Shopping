import express from 'express'
import Product from '../models/productModel'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async(req, res) => {
  const products = await Product.find({})

  res.json(products);
}));


// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
app.get('/:id',asyncHandler((req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({message: 'Product not found'})
  }
}));


export default router