import React from 'react';
import { 
  OuterComponent,
  Header, 
  ButtonComponent,
  LoginForm,
  HeaderTitle,
  RowComponent,
  RowSelectComponent,
  Content,
  RowsComponent
} from './employeeDashboardStyles';
import StatisticsCard from '../../components/StatisticsCard/statisticsCard';
import StatisticsLargeCard from '../../components/StatisticsLargeCard/statisticsLargeCard';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { StoreContext } from '../../store/globalStore';

const EmployeeDashboard=()=>{
  const store = StoreContext
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var currentTime = yyyy + '-' + mm + '-' + dd;
  var yesterday = new Date(Date.now() - 864e5);
  var ddd = String(yesterday.getDate()).padStart(2, '0');
  var mmm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyyy = yesterday.getFullYear();
  var previousTime = yyyyy + '-' + mmm + '-' + ddd;
  const initial_data=[
    {
      "id": "stylus",
      "label": "stylus",
      "value": 211,
      "color": "hsl(4, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 343,
      "color": "hsl(356, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 93,
      "color": "hsl(84, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 378,
      "color": "hsl(68, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 509,
      "color": "hsl(8, 70%, 50%)"
    }
  ]
  var init_data = [
    {
      "country": "Breaks",
      "hot dog": 135
    },
    {
      "country": "Work Tasks",
      "hot dog": 162
    },
    {
      "country": "Meetings",
      "hot dog": 51
    }
  ]
  const FormHeader = props => (
    <HeaderTitle>
      <h2 class="headerTitle">{props.title}</h2>
    </HeaderTitle>
  );
  
  const Form = props => (
    <div>
      <FormInput description="Task Description" placeholder="Write Task Description" type="text" />
      <FormSelect description="Task Type" />
      <FormDate description="Start Date" currDate={props.currDate} prevDate={props.prevDate}/>
      <FormTime description="Time Taken(in minutes)"  />
      <FormButton title="Add Task"/>
    </div>
  );

  const handleSubmit=()=> {
    var dataObject = {
      description : store.employeeDashboardStore.description,
      type : store.employeeDashboardStore.type,
      start_date : store.employeeDashboardStore.start_date,
      time_taken : store.employeeDashboardStore.time_taken
    }

  }

  const FormButton = props => (
    <RowComponent style={{paddingBottom: '1.5rem'}}>
      <button onClick={handleSubmit}>{props.title}</button>
    </RowComponent>
  );
  
  const FormInput = props => (
    <RowComponent>
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} required onChange={(e) => store.employeeDashboardStore.setDescription(e.target.value)}/>
    </RowComponent>  
  );
  
  const FormSelect = props => (
    <RowSelectComponent>
      <label>{props.description}</label>
      <div className="box">
        <select name="Task Type" id="Task Type" onChange={(e) => store.employeeDashboardStore.setType(e.target.value)}>
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
       min={props.prevDate} max={props.currDate} onChange={(e) => store.employeeDashboardStore.setStartDate(e.target.value)}/>
  
    </RowComponent>  
  );

  const onChange = event => {
    store.employeeDashboardStore.setTimeTaken(event.target.value);
  };
  
  const FormTime = props => (
    <RowComponent>
      <label for="time">{props.description}</label>
      <input type="number" id="time" name="time" min="0" onChange={onChange}/>
    </RowComponent>  
  );
  return(
    <>
    <span style={{float: 'right', marginRight : '7vw', marginTop : '0px',
    fontSize : '1.5rem', cursor : 'pointer'}}>LogOut</span>
    <Header>
        <h1>Employee Dashboard</h1>
    </Header>
    <ButtonComponent>
      <Popup trigger={<button className="button"> Add Task </button>} modal>
        <OuterComponent>
        <LoginForm>
        <FormHeader title="Task Details" />
        <Form currDate={currentTime} prevDate={previousTime}/>
        </LoginForm>
        </OuterComponent>
      </Popup>
    </ButtonComponent>
    <Content>
      <RowsComponent>
        {
          <div style={{marginRight: '5px'}}>
            <StatisticsCard head="Current Date Analysis" data={initial_data}/>
          </div>
        }
        {
          <div style={{marginLeft: '5px'}}>
            <StatisticsCard head="Previous Date Analysis" data={initial_data}/>
          </div>
        }
      </RowsComponent>
      <RowsComponent>
        {
          <div style={{marginTop: '15px'}}>
            <StatisticsLargeCard head="Weekly Data Analysis" data={init_data}/>
          </div>
        }
      </RowsComponent>
    </Content>

    </>
  )
}


export default EmployeeDashboard;