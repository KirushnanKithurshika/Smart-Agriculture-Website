import express from 'express';
import {
  getAllCrops,
  addCrop,
  updateCrop,
  deleteCrop,
  addExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/cropcostController.js'; 

const router = express.Router();


router.get('/cropscost', getAllCrops); 
router.post('/cropscost', addCrop); 
router.put('/cropscost/:id', updateCrop); 
router.delete('/cropscost/:id', deleteCrop);
router.post('/cropscost/:id/expenses', addExpense); 
router.put('/cropscost/:id/expenses/:expenseName', updateExpense); 
router.delete('/cropscost/:id/expenses/:expenseName', deleteExpense); 

export default router;
