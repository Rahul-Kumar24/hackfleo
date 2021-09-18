import React from 'react'
import './Child.css'
const Child = (props) =>{
          console.log(props.item);
          console.log(props.item.name)
          var data = [];
          for ( var i=1; i<4; i++ ){
                    data.push(props.item[i]);
          }
          console.log(data.length)
          const onClickHandler = ()=>{
                    console.log(data.name)
          }
          return (
                    <div>
                              {data.map((item)=>(
                                        <div className="display">
                                        <div className="card1 shadow5 zoom">
                                        <div className='hader'>
                                                  <h6>{item.name}</h6>
                                                  <h6>{(item.totalsales/item.targetsales)*100}%</h6>
                                        </div>
                                        <div className="haderbody">
                                                  <h6>Total Sales - {item.totalsales} Crore</h6>
                                                  <button className='btn btn-primary' onClick={onClickHandler}>Off Track</button>
                                        </div>
                                        <div className="footer">
                                                  <h6>Target Sales - {item.targetsales} Crore</h6>
                                        </div>
                                        </div>
                              </div>
                              ))}
                    </div>
          )
}

export default Child
