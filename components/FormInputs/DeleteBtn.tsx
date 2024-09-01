/** @format */

import React, { useState } from "react";

const TableComponent = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
  ]);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", age: "" });

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditFormData({ name: row.name, age: row.age });
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = () => {
    const updatedRows = rows.map((row) =>
      row.id === editRowId ? { ...row, ...editFormData } : row
    );
    setRows(updatedRows);
    setEditRowId(null);
  };

  const handleDeleteClick = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {editRowId === row.id ? (
              <>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={editFormData.age}
                    onChange={handleEditFormChange}
                  />
                </td>
                <td>
                  <button onClick={handleSaveClick}>Save</button>
                </td>
              </>
            ) : (
              <>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>
                  <button onClick={() => handleEditClick(row)}>Edit</button>
                  <button onClick={() => handleDeleteClick(row.id)}>
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
