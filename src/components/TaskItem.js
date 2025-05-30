import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const TaskWrapper = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #ff6ec4, #7873f5);
  border-radius: 8px;
  margin-bottom: 10px;
  color: white;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <TaskWrapper
      initial={{ opacity: 0, scale: 0.8, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5, x: 100 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      completed={task.completed}
    >
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </TaskWrapper>
  );
};

export default TaskItem;
