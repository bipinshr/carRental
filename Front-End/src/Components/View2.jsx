import React, { useState } from 'react'
import { InputBase, Input, Button} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'
import './App.css';
 
function View2({addView2Visibility, setaddView2Visibility, counter, setCounter}) {
    const [VIN, setVIN] = useState("")
    const [descPart, setdescPart] = useState("")
    const [dataToBeShown, setdataToBeShown] = useState([])

  return (
    addView2Visibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "500px", height: "600px", backgroundColor: "white", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "10px", fontFamily: "inherit"}}>View 2 - 5 b</label>
            <div style={{display: "flex", flexDirection: "row"}}>
            <Input
                style={{width: "220px", marginTop: "17px"}}
                label="VIN"
                placeholder="VIN"
                value={VIN}
                onChange={(e) => setVIN(e.currentTarget.value)}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Description"
                placeholder="Description/ Part of Description"
                value={descPart}
                onChange={(e) => setdescPart(e.currentTarget.value)}
            />
            </div>
            <div style={{width: "455px",  marginTop :"5px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button
                    style={{width: "220px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setVIN("")
                        setdescPart("")
                        setdataToBeShown([])
                        setaddView2Visibility(!addView2Visibility)
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
                        if(VIN.length === 0 && descPart.length === 0){
                            axios.get("https://car-rental-project.onrender.com/view2NoFilter").then((response)=>{
                                //setdataToBeShown(response.data)
                                setdataToBeShown(response.data)
                            })
                        }
                        else if(VIN.length !== 0 && descPart.length === 0){
                            axios.get(`https://car-rental-project.onrender.com/view2FilterVIN/${VIN}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                        else if(VIN.length === 0 && descPart.length !== 0){
                            axios.get(`https://car-rental-project.onrender.com/view2FilterDesc/${descPart}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                        else{
                            axios.get(`https://car-rental-project.onrender.com/view2FilterBoth/${VIN}/${descPart}`).then((response)=>{
                                setdataToBeShown(response.data)
                            })
                        }
                    
                    }

                    }
                >
                    Search
                </Button>
            </div>
            {dataToBeShown.length > 0 && <div style={{width: "455px", height: "440px", marginTop: "15px", overflowY: "scroll"}}>
                <table className='viewtable'>
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Description</th>
                            <th>AvgDaily</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToBeShown.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.VIN}</td>
                                    <td>{val.Description}</td>
                                    <td>{val.AvgDaily}</td>
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

export default View2