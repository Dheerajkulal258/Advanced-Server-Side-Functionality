const express = require("express");
const Product = require("../models/Product");
const NodeCache = require("node-cache");

const router = express.Router();

const cache = new NodeCache({
  stdTTL: 60
});


// CREATE PRODUCT

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    cache.del("products");

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});


// GET PRODUCTS

router.get("/", async (req, res) => {
  try {
    const cachedData = cache.get("products");

    if (cachedData) {
      return res.json({
        source: "cache",
        data: cachedData
      });
    }

    const products = await Product.find();

    cache.set("products", products);

    res.json({
      source: "database",
      data: products
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
// DELETE PRODUCT

router.delete("/:id", async (req, res) => {
  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    cache.del("products");

    res.json({
      message: "Product deleted successfully"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
});