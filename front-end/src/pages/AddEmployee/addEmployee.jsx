import React from 'react';
import {
    LoginForm,
    HeaderTitle,
    RowComponent,
    FormRadio,
  } from './addEmployeeStyles';

  const handleEmployeeClick=()=> {
  
}

const handleAdminClick=()=> {
  
}

const handleSubmit=()=> {
  
}

const AddEmployee=()=>{

  return(
    <>
        <LoginForm>
        <FormHeader title="Details" />
        <Form />
        </LoginForm>
    </>
  )
}

const FormHeader = props => (
    <HeaderTitle>
      <h2 class="headerTitle">{props.title}</h2>
    </HeaderTitle>
);


const Form = props => (
    <div>
        <FormInput description="Name" placeholder="Enter employee name" type="text" />
        <FormInput description="Mail Id" placeholder="Enter employee mail id" type="text" />
        <FormInput description="Contact Number" placeholder="Enter employee contact number" type="text" />
        <FormInput description="Department" placeholder="Enter employee department" type="text" />
        <FormInput description="Joining Date" placeholder="Enter employee joining date" type="text" />
        <FormInput description="Password" placeholder="Enter employee password" type="password"/>
         
        <FormButton title="Add Employee"/>
    </div>
);

const FormButton = props => (
    <RowComponent style={{paddingBottom: '1.5rem'}}>
        <button onClick={handleSubmit}>{props.title}</button>
    </RowComponent>
);

const FormInput = props => (
    <RowComponent>
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} required/>
    </RowComponent>  
);
  
export default AddEmployee;