import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

function App() {
  const [shawAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const data = await fetchData();
      setTasks(data);
    };
    getTask();
  }, []);

  //  Fetch All The Task from Server
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch Just One Task For Update
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  let onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(
      tasks.filter((t) => {
        return t.id !== id;
      })
    );
  };

  let onReminder = async (id) => {
    const fTask = await fetchTask(id);
    const UpTask = { ...fTask, reminder: !fTask.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(UpTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: data.reminder } : t))
    );
  };

  let AddTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // let id = Math.floor(Math.random() * 1000) + 1;
    // let newtask = { id, ...task };
    // setTasks([...tasks, newtask]);
  };

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!shawAddTask)}
        showAdd={shawAddTask}
      />
      {shawAddTask === true && <Form onAdd={AddTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onReminder} />
      ) : (
        "There No Task"
      )}
    </div>
  );
}

export default App;
