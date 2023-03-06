import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
// ? pages========
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Form from "./pages/Form";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/form" element={<Form/>}/>

      </Routes>   
    </div>
  );
}

export default App;
