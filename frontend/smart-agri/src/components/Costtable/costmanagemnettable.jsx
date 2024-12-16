import "./costmanagementtable.css";
import React, { useState } from "react";

const CropTable = () => {
 
  const [crops, setCrops] = useState([
    {
      name: "Corn",
      expenses: {
        LandCost: 252669.0,
        Fertilizer: 157717.02,
        Seed: 51329.69,
        Chemical: 16625.0,
      },
    },
    {
      name: "Soybeans",
      expenses: {
        LandCost: 220385.0,
        Fertilizer: 33459.0,
        Seed: 67488.0,
        Chemical: 42180.0,
      },
    },
  ]);

  const [newCrop, setNewCrop] = useState("");
  const [newExpense, setNewExpense] = useState("");

 
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteType, setDeleteType] = useState(""); 

  const handleAddCrop = () => {
    if (!newCrop) return;
    setCrops([
      ...crops,
      { name: newCrop, expenses: { LandCost: 0, Fertilizer: 0, Seed: 0, Chemical: 0 } },
    ]);
    setNewCrop("");
  };


  const handleAddExpense = () => {
    if (!newExpense) return;
    setCrops(
      crops.map((crop) => ({
        ...crop,
        expenses: { ...crop.expenses, [newExpense]: 0 },
      }))
    );
    setNewExpense("");
  };

  
  const triggerDelete = (name, type) => {
    setDeleteTarget(name);
    setDeleteType(type);
    setShowModal(true);
  };

  
  const confirmDelete = () => {
    if (deleteType === "crop") {
      setCrops(crops.filter((crop) => crop.name !== deleteTarget));
    } else if (deleteType === "expense") {
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
          {Object.keys(crops[0].expenses).map((expense) => (
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
                      setCrops(
                        crops.map((c) =>
                          c.name === crop.name
                            ? {
                                ...c,
                                expenses: {
                                  ...c.expenses,
                                  [expense]: parseFloat(e.target.value) || 0,
                                },
                              }
                            : c
                        )
                      )
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
