import React from "react";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
