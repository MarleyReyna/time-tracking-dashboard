import React, { useState } from 'react';
import './Main.scss';
import timeData from './data';
import jeremy from './Images/image-jeremy.png'
import ellipsis from './Images/icon-ellipsis.svg'

const Main = () => {

    const [timestate, setTimestate] = useState('daily')
    
    return (
        <main>
            <div className='profile'>
                <div>
                    <img className='profile-img' 
                    src={jeremy} alt=''
                    aria-hidden='true'/>
                    <h1>
                        <span>Report for </span>
                        <br/>Jeremy Robson
                    </h1>
                </div>
                <ul>
                    <li>
                        <button onClick={()=>{
                            setTimestate('daily')
                        }}
                        className={timestate==='daily' ? 'button-active' : 'button'}
                        >
                            Daily
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{
                            setTimestate('weekly')
                        }}
                        className={timestate==='weekly' ? 'button-active' : 'button'}
                        >
                            Weekly
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{
                            setTimestate('monthly')
                        }} 
                        className={timestate==='monthly' ? 'button-active' : 'button'}
                        >
                            Monthly
                        </button>
                    </li>
                </ul>
            </div>
            <ul className='stats'>
                {timeData.map((item, index) =>{
                    return(
                        <li className={item.class}
                        key={index}>
                            <div className='content-div'>
                                <h2>
                                    {item.title} <img src={ellipsis} alt='' aria-hidden='true'/>
                                </h2>
                                <div>
                                    <h3>{item.timeframes[timestate].current}hrs</h3>
                                    <p>Last Week - {item.timeframes[timestate].previous}hrs</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    );
}
 
export default Main;