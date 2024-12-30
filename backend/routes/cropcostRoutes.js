import express from 'express';
import {
  getCrops,
  addCrop,
  addExpense,
  updateExpense,
  deleteCrop,
  deleteExpense,
} from '../controllers/cropcostController.js';

const router = express.Router();

router.get('/', getCrops);
router.post('/add', addCrop);
router.post('/add-expense', addExpense);
router.put('/update-expense', updateExpense);
router.delete('/delete/:name', deleteCrop);
router.delete('/delete-expense', deleteExpense);

export default router;
