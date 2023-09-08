import React, { useState } from 'react'
import { InputBase, Input, Button} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'
 
function AddCustomer({addCustomerVisibility, setaddCustomerVisibility, counter, setCounter}) {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
  return (
    addCustomerVisibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "250px", height: "210px", backgroundColor: "white", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "10px", fontFamily: "inherit"}}>Add Customer</label>
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "17px"}}
                label="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.currentTarget.value)}
            />
            <InputBase
                style={{width: "220px", marginLeft: "15px", marginTop: "10px"}}
                placeholder="Phone Number"
                component={InputMask}
                mask="(999) 999-9999"
                value={phone}
                onChange={(e) => setphone(e.currentTarget.value)}
            />
            <div style={{width: "220px", marginLeft: "15px", marginTop :"20px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button
                    style={{width: "100px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setaddCustomerVisibility(!addCustomerVisibility)
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
                        if(name !== "" && phone.length === 14){
                            // Make name and phone sendable as params in the url
                            let nameToSend = name.replace(" ", "%20")
                            let phoneToSend = phone.replace(" ", "%20")
                            
                            axios.get(`https://car-rental-project.onrender.com/addCustomer/${nameToSend}/${phoneToSend}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                            setaddCustomerVisibility(!addCustomerVisibility)
                            setCounter(counter + 1)
                            setname("")
                            setphone("")
                        }
                    }
                }
                >
                    Add
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default AddCustomer