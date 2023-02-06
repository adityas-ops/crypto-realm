import React from "react";
const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span onClick={onClick} style={{
      border: "1px solid #4fc3f7",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#4fc3f7" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#4fc3f7",
        color: "black",
      },
      width: "22%",
    }}>
      {children}
    </span>
  );
};

export default SelectButton;
