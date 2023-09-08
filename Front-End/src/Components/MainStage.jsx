import React, { useEffect, useState } from 'react'
// Axios
import axios from 'axios'


// Allow cross-origin requests from any domain
axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'



function MainStage({counter, setCounter, loading, setloading, tablesCreated, settablesCreated, viewColumns, setviewColumns, viewData, setviewData}) {
    // Make a get request to the server
    
    const [tableNames, settableNames] = useState([{custID: "", Name: "", Phone: ""}])
    const [customerTable, setcustomerTable] = useState([])
    const [vehicleTable, setvehicleTable] = useState([])
    const [rentalTable, setrentalTable] = useState([])
    const [rateTable, setrateTable] = useState([])
    const [customerDescription, setcustomerDescription] = useState([])
    const [vehicleDescription, setvehicleDescription] = useState([])
    const [rentalDescription, setrentalDescription] = useState([])
    const [rateDescription, setrateDescription] = useState([])
    

    useEffect(() => {
        setloading(true)
        setcustomerTable([]);
        setvehicleTable([]);
        setrentalTable([]);
        setrateTable([]);
        
        axios.get('https://car-rental-project.onrender.com/showTables', ).then((response)=>{
            if(response.data.length > 0){
                // Allow cors
                axios.get('https://car-rental-project.onrender.com/describeCustomer').then((response)=>{
                    setcustomerDescription(response.data)
                })
                axios.get('https://car-rental-project.onrender.com/describeVehicle').then((response)=>{
                    setvehicleDescription(response.data)
                })
                axios.get('https://car-rental-project.onrender.com/describeRental').then((response)=>{
                    setrentalDescription(response.data)
                })
                axios.get('https://car-rental-project.onrender.com/describeRate').then((response)=>{
                    setrateDescription(response.data)
                })
                axios.get('https://car-rental-project.onrender.com/viewCustomers').then((response)=>{
                    setcustomerTable(response.data)
                })
                axios.get('https://car-rental-project.onrender.com/viewVehicles').then((response)=>{
                    setvehicleTable(response.data)
                }
                )
                axios.get('https://car-rental-project.onrender.com/viewRentals').then((response)=>{
                    setrentalTable(response.data)
                }
                )
                axios.get('https://car-rental-project.onrender.com/viewRates').then((response)=>{
                    setrateTable(response.data)
                }
                ).then(settablesCreated(true))
                axios.get('https://car-rental-project.onrender.com/describeView').then((response)=>{
                    setviewColumns(response.data)
                    if(response.data.length > 0){
                        axios.get('https://car-rental-project.onrender.com/viewRentalInfo').then((response)=>{
                            console.log(response.data)
                            setviewData(response.data)
                    })
                    }
                })
                setloading(false)
            }
            else{
                settablesCreated(false)
                setloading(false)
            }
            
        })
    }, [counter])
    
  return (
    tablesCreated===true && customerDescription.length > 0 && vehicleDescription.length > 0 && rentalDescription.length > 0 && rateDescription.length > 0 ?  <div onLoad={()=>{setCounter(counter+1)}} style={{height :"100%", flex: "1", overflowY: "Scroll"}}>
        {loading && <div style={{position :"absolute", height: "100%", width: "100%", backgroundColor: "#e9ecef"}}></div>}
        <div className='main-table-div'>
        {tablesCreated === true ? <div className='table-div customer-table ' style={{height: customerTable.length > 0? "300px": ""}}>
            Customer
            <table>
                <tr>
                    {
                        customerDescription.map((val)=>{
                            return <th>{val.Field}</th>
                        })
                    }
                </tr>
                {customerTable.map((val, i)=>{
                    return(
                        <tr>
                            <td>{val.CustID}</td>
                            <td>{val.Name}</td>
                            <td>{val.Phone}</td>
                        </tr>
                    )
                })}
            </table>
        </div> : <div></div>}
        {tablesCreated === true ? <div className='table-div vehicle-table ' style={{height: customerTable.length > 0? "300px": ""}}>
            Vehicle
            <table>
                <tr>
                {
                        vehicleDescription.map((val)=>{
                            return <th>{val.Field}</th>
                        })
                    }
                </tr>
                {vehicleTable.map((val, i)=>{
                    return(
                        <tr>
                            <td>{val.VehicleID}</td>
                            <td>{val.Description}</td>
                            <td>{val.Year}</td>
                            <td>{val.Type}</td>
                            <td>{val.Category}</td>
                        </tr>
                    )
                })}
            </table>

        </div> : <div></div>}
        {tablesCreated === true ? <div className='table-div rental-table ' style={{height: customerTable.length > 0? "300px": ""}}>
            Rental
            <table>
                <tr>
                {
                        rentalDescription.map((val)=>{
                            return <th>{val.Field}</th>
                        })
                    }
                </tr>
                {rentalTable.map((val, i)=>{
                    return(
                        <tr>
                            <td>{val.CustID}</td>
                            <td>{val.VehicleID}</td>
                            <td>{(new Date(val.StartDate)).toISOString().split('T')[0]}</td>
                            <td>{(new Date(val.OrderDate)).toISOString().split('T')[0]}</td>
                            <td>{val.RentalType}</td>
                            <td>{val.Qty}</td>
                            <td>{(new Date(val.ReturnDate)).toISOString().split('T')[0]}</td>
                            <td>{val.TotalAmount}</td>
                            <td>{val.PaymentDate !== "0000-00-00"?(new Date(val.PaymentDate)).toISOString().split('T')[0]: ""}</td>
                            {
                                rentalDescription.filter((val)=>{return val.Field === "Returned"}).length > 0?
                                <td>{val.Returned}</td>: null
                            }
                        </tr>
                    )
                })}
            </table>
        </div> : <div></div>}
        {tablesCreated === true ? <div className='table-div rate-table ' style={{height: customerTable.length > 0? "300px": ""}}>
            Rate
            <table>
                <tr>
                {
                        rateDescription.map((val)=>{
                            return <th>{val.Field}</th>
                        })
                    }
                </tr>
                {rateTable.map((val, i)=>{
                    return(
                        <tr>
                            <td>{val.Type}</td>
                            <td>{val.Category}</td>
                            <td>{val.Weekly}</td>
                            <td>{val.Daily}</td>
                        </tr>
                    )
                }
                )}
            </table>
        </div> : <div></div>}
        
        </div>
    </div>: <div></div>
  )
}

export default MainStage