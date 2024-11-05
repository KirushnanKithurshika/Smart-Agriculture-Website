import express from 'express';
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';

const router = express.Router();

// Define CRUD routes
router.post('/create', createEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;
