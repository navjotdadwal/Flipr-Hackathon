import React from 'react';
import { 
  OuterComponent,
  Header, 
  ButtonComponent,
  LoginForm,
  HeaderTitle,
  RowComponent,
  FormRadio,
  RowSelectComponent
} from './employeeDashboardStyles';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const EmployeeDashboard=()=>{

  return(
    <>
    <Header>
        <h1>Employee Dashboard</h1>
    </Header>
    <ButtonComponent>
      <Popup trigger={<button className="button"> Add Task </button>} modal>
        <OuterComponent>
        <LoginForm>
        <FormHeader title="Task Details" />
        <Form />
        </LoginForm>
        </OuterComponent>
      </Popup>
    </ButtonComponent>

    </>
  )
}

const handleEmployeeClick=()=> {
  
}

const handleAdminClick=()=> {
  
}

const handleSubmit=()=> {
  
}

const FormHeader = props => (
  <HeaderTitle>
    <h2 class="headerTitle">{props.title}</h2>
  </HeaderTitle>
);

const Form = props => (
  <div>
    <FormInput description="Task Description" placeholder="Write Task Description" type="text" />
    <FormSelect description="Task Type"  />
    <FormDate description="Task Type"  />
    <FormTime description="Time Taken(in minutes)"  />
    <FormButton title="Add Task"/>
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

const FormSelect = props => (
  <RowSelectComponent>
    <label>{props.description}</label>
    <div className="box">
      <select name="Task Type" id="Task Type">
        <option value="" disabled selected>Task Type</option>
        <option value="Break">Break</option>
        <option value="Meeting">Meeting</option>
        <option value="Work">Work</option>
      </select>
    </div>
  </RowSelectComponent>  
);
 
const FormDate = props => (
  <RowComponent>
    <label for="start">Start date:</label>

    <input type="date" id="start" name="trip-start"
      value="2018-07-22"min="2018-01-01" max="2018-12-31" />

  </RowComponent>  
);

const FormTime = props => (
  <RowComponent>
    <label for="time">{props.description}</label>
    <input type="number" id="time" name="time" min="0"/>
  </RowComponent>  
);

export default EmployeeDashboard;