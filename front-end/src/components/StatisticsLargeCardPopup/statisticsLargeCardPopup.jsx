import React from 'react';
import{
  CardComponent
} from './statisticsLargeCardPopupStyles';
import ResponsiveBarChart from '../ResponsiveBarChart/responsiveBarChart.jsx';

const StatisticsLargeCardPopup=(props)=>{
      return(
        <CardComponent>
            <h2 style={{marginTop:'0px', width:'fit-content', margin: 'auto', paddingTop:'8px', fontSize:'30px'}}>
                {props.head}
            </h2>
            <div style={{margin:'auto', marginTop:'1rem', height:'80%', width:'90%'}}>
              <ResponsiveBarChart data={props.data} left={props.lft} bottom={props.btm}/>
            </div>
        </CardComponent>       
      )
}
  
export default StatisticsLargeCardPopup;