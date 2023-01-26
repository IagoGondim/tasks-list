import React from "react";
import useTaskStore from "../../Hooks/useTaskStore";
import Button from "../Button";
import Spacer from "../Spacer";
import TextButton from "../TextButton";
import { Container, Task, TextP } from "./Style";

type Props = {};

const FocusTask: React.FC<Props> = ({}) => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) updateTaskCompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>mark completed</Button>
      <Spacer height={45} />
      <TextButton onClick={shuffleFocusedTask}>Nope</TextButton>
    </Container>
  ) : (
    <TextP>No imcomplete tasks. Yay!</TextP>
  );
};

export default FocusTask;
