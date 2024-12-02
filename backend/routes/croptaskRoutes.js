import express from 'express';
import {
    createCropTask,
    getAllCropTasks,
    getCropTaskById,
    updateCropTask,
    deleteCropTask,
} from '../controllers/croptaskController.js';

const router = express.Router();

router.post('/tasks', createCropTask);
router.get('/tasks', getAllCropTasks);
router.get('/tasks/:id', getCropTaskById);
router.put('/tasks/:id', updateCropTask);
router.delete('/tasks/:id', deleteCropTask);

export default router;
