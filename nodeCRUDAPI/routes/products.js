const express = require("express")
const { postProducts, getProducts, getShirtProducts, getJeansProducts,  getTShirtProducts, getFilteredProducts} = require("../controllers/products")

const router = express.Router()

router.get("/", getProducts)

router.post("/add", postProducts)

router.get("/men/:type", getFilteredProducts)

// temp apis
router.get("/men/shirt", getShirtProducts)
router.get("/men/jeans", getJeansProducts)
router.get("/men/tshirt", getTShirtProducts)

module.exports = router ;
