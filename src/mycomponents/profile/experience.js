import React from 'react';
import './profile.css';
import icon from './icone1.svg';
import moment from 'moment';

const Experience=(props)=> {
 return ( 

            <div className="timeline timeline-one">
              { 
                props.exp.map( (ex)=>{
                
                  return (
                  <div className="timeline-item">
                  <img className="icon text-info icon-sm" src={icon} alt="" />
                  <h4 className="my-3"> {ex.title} </h4>
                  <h5>{ex.company}</h5>
                  <div>{moment(ex.statDate).format('DD/MM/YYYY')}</div> <div>{moment(ex.endDate).format('DD/MM/YYYY')}</div>
                  <p/>
                  <p>{ex.description}</p>
                  </div>
                );
                })
              }
              
       
            </div>
     
            
         );
    }

 
export default Experience;