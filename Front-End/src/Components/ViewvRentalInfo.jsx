import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

function ViewvRentalInfo({viewVisibility, setviewVisibility, counter2, setcounter2, viewData, setviewData, viewColumns, setviewColumns}) {
    
    
  return (
    viewVisibility && viewColumns.length> 0 && viewData.length > 0 && <div style={{width: "100vw", height :"100vh", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
        <div style={{width: "1200px", height: "600px", overflowY: "scroll", marginTop: "30px"}}>
            {viewColumns.length > 0 &&  <table className='viewtable'>
                <thead>
                    <tr>
                        {viewColumns.map((column)=>{
                            return <th>{column.Field}</th>
                        }
                        )}
                    </tr>
                </thead>
                <tbody>
                    {viewData.map((row)=>{
                        return <tr>
                            {viewColumns.map((column)=>{
                                // If date, format it to YYYY-MM-DD and add 0s to the front if necessary
                                if(column.Type === "date"){
                                    let date = new Date(row[column.Field])
                                    let year = date.getFullYear()
                                    let month = date.getMonth()+1
                                    let day = date.getDate()
                                    if(month < 10){
                                        month = "0"+month
                                    }
                                    if(day < 10){
                                        day = "0"+day
                                    }
                                    return <td>{year+"-"+month+"-"+day}</td>
                                }
                                else{
                                    return <td>{row[column.Field]}</td>
                                }

                            })}
                        </tr>
                    })}
                </tbody>
            </table>}
        </div>
    </div>
  )
}

export default ViewvRentalInfo