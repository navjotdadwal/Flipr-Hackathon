import React from 'react';
import CustomizedTables from '../../components/EmployeeTable/employeeTable';
import { OuterComponent, Header, ButtonComponent } from './adminDashboardStlyes';

const AdminDashboard=()=>{

  return(
    <>
    <Header>
        <h1>Admin Dashboard</h1>
    </Header>
    <ButtonComponent>
        <button>
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