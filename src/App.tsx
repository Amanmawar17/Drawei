import { Routes, Route } from "react-router"
import Home from "./Components/HomeSection/Home"
import Editor from "./Components/Playground/Editor"


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}   />
      <Route path="/playground" Component={Editor}   />
    </Routes>
  )
}

export default App
