const router = require('express').Router()
const adminController = require('../controllers/adminController')
// DASHBOARD
router.get('/dashboard', adminController.viewDashboard)

// CATEGORY
router.get('/category', adminController.viewCategory)
router.post('/category', adminController.addCategory)
router.put('/category', adminController.editCategory)
router.delete('/category/:id', adminController.deleteCategory)
// BANK
router.get('/bank', adminController.viewBank)

// ITEM
router.get('/item', adminController.viewItem)

// BOOKING
router.get('/booking', adminController.viewBooking)

module.exports = router