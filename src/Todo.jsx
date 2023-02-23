import {
  Fab,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";

import "./App.css";
function Todo() {
  const [value, setValue] = useState("");
  const [val, setVal] = useState([]);

  useEffect(() => {
    setVal(JSON.parse(localStorage.getItem("val")));
  }, []);

  const handleClick = (e) => {
    if (!value) {
      alert("enter some value");
    } else {
      setVal([...val, value]);
      setValue("");
    }
    localStorage.setItem("val", JSON.stringify([...val, value]));
  };

  function handleDelete(index) {
    const items = [...val];
    items.splice(index, 1);
    setVal(items);
    localStorage.setItem("val", JSON.stringify(items));
  }

  return (
    <div>
      <div className="container1">
        <span style={{ marginTop: "20px" }}>NOTE :</span>
        <h4 style={{ color: "red" }}>To delete todo click on TODOLIST</h4>
        <div className="text-btn">
          <TextField
            id="standard-basic"
            label="Todo"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="button">
            <Fab color="secondary" aria-label="edit">
              <EditIcon type="button" onClick={handleClick} />
            </Fab>
          </div>
        </div>
        <div className="list">
          <List
            sx={{
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
            }}
          >
            {val?.map((data, index) => (
              <ListItemText key={index} sx={{ minWidth: "700px" }}>
                <ListItemButton
                  sx={{
                    marginLeft: "20px",
                    fontSize: "17px",
                    backgroundColor: "#9c27b0",
                    color: "white",
                    transition: 'background-color 1s ease-out 100ms',
                    borderRadius: "20px",
                    "&:hover": { color: "white", backgroundColor: "red" },

                    

                  }}
                  onClick={() => handleDelete(index)}
                  variant="outlined"
                >
                  {data}
                </ListItemButton>
              </ListItemText>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default Todo;
