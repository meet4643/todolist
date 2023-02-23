import {
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./App.css";

function Todo() {
  const [value, setValue] = useState("");
  const [val, setVal] = useState([]);

  useEffect(() => {
    setVal(JSON.parse(localStorage.getItem("val")));
  }, []);

  const handleClick = (e) => {
    if (!value || value.trim() === "") {
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
        <div className="text-btn" style={{ marginTop: "30px" }}>
          <TextField
            id="standard-basic"
            label="Todo"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Fab color="secondary" aria-label="edit">
            <EditIcon type="button" onClick={handleClick} />
          </Fab>
        </div>
        <div className="list">
          <List
            sx={{
              position: "relative",
              overflow: "auto",
              maxHeight:'300px'
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
                    transition: "background-color 1s ease-out 100ms",
                    borderRadius: "0px 50px 50px",
                    padding: "3px",
                    "&:hover": { color: "white", backgroundColor: "red" },
                  }}
                >
                  <ListItem
                    secondaryAction={
                      <DeleteIcon onClick={() => handleDelete(index)} />
                    }
                  >
                    {data}
                  </ListItem>
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
