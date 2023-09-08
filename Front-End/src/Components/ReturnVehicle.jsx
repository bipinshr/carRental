import React, { useState } from 'react'
import { InputBase, Input, Button} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'
 
function AddReturnVehicle({addReturnVehicleVisibility, setaddReturnVehicleVisibility, counter, setCounter}) {
    const [name, setname] = useState()
    const [vehicleID, setvehicleID] = useState()
    const [returnDate, setreturnDate] = useState()
    const [totalAmount, settotalAmount] = useState()

  return (
    addReturnVehicleVisibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "250px", backgroundColor: "white", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "20px"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "10px", fontFamily: "inherit"}}>Return Vehicle</label>
            <Input
                style={{width: "220px", marginTop: "17px"}}
                label="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.currentTarget.value)}
            />
            <Input
                style={{width: "220px",  marginTop: "17px"}}
                label="VehicleID"
                placeholder="VehicleID"
                value={vehicleID}
                onChange={(e) => setvehicleID(e.currentTarget.value)}
            />
            <Input
                style={{width: "220px", marginTop: "17px"}}
                label="ReturnDate"
                placeholder="ReturnDate"
                type={"date"}
                onChange={(e) => setreturnDate(e.currentTarget.value)}
            />
            {totalAmount && <div style={{width :"100%", height :"40px", textAlign:"center", fontSize: "17px", marginTop: "12px"}}>Total Amount: {totalAmount}</div>}
            <div style={{width: "180px",  marginTop :"20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Button
                    style={{width: "170px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setaddReturnVehicleVisibility(!addReturnVehicleVisibility)
                    }
                }
                >
                    Cancel
                </Button>
                {!totalAmount && <Button
                    style={{width: "170px", marginTop: "10px"}}
                    variant="filled"
                    color="blue"
                    onClick={()=>{
                        if(name && vehicleID && returnDate){
                            let parse_name_for_url = name.replace(" ", "%20").replace(".", "%2E")
                            axios.get(`https://car-rental-project.onrender.com/showTotalAmount/${parse_name_for_url}/${vehicleID}/${returnDate}`).then((res)=>{settotalAmount(res.data[0].TotalAmount)})
                            
                        }
                    }
                }
                >
                    Total Amount
                </Button>}
                {totalAmount && <Button
                    style={{width: "170px", marginTop: "10px"}}
                    variant="filled"
                    color="red"
                    onClick={()=>{
                        if(name && vehicleID && returnDate){
                            let parse_name_for_url = name.replace(" ", "%20").replace(".", "%2E")
                            axios.get(`https://car-rental-project.onrender.com/returnVehicle/${parse_name_for_url}/${vehicleID}/${returnDate}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                            setname()
                            setvehicleID()
                            setreturnDate()
                            setaddReturnVehicleVisibility(!addReturnVehicleVisibility)
                            setCounter(counter+1)
                            
                        }
                    }
                }
                >
                    Return Vehicle
                </Button>}
            </div>
            
        </div>
    </div>
  )
}

export default AddReturnVehicle