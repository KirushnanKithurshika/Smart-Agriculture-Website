import React, { useState, useEffect } from "react";
import axios from "axios";
import "./costmanagementtable.css";

const CropTable = () => {
  const [crops, setCrops] = useState([]);
  const [newCrop, setNewCrop] = useState("");
  const [newExpense, setNewExpense] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteType, setDeleteType] = useState("");

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/cost");
      setCrops(response.data);
    } catch (error) {
      console.error("Error fetching crops:", error);
    }
  };

  const handleAddCrop = async () => {
    if (!newCrop) return;
    try {
      const response = await axios.post("http://localhost:8000/api/cost/add", { name: newCrop });
      setCrops([...crops, response.data]);
      setNewCrop("");
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  const handleAddExpense = async () => {
    if (!newExpense) return;

    try {
      await axios.post("http://localhost:8000/api/cost/add-expense", { expenseName: newExpense });
      fetchCrops();
      setNewExpense("");
      alert("Expense added successfully to all crops!");
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Failed to add the expense. Please try again.");
    }
  };

  const handleUpdateExpense = async (cropName, expenseName, value) => {
    try {
      await axios.put("http://localhost:8000/api/cost/update-expense", {
        cropName,
        expenseName,
        value,
      });
      fetchCrops(); 
    } catch (error) {
      console.error("Error updating expense:", error);
      alert("Failed to update the expense. Please try again.");
    }
  };

  const triggerDelete = (name, type) => {
    setDeleteTarget(name);
    setDeleteType(type);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      if (deleteType === "crop") {
        await axios.delete(`http://localhost:8000/api/cost/delete/${deleteTarget}`);
        setCrops(crops.filter((crop) => crop.name !== deleteTarget));
      } else if (deleteType === "expense") {
        await axios.delete("http://localhost:8000/api/cost/delete-expense", {
          data: { expenseName: deleteTarget },
        });
        setCrops(
          crops.map((crop) => ({
            ...crop,
            expenses: Object.keys(crop.expenses)
              .filter((key) => key !== deleteTarget)
              .reduce((obj, key) => {
                obj[key] = crop.expenses[key];
                return obj;
              }, {}),
          }))
        );
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
    setShowModal(false);
    setDeleteTarget(null);
    setDeleteType("");
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteTarget(null);
    setDeleteType("");
  };

  const calculateTotal = (crop) =>
    Object.values(crop.expenses).reduce((acc, cost) => acc + cost, 0);

  return (
    <div className="crop-table">
      <h1>Crop Cost Management</h1>

      <div className="add-crop">
        <input
          className="expensename"
          type="text"
          placeholder="New Crop Name"
          value={newCrop}
          onChange={(e) => setNewCrop(e.target.value)}
        />
        <button onClick={handleAddCrop}>Add Crop</button>
      </div>

      <div className="add-expense">
        <input
          className="expensename"
          type="text"
          placeholder="New Expense Name"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            {crops.map((crop) => (
              <th key={crop.name}>
                {crop.name}
                <button
                  className="deletecost"
                  onClick={() => triggerDelete(crop.name, "crop")}
                >
                  Delete
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(crops[0]?.expenses || {}).map((expense) => (
            <tr key={expense}>
              <td>
                {expense}
                <button
                  className="deletecost"
                  onClick={() => triggerDelete(expense, "expense")}
                >
                  Delete
                </button>
              </td>
              {crops.map((crop) => (
                <td key={crop.name}>
                  <input
                    className="expensename"
                    type="number"
                    value={crop.expenses[expense]}
                    onChange={(e) =>
                      handleUpdateExpense(crop.name, expense, parseFloat(e.target.value) || 0)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {crops.map((crop) => (
              <td key={crop.name}>Rs {calculateTotal(crop).toLocaleString()}</td>
            ))}
          </tr>
        </tfoot>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you want to delete this {deleteType}?</p>
            <button className="deleteE-button" onClick={confirmDelete}>
              Delete
            </button>
            <button className="cancelE-button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropTable;
