// import PaintingList from "./components/PaintingList";
import ColorPicker from "./components/ColorPicker";
// import Section from "./components/Section";
// import Alert from "./components/Alert/Alert";
// import Container from "./components/Container/Container";
// import Box from "./components/Box/Box";
// import paintings from "./paintings.json";

import React, { Component } from "react";
// import Layout from './components/Layout/Layout';
// import Counter from './components/Counter';
// import TaskList from './components/TaskList/TaskList';
// import TaskEditor from './components/TaskEditor/TaskEditor';
// import createTask from './components/utils/create-task';
// import Dropdown from './components/Dropdown';
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

export default class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <ColorPicker options={colorPickerOptions} />
        {/* <Dropdown />  */}
      </>

      // <Container>
      //    <Box type="small" classNames="big red" styles={{ color: "#fff" }} />
      //   <Box type="medium" />
      //   <Box type="large" />
      //   <Alert text="Шеф все пропало!" type="success" />
      //   <Alert text="Шеф все пропало!" type="warning" />
      //   <Alert text="Шеф все пропало!" type="error" />
      //   <ColorPicker options={colorPickerOptions} />
      //   <Section title="Топ недели">
      //     <PaintingList items={paintings} />
      //   </Section>
      //   <Section title="Лучшее" />
      // </Container>
    );
  }
}

// export default class App extends Component {
//   state = {
//     tasks: [],
//   }

//   addTask = () => {
//     const task = createTask();
//     console.log(task);

//     this.setState(prevState => {
//       return {
//         tasks: [...prevState.tasks, task]
//       }
//     })
//   }

//   removeTask = taskId => {
//     this.setState(prevState => {
//       return {
//        tasks: prevState.tasks.filter(({id}) => id !== taskId)
//      }
//    })
//   }

//   render() {
//     const { tasks } = this.state;

//     return (
//       <Layout>
//        <TaskEditor onAddTask={this.addTask} />
//         {tasks.length > 0 && <TaskList tasks={tasks} onRemoveTask={this.removeTask}/>}
//       </Layout>
//     );
//   }
// }
