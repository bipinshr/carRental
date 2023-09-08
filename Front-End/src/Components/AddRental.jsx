import React, { useState } from 'react'
import { InputBase, Input, Button, NativeSelect} from "@mantine/core"
import InputMask from "react-input-mask"
import axios from 'axios'
import {IconChevronDown} from "@tabler/icons"

function AddRental({addRentalVisibility, setaddRentalVisibility, counter, setCounter}) {
    const [startDate, setstartDate] = useState()
    const [returnDate, setreturnDate] = useState()
    const [availableCars, setavailableCars] = useState([])
    const [vehicleID, setvehicleID] = useState()
    const [custID, setcustID] = useState()
    const [Qty, setQty] = useState()
    const [totalAmount, settotalAmount] = useState()
    const [orderDate, setorderDate] = useState()
    const [rentalType, setrentalType] = useState()
    const [paymentDate, setpaymentDate] = useState()
  return (
    addRentalVisibility && <div style={{position: "absolute", width: "100vw", height: "100vh", backgroundColor: "rgb(237,240,242, 0.8)", display: "flex", justifyContent: "center", alignItems: "flex-start", zIndex: "2"}} onClick = {(e)=>{
    }}>
        <div style={{width: "550px", height: "500px", backgroundColor: "white", marginTop: "50px", display: "flex", flexWrap: "wrap", alignItems: "center", flexDirection: "column"}}>
            <label style={{fontSize: "17px", fontWeight: "600", marginLeft: "17px", marginTop: "30px", fontFamily: "inherit"}}>Add Rental</label>
            <div style={{width: "550px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
            <Input.Wrapper label ="StartDate">
            <Input
                style={{width: "170px", marginLeft: "15px"}}
                label="StartDate"
                type={"date"}
                placeholder="StartDate"
                onChange={(e) => {
                    setstartDate(e.target.value)
                }}
            />
            </Input.Wrapper>
            <Input.Wrapper label ="ReturnDate">
            <Input
                style={{width: "170px", marginLeft: "15px"}}
                label="ReturnDate"
                type={"date"}
                placeholder="ReturnDate"
                onChange={(e) => {
                    setreturnDate(e.target.value)
                }}
            />
            </Input.Wrapper>
            <Button style={{width: "120px", marginLeft: "15px", marginTop: "24px"}} onClick={()=>{
                axios.get(`https://car-rental-project.onrender.com/findAvailableVehicles/${startDate}/${returnDate}`).then((response)=>{
                    setavailableCars(response.data)
                    console.log(response.data)
                
            })
            }}>Search Cars</Button>
            </div>
            
            <NativeSelect style={{width: "470px"}}
      label="Cars Available"
      placeholder="Cars Available"
      data={availableCars.length> 0 ? availableCars.map((val)=>{
          return val.VehicleID + "---" + val.Description + "---" + val.Year + "---" + val.Type + "---" + val.Category
          }): []}
        onChange={(e) => {
            setvehicleID(e.target.value.split("---")[0])
        }}
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={40}
    />
        <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{width: "250px", display: "flex", flexDirection: "column"}}>
            <Input
                style={{width: "240px", marginLeft: "15px", marginTop: "7px"}}
                label="CustID"
                type={"number"}
                placeholder="CustID"
                value = {custID}
                onChange={(e) => {
                    setcustID(e.target.value)
                }}
            />
            <Input
                style={{width: "240px", marginLeft: "15px", marginTop: "7px"}}
                label="VehicleID"
                maxLength={14}
                placeholder="VehicleID"
                value = {vehicleID}
                disabled = {true}
            />
            
            <Input.Wrapper label="OrderDate" required>
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "7px"}}
                label="OrderDate"
                type={"date"}
                placeholder="OrderDate"
                onChange={(e) => {
                    setorderDate(e.target.value)
                }}
            />
            </Input.Wrapper>
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "7px"}}
                label="RentalType"
                type={"number"}
                placeholder="RentalType"
                value={rentalType}
                onChange={(e) => {
                    setrentalType(e.target.value)
                }}
            />
            </div>
            <div style={{width: "250px", display: "flex", flexDirection: "column"}}>
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "7px"}}
                label="Qty"
                type={"number"}
                placeholder="Qty"
                value={Qty}
                onChange={(e) => {
                    setQty(e.target.value)
                }}
            />
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "7px"}}
                label="TotalAmount"
                type={"number"}
                placeholder="TotalAmount"
                value={totalAmount}
                onChange={(e) => {
                    settotalAmount(e.target.value)
                }}
            />
            <Input.Wrapper label="PaymentDate">
            <Input
                style={{width: "220px", marginLeft: "15px", marginTop: "7px"}}
                label="PaymentDate"
                type={"date"}
                placeholder="PaymentDate"
                onChange={(e) => {
                    setpaymentDate(e.target.value)
                }}
            />
            </Input.Wrapper>
            </div>
            </div>
            <div style={{width: "475px", marginLeft: "15px", marginTop :"20px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button
                    style={{width: "220px"}}
                    variant="outline"
                    color="red"
                    onClick={()=>{
                        setavailableCars([])
                        setstartDate("")
                        setreturnDate("")
                        setaddRentalVisibility(!addRentalVisibility)
                    }
                }
                >
                    Cancel
                </Button>
                <Button
                    style={{width: "220px", marginLeft: "10px"}}
                    variant="filled"
                    color="blue"
                    onClick={()=>{
                        
                        if(custID && vehicleID && startDate && orderDate && rentalType && Qty && returnDate && totalAmount){
                            axios.get(`https://car-rental-project.onrender.com/createRental/${custID}/${vehicleID}/${startDate}/${orderDate}/${rentalType}/${Qty}/${returnDate}/${totalAmount}/${paymentDate? paymentDate: "0000-00-00"}`).then((response)=>{
                                console.log(response.data)
                                setavailableCars([])
                                setstartDate()
                                setreturnDate()
                                setaddRentalVisibility(!addRentalVisibility)
                                setQty()
                                settotalAmount()
                                setpaymentDate()
                                setorderDate()
                                setrentalType()
                                setcustID()
                                setvehicleID()
                                setCounter(counter+1)
                            })
                    }}
                }
                >
                    Add
                </Button>
            </div>
            
        </div>
    </div>
  )
}

export default AddRental