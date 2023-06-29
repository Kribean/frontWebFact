import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Board from './pages/Board';
import HomePage from './pages/HomePage';
import Todo from './pages/Todo';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/signin" element={<SignIn/>}></Route>
<Route path="/login" element={<LogIn/>}></Route>
<Route path="/board" element={<Board/>}></Route>
<Route path="/todo/:id" element={<Todo/>}></Route>
</Routes>  
    </div>
  );
}

export default App;
