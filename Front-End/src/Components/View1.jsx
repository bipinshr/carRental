import React, { useState } from 'react'
import { InputBase, Input, Button} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'
import './App.css';
 
function View1({addView1Visibility, setaddView1Visibility, counter, setCounter}) {
    const [custID, setcustID] = useState("")
    const [namePart, setnamePart] = useState("")
    const [dataToBeShown, setdataToBeShown] = useState([])

  return (
    addView1Visibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "500px", height: "600px", backgroundColor: "white", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "10px", fontFamily: "inherit"}}>View 1 - 5 a</label>
            <div style={{display: "flex", flexDirection: "row"}}>
            <Input
                style={{width: "220px", marginTop: "17px"}}
                label="CustID"
                placeholder="CustID"
                value={custID}
                onChange={(e) => setcustID(e.currentTarget.value)}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Name/ Part of Name"
                placeholder="Name/ Part of Name"
                value={namePart}
                onChange={(e) => setnamePart(e.currentTarget.value)}
            />
            </div>
            <div style={{width: "455px",  marginTop :"5px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button
                    style={{width: "220px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setcustID("")
                        setnamePart("")
                        setdataToBeShown([])
                        setaddView1Visibility(!addView1Visibility)
                    }
                }
                >
                    Cancel
                </Button>
                <Button
                    style={{width: "220px", marginLeft: "15px"}}
                    variant="filled"
                    color="blue"
                    onClick={()=>{
                        if(custID.length === 0 && namePart.length === 0){
                            axios.get("https://car-rental-project.onrender.com/viewNoFilter").then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                        else if(custID.length !== 0 && namePart.length === 0){
                            axios.get(`https://car-rental-project.onrender.com/viewFilterID/${custID}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                        else if(custID.length === 0 && namePart.length !== 0){
                            axios.get(`https://car-rental-project.onrender.com/viewFilterName/${namePart}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                        else{
                            axios.get(`https://car-rental-project.onrender.com/viewFilterBoth/${custID}/${namePart}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }}
                    }
                >
                    Search
                </Button>
            </div>
            {dataToBeShown.length > 0 && <div style={{width: "455px", height: "440px", marginTop: "15px", overflowY: "scroll"}}>
                <table className='viewtable'>
                    <thead>
                        <tr>
                            <th>CustomerID</th>
                            <th>CustomerName</th>
                            <th>RemainingBalance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToBeShown.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.CustomerID}</td>
                                    <td>{val.CustomerName}</td>
                                    <td>{val.RemainingBalance[0] === '$' ? val.RemainingBalance : '$'+val.RemainingBalance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}
            
        </div>
    </div>
  )
}

export default View1