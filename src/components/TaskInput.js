import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputField = styled.input`
  padding: 10px;
  width: 70%;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #00ff99;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Type a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <AddButton onClick={handleAddTask}>Add</AddButton>
    </InputContainer>
  );
};

export default TaskInput;
