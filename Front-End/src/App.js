import LeftNavbar from "./Components/LeftNavbar";
import Navbar from "./Components/Navbar";
import './Components/App.css'
import MainStage from "./Components/MainStage";
import { useState } from "react";
import AddCustomer from "./Components/AddCustomer";
import AddVehicle from "./Components/AddVehicle";
import AddRental from "./Components/AddRental";
import AddReturnVehicle from "./Components/ReturnVehicle";
import ViewvRentalInfo from "./Components/ViewvRentalInfo";
import View1 from "./Components/View1";
import View2 from "./Components/View2";

function App() {
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.style.backgroundColor = "white";
  document.body.style.overflow = "hidden";
  const [resetCounter, setresetCounter] = useState(0)
  const [addCustomerVisibility, setaddCustomerVisibility] = useState(false)
  const [addVehicleVisibility, setaddVehicleVisibility] = useState(false)
  const [addRentalVisibility, setaddRentalVisibility] = useState(false)
  const [addReturnVehicleVisibility, setaddReturnVehicleVisibility] = useState(false)
  const [loading, setloading] = useState(false)
  const [viewVisibility, setviewVisibility] = useState(false)
  const [counter2, setcounter2] = useState(0)
  const [viewData, setviewData] = useState()
  const [viewColumns, setviewColumns] = useState()
  const [tablesCreated, settablesCreated] = useState(false)
  const [addView1Visibility, setaddView1Visibility] = useState(false)
  const [addView2Visibility, setaddView2Visibility] = useState(false)
  
  return (
    <div className="App">
      <Navbar/>
      <div className="main-div" >
        <LeftNavbar addView2Visibility={addView2Visibility} setaddView2Visibility={setaddView2Visibility} addView1Visibility={addView1Visibility} setaddView1Visibility={setaddView1Visibility} tablesCreated={tablesCreated} settablesCreated={settablesCreated} loading={loading} setloading={setloading} addRentalVisibility={addRentalVisibility} setaddRentalVisibility={setaddRentalVisibility} addVehicleVisibility={addVehicleVisibility} setaddVehicleVisibility={setaddVehicleVisibility} addCustomerVisibility={addCustomerVisibility} setaddCustomerVisibility={setaddCustomerVisibility} counter={resetCounter} setCounter={setresetCounter} addReturnVehicleVisibility={addReturnVehicleVisibility} setaddReturnVehicleVisibility={setaddReturnVehicleVisibility} counter2={counter2} setcounter2={setcounter2} viewVisibility={viewVisibility} setviewVisibility={setviewVisibility} />
        <MainStage tablesCreated={tablesCreated} settablesCreated={settablesCreated} viewColumns={viewColumns} setviewColumns={setviewColumns} viewData={viewData} setviewData={setviewData} loading={loading} setloading={setloading} counter={resetCounter} setCounter={setresetCounter} counter2={counter2} setCounter2={setcounter2} />
        <AddCustomer counter={resetCounter} setCounter={setresetCounter} addCustomerVisibility={addCustomerVisibility} setaddCustomerVisibility={setaddCustomerVisibility} />
        <AddVehicle counter={resetCounter} setCounter={setresetCounter} addVehicleVisibility={addVehicleVisibility} setaddVehicleVisibility={setaddVehicleVisibility} />
        <AddRental counter={resetCounter} setCounter={setresetCounter} addRentalVisibility={addRentalVisibility} setaddRentalVisibility={setaddRentalVisibility} />
        <AddReturnVehicle counter={resetCounter} setCounter={setresetCounter} addReturnVehicleVisibility={addReturnVehicleVisibility} setaddReturnVehicleVisibility={setaddReturnVehicleVisibility}  />
        <ViewvRentalInfo viewColumns={viewColumns} setviewColumns={setviewColumns} viewData={viewData} setviewData={setviewData} viewVisibility={viewVisibility} setviewVisibility={setviewVisibility} counter2={counter2} setCounter2={setcounter2}  />
        <View1 addView1Visibility={addView1Visibility} setaddView1Visibility={setaddView1Visibility} />
        <View2 addView2Visibility={addView2Visibility} setaddView2Visibility={setaddView2Visibility}  />
      </div>
    </div>
  );
}

export default App;
