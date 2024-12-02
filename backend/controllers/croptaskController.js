import CropTask from "../models/croptask.js";

export const createCropTask = async (req, res) => {
    try {
        const cropTasksData = req.body; // Expecting an array of crop tasks

        // Ensure the request body is an array
        if (!Array.isArray(cropTasksData)) {
            return res.status(400).json({ message: "Request body must be an array of crop tasks" });
        }

        // Create an array to store all the created crop tasks
        const createdTasks = [];

        // Loop through each crop task data and save
        for (const taskData of cropTasksData) {
            const { taskName, assignedTo, status, deadline } = taskData;

            // Create a new CropTask for each taskData
            const cropTask = new CropTask({
                taskName,
                assignedTo,
                status,
                deadline,
            });

            // Save the crop task to the database
            const savedTask = await cropTask.save();
            createdTasks.push(savedTask); // Add the saved task to the createdTasks array
        }

        // Respond with the created crop tasks
        res.status(201).json({ message: "Crop tasks created successfully", tasks: createdTasks });
    } catch (error) {
        res.status(500).json({ message: "Error creating crop tasks", error: error.message });
    }
};



export const getAllCropTasks = async (req, res) => {
    try {
        const cropTasks = await CropTask.find(); 
        res.status(200).json(cropTasks); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching crop tasks", error: error.message });
    }
};


export const getCropTaskById = async (req, res) => {
    try {
        const { id } = req.params; 
        const cropTask = await CropTask.findById(id); 

        if (!cropTask) {
            return res.status(404).json({ message: "Crop task not found" });
        }

        res.status(200).json(cropTask); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching crop task", error: error.message });
    }
};


export const updateCropTask = async (req, res) => {
    try {
        const { id } = req.params; // Get the task ID from the request parameters
        const updatedData = req.body; // Get the updated data from the request body

        const cropTask = await CropTask.findByIdAndUpdate(id, updatedData, { new: true }); // Update the task

        if (!cropTask) {
            return res.status(404).json({ message: "Crop task not found" });
        }

        res.status(200).json({ message: "Crop task updated successfully", cropTask });
    } catch (error) {
        res.status(500).json({ message: "Error updating crop task", error: error.message });
    }
};

// Delete a crop task by ID
export const deleteCropTask = async (req, res) => {
    try {
        const { id } = req.params; // Get the task ID from the request parameters

        const cropTask = await CropTask.findByIdAndDelete(id); // Delete the crop task by ID

        if (!cropTask) {
            return res.status(404).json({ message: "Crop task not found" });
        }

        res.status(200).json({ message: "Crop task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting crop task", error: error.message });
    }
};
