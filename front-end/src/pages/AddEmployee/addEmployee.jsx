import React from 'react';
import {
    LoginForm,
    HeaderTitle,
    RowComponent
} from './addEmployeeStyles';
import { StoreContext } from '../../store/globalStore';
import { useNavigate } from 'react-router-dom';
import Service from '../../service/apis';
const AddEmployee=()=>{

    const store = StoreContext
    let navigate = useNavigate(); 

    const FormHeader = props => (
        <HeaderTitle>
          <h2 class="headerTitle">{props.title}</h2>
        </HeaderTitle>
    );
    
    
    const Form = props => (
        <div>
            <RowComponent>
                <label>Name</label>
                <input type="text" placeholder="Enter employee name" required onChange={(e) => store.addEmployeeStore.setName(e.target.value)}/>
            </RowComponent> 
            <RowComponent>
                <label>Mail Id</label>
                <input type="text" placeholder="Enter employee mail id" required onChange={(e) => store.addEmployeeStore.setMailID(e.target.value)}/>
            </RowComponent> 
            <RowComponent>
                <label>Contact Number</label>
                <input type="text" placeholder="Enter employee contact number" required onChange={(e) => store.addEmployeeStore.setContactNumber(e.target.value)}/>
            </RowComponent> 
            <RowComponent>
                <label>Department</label>
                <input type="text" placeholder="Enter employee department" required onChange={(e) => store.addEmployeeStore.setDepartment(e.target.value)}/>
            </RowComponent> 
            <RowComponent>
                <label>Joining Date</label>
                <input type="text" placeholder="Enter employee joining date" required onChange={(e) => store.addEmployeeStore.setJoiningDate(e.target.value)}/>
            </RowComponent> 
            <RowComponent>
                <label>Password</label>
                <input type="text" placeholder="Enter employee password" required onChange={(e) => store.addEmployeeStore.setPassword(e.target.value)}/>
            </RowComponent> 
            <FormButton title="Add Employee"/>
        </div>
    );
    
    const FormButton = props => (
        <RowComponent style={{paddingBottom: '1.5rem'}}>
            <button onClick={handleSubmit}>{props.title}</button>
        </RowComponent>
    );
    
    
    const handleSubmit = async() => {
      var dataObject = {
        name : store.addEmployeeStore.name,
        mailID : store.addEmployeeStore.mailID,
        contactNumber : store.addEmployeeStore.contactNumber,
        department : store.addEmployeeStore.department,
        joiningDate : store.addEmployeeStore.joiningDate,
        password : store.addEmployeeStore.password
      }
      var obj = new Service()
      await obj.postAddEmployee(dataObject)
      navigate('/admindash')
    }  
  return(
    <>
        <LoginForm>
        <FormHeader title="Details" />
        <Form />
        </LoginForm>
    </>
  )
}
  
export default AddEmployee;