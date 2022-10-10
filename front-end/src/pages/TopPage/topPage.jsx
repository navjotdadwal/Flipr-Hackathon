import React from 'react';
import {
  LoginForm,
  HeaderTitle,
  RowComponent,
  FormRadio,
  OuterComponent
} from './topPageStyles';
import { StoreContext } from '../../store/globalStore';


const handleSubmit=()=> {
  
}

const TopPage=()=>{

  const store = StoreContext;
  return(
    <OuterComponent>
    <LoginForm>
      <FormHeader title="Login" />
      <Form />
    </LoginForm>
    </OuterComponent>
  )
}
const FormHeader = props => (
  <HeaderTitle>
    <h2 class="headerTitle">{props.title}</h2>
  </HeaderTitle>
);


const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton title="Log in"/>
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


export default TopPage;