import React from 'react'
import './App.css'
import {IconButton } from "@mui/material"
import axios from 'axios'

function LeftNavbar({addView2Visibility, setaddView2Visibility, addView1Visibility, setaddView1Visibility, counter, setCounter, addCustomerVisibility, setaddCustomerVisibility, addVehicleVisibility, setaddVehicleVisibility, addRentalVisibility, setaddRentalVisibility, loading, setloading, addReturnVehicleVisibility, setaddReturnVehicleVisibility, counter2, setcounter2, viewVisibility, setviewVisibility, tablesCreated, settablesCreated}) {
  return (
    <div style={{width: "150px", height: "100%", borderRight: "solid 1px #E9ECEF", display :"flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex", width :"138px", flexDirection: "column", alignItems: "center", border: "solid 1px #e9ecef", paddingBottom: "5px", marginTop: "7px"}}>
            <div className='left-navbar-div left-navbar-div-create'
                onClick = {()=>{
                    axios.get('https://car-rental-project.onrender.com/createTables').then((response)=>{
                        setviewVisibility(false)
                        setCounter(counter+1)
                    })
                }}
            >Create Tables</div>
            <div className='left-navbar-div'
                onClick = {()=>{
                    setloading(true)
                    axios.get('https://car-rental-project.onrender.com/deleteData')
                    axios.get('https://car-rental-project.onrender.com/insertData').then((response)=>{
                        setCounter(counter+1)
                    })
                }}
            >Sample Data</div>
            <div className='left-navbar-div'
                onClick = {()=>{
                    axios.get('https://car-rental-project.onrender.com/describeRental').then((response)=>{
                        if(response.data.filter((val)=>{return val.Field === "Returned"}).length > 0){
                            setCounter(counter+1)
                        }
                        else{
                            axios.get('https://car-rental-project.onrender.com/updateRental').then((response)=>{
                                setCounter(counter+1)
                            })
                        }
                })

                    
                }}
            >Update Rental</div>
        </div>
        <div style={{display: "flex", width :"138px", flexDirection: "column", alignItems: "center", border: "solid 1px #e9ecef", paddingBottom: "5px", marginTop: "20px"}}>
            <div className='left-navbar-div' onClick={()=>{
                setaddCustomerVisibility(!addCustomerVisibility)
            }}>Add Customer</div>
            <div className='left-navbar-div'
                onClick={()=>{
                    setaddVehicleVisibility(!addVehicleVisibility)
                }}
            >Add Vehicle</div>
            <div className='left-navbar-div'
                onClick={()=>{
                    setaddRentalVisibility(!addRentalVisibility)
                }}
            >Add Rental</div>
        </div>
        <div style={{display: "flex", width :"138px", flexDirection: "column", alignItems: "center", border: "solid 1px #e9ecef", paddingBottom: "5px" , marginTop: "20px"}}>
            <div className='left-navbar-div' onClick={()=>{
                setaddReturnVehicleVisibility(!addReturnVehicleVisibility)
            }}>Return Car</div>
        </div>
        <div style={{display: "flex", width :"138px", flexDirection: "column", alignItems: "center", border: "solid 1px #e9ecef", paddingBottom: "5px" , marginTop: "20px"}}>
            <div className='left-navbar-div' onClick = {()=>{
                    setcounter2(counter2+1)
                    setviewVisibility(!viewVisibility)
            }}>View vRentalInfo</div>
            <div className='left-navbar-div' onClick={()=>{
                setaddView1Visibility(!addView1Visibility)
            }}>View 1</div>
            <div className='left-navbar-div' onClick ={()=>{
                setaddView2Visibility(!addView2Visibility)
            }}>View 2</div>
        </div>
        <div style={{display: "flex", width :"138px", flexDirection: "column", alignItems: "center", border: "solid 1px #e9ecef", paddingBottom: "5px" , marginTop: "20px"}}>
            <div className='left-navbar-div left-navbar-div-drop'
                onClick = {()=>{
                    axios.get('https://car-rental-project.onrender.com/dropTables').then((response)=>{
                        setCounter(counter+1)
                    })
                }}
            >Drop Tables</div>
        </div>
    </div>
  )
}

export default LeftNavbar