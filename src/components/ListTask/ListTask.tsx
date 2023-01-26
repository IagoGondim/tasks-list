import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import useTaskStore from "../../Hooks/useTaskStore";
import { Task } from "../../Types";
import Checkbox from "../Checkbox/Checkbox";
import DeleteIcon from "../DeleteIcon";
import Spacer from "../Spacer";
import TextButton from "../TextButton";
import { Container, DeleteButton, Input, List, ListItem } from "./Style";

type Props = {};

const ListTask: React.FC<Props> = ({}) => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(event.target.value);

  const handleNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newTaskLabel !== "") {
      addTask({ label: newTaskLabel });
      setNewTaskLabel("");
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (event: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, event.target.checked);
    };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () =>
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));

  return (
    <Container>
      <Input
        placeholder="Adicione uma tareja"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={30} />
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={24} />
            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={45} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: "center" }}>
        Apagar tarejas completadas
      </TextButton>
    </Container>
  );
};

export default ListTask;
