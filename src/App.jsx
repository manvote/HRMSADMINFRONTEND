import Employees from './pages/employees'
import MainLayout from './MainLayout';
import Payroll from './pages/Payroll';
import Leave from './pages/Leave';

//Navigation
import ViewEmployee from './navigation/viewEmployee';
import AddEmployee from './navigation/AddEmployee';
import EditEmployee from './navigation/EditEmployee';
import Offboarding from './navigation/Offboarding';
import ProcessPayroll from './navigation/ProcessPayroll';
import RunPayrollCalculation from './navigation/RunPayrollCalculation';
import ConfirmPayrollProcess from './navigation/ConfirmPayrollProcess';


import ConfirmPassword from './auth/ConfirmPassword';
import Login from './auth/Login';

// import './index.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />

        <Route element={<MainLayout />}>
          <Route path="/employee" element={<Employees />} />
          <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/offboarding/:id" element={<Offboarding />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/processPayroll" element={<ProcessPayroll />} />
          <Route path="/runPayrollCalculation" element={<RunPayrollCalculation />} />
          <Route path="/confirmPayrollProcess" element={<ConfirmPayrollProcess />} />
          <Route path="/leave" element={<Leave />} />
        </Route>

      </Routes>
      
    </>
  );
}

export default App;
