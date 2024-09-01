/** @format */

import React from "react";
type dltBtnProps = {
  id: string | undefined;
  title: string;
  row: any;

}

  const handleSaveClick = ({ title, id , row}: dltBtnProps) => {
    const updatedRows = rows.map((row) =>
      row.id === editRowId ? { ...row, ...editFormData } : row
    );
    setRows(updatedRows);
    setEditRowId(null);
  };


const DeleteButton = ({ title, id , row}: dltBtnProps) => {
  async function  handleDeleteClick(id) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  return (
    <div>
      <Button onClick={()=>handleDeleteClick(id)}  >{title}</Button>
    </div>
  );
};

export default EditBtn;
