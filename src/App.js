import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddemployeeComponent from './components/AddemployeeComponent';
import UpdateComponent from './components/UpdateComponent';
import EmployeeComponent from './components/EmployeeComponent';
import NavbarComponent from './components/NavbarComponent';



function App() {
  return (
    <>

      <BrowserRouter>
        <NavbarComponent />
        <Routes>

          <Route index element={<EmployeeComponent />} />
          <Route path="/" element={<EmployeeComponent />} />
          <Route path="/addEmployees" element={<AddemployeeComponent />} />
          <Route path="/editEmployee/:id" element={<UpdateComponent />} />
        </Routes>
      </BrowserRouter>

      {/* <NavbarComponent />
      <EmployeeComponent />
      <AddemployeeComponent /> */}



    </>
  );
}


export default App;
