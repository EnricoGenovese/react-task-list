/*  Esercizio
Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”.
Infine riprodurre il layout lasciato in allegato.
*BONUS*
Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
Buon lavoro!  */

import './index.css'
import tasks from "./data/tasks.js"

function App() {
  // logic and functions
  function renderListEl(arr, filter) {
    let filteredArray = arr.filter((elem) => elem.state.includes(filter))
      .map((elem) => <li key={elem.id}>
        <h3>{elem.title}</h3><span className="badge">{elem.state}</span>
        <p>Priority: {elem.priority}</p>
        <p>Est. time: {elem.estimatedTime}</p>
      </li>);

    return filteredArray;
  }

  function getLength(arr, filter) {
    let filteredArray = arr.filter((elem) => elem.state.includes(filter))
    let arrLength = parseInt(filteredArray.length)
    return arrLength
  }
  // function renderBacklog() {
  //   let tasksBacklog = tasks.filter((task) => task.state.includes("backlog"))
  //     .map((task) => <li key={task.id}>
  //       <h3>{task.title}</h3><span className="badge">{task.state}</span>
  //       <p>Priority: {task.priority}</p>
  //       <p>Est. time: {task.estimatedTime}</p>
  //     </li>);

  //   return tasksBacklog;
  // }

  // function renderInProgress() {
  //   let tasksInProgress = tasks.filter((task) => task.state.includes("in_progress"))
  //     .map((task) => <li key={task.id}>
  //       <h3>{task.title}</h3><span className="badge">{task.state}</span>
  //       <p>Priority: {task.priority}</p>
  //       <p>Est. time: {task.estimatedTime}</p>
  //     </li>)

  //   return tasksInProgress;
  // }


  // function renderCompleted() {
  //   let tasksCompleted = tasks.filter((task) => task.state.includes("completed"))
  //     .map((task) => <li key={task.id}>
  //       <h3>{task.title}</h3><span className="badge">{task.state}</span>
  //       <p>Priority: {task.priority}</p>
  //       <p>Est. time: {task.estimatedTime}</p>
  //     </li>)

  //   return tasksCompleted;
  // }

  // html shown in page
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <ul id='todo'>
          <li><h2>Current Tasks ({(getLength(tasks, "backlog") + getLength(tasks, "in_progress"))})</h2></li>
          {renderListEl(tasks, "backlog")}
          {renderListEl(tasks, "in_progress")}
        </ul>
        <br />
        <hr />
        <ul id='done'>
          <li><h2>Completed Tasks ({getLength(tasks, "completed")})</h2></li>
          {renderListEl(tasks, "completed")}
        </ul>
      </main>
    </>
  )
}

export default App
