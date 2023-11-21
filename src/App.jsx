import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Todo from "./Components/Todo.jsx";
import { Routes, Route } from "react-router-dom";

function App() {

  
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </>
    );
}

export default App;
