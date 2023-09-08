import React, { useState } from 'react'
import { InputBase, Input, Button} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'

function AddVehicle({addVehicleVisibility, setaddVehicleVisibility, counter, setCounter}) {
    const [vehicleID, setvehicleID] = useState("")
    const [description, setdescription] = useState("")
    const [year, setyear] = useState("")
    const [type, settype] = useState("")
    const [category, setcategory] = useState("")

  return (
    addVehicleVisibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "250px", height: "370px", backgroundColor: "white", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "10px", fontFamily: "inherit"}}>Add Vehicle</label>
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="VehicleID"
                maxLength={14}
                placeholder="VehicleID"
                value={vehicleID}
                onChange={(e) => {
                    setvehicleID(e.target.value)
                }}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Description"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                    setdescription(e.target.value)
                }}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Year"
                type={"number"}
                max={9999}
                placeholder="Year"
                value={year}
                onChange={(e) => {
                    setyear(e.target.value)
                }}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Type"
                type={"number"}
                max={9}
                placeholder="Type"
                value={type}
                onChange={(e) => {
                    settype(e.target.value)
                }}
            />

            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Category"
                type={"number"}
                max={9}
                placeholder="Category"
                value={category}
                onChange={(e) => {
                    setcategory(e.target.value)
                }}
            />
            

            
            
            <div style={{width: "220px", marginLeft: "15px", marginTop :"20px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button
                    style={{width: "100px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setaddVehicleVisibility(!addVehicleVisibility)
                    }
                }
                >
                    Cancel
                </Button>
                <Button
                    style={{width: "100px", marginLeft: "10px"}}
                    variant="filled"
                    color="blue"
                    onClick={()=>{
                        if(vehicleID.length === 14 && description.length > 0 && year.length === 4 && type.length === 1 && category.length === 1){
                            let description_new = description.replace(" ", "%20")
                            axios.get(`https://car-rental-project.onrender.com/addVehicle/${vehicleID}/${description_new}/${year}/${type}/${category}`)
                            .then((res)=>{
                                setaddVehicleVisibility(!addVehicleVisibility)
                            })
                            .catch((err)=>{
                                alert(err)
                            })
                            setCounter(counter + 1)
                            setvehicleID("")
                            setdescription("")
                            setyear("")
                            settype("")
                            setcategory("")

                        }
                    }}
                >
                    Add
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default AddVehicle