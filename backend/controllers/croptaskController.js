import CropTask from "../models/croptask.js";

export const createCropTask = async (req, res) => {
    try {
        // Ensure that the request body is an array. If it's not, make it an array with one task
        const cropTasksData = Array.isArray(req.body) ? req.body : [req.body];

        // Array to store validation errors (if any)
        const validationErrors = [];

        // Validate each crop task
        for (const taskData of cropTasksData) {
            const { taskName, assignedTo, status, deadline } = taskData;

            // Check for missing fields
            if (!taskName || !assignedTo || !status || !deadline) {
                validationErrors.push("Missing required fields in crop task.");
            }

            // Check if the 'deadline' is a valid date
            if (isNaN(Date.parse(deadline))) {
                validationErrors.push("Invalid deadline format.");
            }
        }

        // If validation errors exist, return a 400 response
        if (validationErrors.length > 0) {
            return res.status(400).json({ message: "Validation failed", errors: validationErrors });
        }

        // Create and save crop tasks in parallel using Promise.all for better performance
        const createdTasks = await Promise.all(cropTasksData.map(async (taskData) => {
            const { taskName, assignedTo, status, deadline } = taskData;

            const cropTask = new CropTask({
                taskName,
                assignedTo,
                status,
                deadline,
            });

            // Save the crop task to the database
            return await cropTask.save();
        }));

        // Respond with the created crop tasks
        res.status(201).json({ message: "Crop tasks created successfully", tasks: createdTasks });
    } catch (error) {
        console.error(error); // Log error for debugging
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
        const { id } = req.params; 
        const updatedData = req.body;    const cropTask = await CropTask.findByIdAndUpdate(id, updatedData, { new: true }); // Update the task

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
