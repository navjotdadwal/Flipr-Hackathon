import React from 'react';
import CustomizedTables from '../../components/EmployeeTable/employeeTable';
import { OuterComponent, Header, ButtonComponent } from './adminDashboardStlyes';
import {useNavigate} from 'react-router-dom';

const AdminDashboard=()=>{
  let navigate = useNavigate();  
  const handleClick=()=>{
    navigate('/addemployee');
  }
  return(
    <>
    <span style={{float: 'right', marginRight : '7vw', marginTop : '0px',
    fontSize : '1.5rem', cursor : 'pointer'}}>LogOut</span>
    <Header>
        <h1>Admin Dashboard</h1>
    </Header>
    <ButtonComponent>
        <button onClick={handleClick}>
            Add Employee
        </button>
    </ButtonComponent>
    <OuterComponent>
        <CustomizedTables />
    </OuterComponent>
    </>
  )
}

export default AdminDashboard;