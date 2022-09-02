// import logo from './logo.svg';
import './App.css';
import ClassPage from './ClassPage';
// import ClassDetail from "./ClassDetail"
import {useParams, BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  // const {classId} = useParams()
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/:classId" element={<ClassPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
