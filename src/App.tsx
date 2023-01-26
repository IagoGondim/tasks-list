import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import FocusTask from "./components/FocusTask/FocusTask";
import ListTask from "./components/ListTask/ListTask";
import TaskContext from "./Contexts/TaskStore";
import useLocalStorage from "./Hooks/useLocalStorage";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Task } from "./Types";
import { ContainerWrapper, Nav, TabButton, Wrapper } from "./Styles/Style";
import Header from "./components/Header/Header";
import { useState } from "react";
import light from "../src/Styles/themes/Light";
import dark from "../src/Styles/themes/Dark";
import { ThemeProvider } from "styled-components";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [theme, setTheme] = useState(light);
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <TaskContext.Provider value={[tasks, setTasks]}>
            <ContainerWrapper>
              <Header theme={theme} setTheme={setTheme} />
              <Wrapper>
                <Nav>
                  <TabButton to="/">List</TabButton>
                  <TabButton to="/focus">Focus</TabButton>
                </Nav>
                <br />
                <Routes>
                  <Route path="/" element={<ListTask />} />
                  <Route path="/focus" element={<FocusTask />} />
                </Routes>
              </Wrapper>
            </ContainerWrapper>
          </TaskContext.Provider>
        </ThemeProvider>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
