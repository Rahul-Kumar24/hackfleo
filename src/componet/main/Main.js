import React, {useState} from 'react'
import './Main.css'
import data from '../../data/Data.json'
import Child from '../child/Child'
const Main = () => {
          const [show , setShow]=useState(false);
          const onClickHandler=()=>{
                    setShow(true);
                    if(show){
                              setShow(false);
                    }
          }
          
          return (
                    <div>                           
                              <div className="card shadow2 zoom">
                                        <div className='hader'>
                                                  <h6>{data[0].name}</h6>
                                                  <h6>{(data[0].totalsales/data[0].targetsales)*100}%</h6>
                                        </div>
                                        <div className="haderbody">
                                                  <h6>Total Sales - {data[0].totalsales} Crore</h6>
                                                  <button className={`btn  btn-primary`} onClick={onClickHandler}>Off Track</button>
                                        </div>
                                        <div className="footer">
                                                  <h6>Target Sales - {data[0].targetsales} Crore</h6>
                                        </div>
                                        
                              </div>
                              <div>
                              {show&&<Child item={data} />}
                              </div>
                              
                    </div>
          )
}

export default Main
