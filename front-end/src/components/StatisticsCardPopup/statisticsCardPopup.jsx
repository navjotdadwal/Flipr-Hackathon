import React from 'react';
import{
  CardComponent
} from './statisticsCardPopupStyles';
import ResponsivePieChart from '../../components/ResponsivePieChart/responsivePieChart';

const StatisticsCardPopup=(props)=>{
      return(
        <CardComponent>
            <h2 style={{marginTop:'0px', width:'fit-content', margin: 'auto', paddingTop:'8px', fontSize:'30px'}}>
                {props.head}
            </h2>
            <div style={{margin:'auto', marginTop:'1rem', height:'85%', width:'90%'}}>
              <ResponsivePieChart data={props.data}/>
            </div>
        </CardComponent>       
      )
}
  
export default StatisticsCardPopup;