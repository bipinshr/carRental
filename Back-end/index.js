const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql');
const initial_data = require('./initial_data.js');
const initial_Customer_data = initial_data.initial_customer_data;
const initial_Rate_data = initial_data.initial_rate_data;
const initial_Vehicle_data = initial_data.initial_vehicle_data;
const initial_Rental_data = initial_data.initial_rental_data;
app.use(express.static('public'));

//connnecting with mySQL
var con = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
    port: "3306",
    user: "sql9582591",
    password: "v31MbmJ7pe",
    database: "sql9582591"
});


con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: false }));
// Allow cross-origin requests
const corsOptions ={
    origin: 'https://car-rental-project.onrender.com',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

// Allow CORS from "http://localhost:3000"
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://car-rental-project.onrender.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Create table Customer
let disable_foreign_key_checks = 'SET FOREIGN_KEY_CHECKS = 0';

let create_table_Customer = `CREATE TABLE IF NOT EXISTS Customer (
    CustID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(30) NOT NULL,
    Phone VARCHAR(14) NOT NULL,
    PRIMARY KEY (CustID)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

let create_table_Rate = `CREATE TABLE IF NOT EXISTS Rate (
    Type int not null,
	Category int not null,
	Weekly decimal(10,2) not null,
	Daily decimal(10,2) not null,
	primary key(Type,Category)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

let create_table_Vehicle = `CREATE TABLE IF NOT EXISTS Vehicle (
    VehicleID char(17) not null primary key,
    Description varchar(50) not null,
    Year int not null,
    Type int not null,
    Category int not null,
    INDEX par_type (Type),
    INDEX par_category (Category),
    foreign key (Type,Category) references Rate(Type,Category) on delete cascade on update cascade
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

let create_table_Rental = `CREATE TABLE IF NOT EXISTS Rental (
    CustID int not null,
	VehicleID char(17) not null,
	StartDate date not null,
	OrderDate date not null,
	RentalType int not null,
	Qty int not null,
	ReturnDate date not null,
	TotalAmount int not null,
	PaymentDate date,
	primary key(CustID,VehicleID,StartDate),
	Foreign Key (CustID) REFERENCES Customer(CustID) on delete cascade,
	Foreign Key (VehicleID) REFERENCES Vehicle(VehicleID) on delete cascade
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;



//--------------------------------------------------------------Create tables--------------------------------------------------------------

app.get('/createTables', (req, res) => {
    let errors = [];
    con.query(create_table_Customer, function (err, result) {
        if (err) console.log(err);
        console.log("Table Customer created");
    });
    
    con.query(create_table_Rate, function (err, result) {
        if (err) console.log(err);
        console.log("Table Rate created");
    });

    con.query(create_table_Vehicle, function (err, result) {
        if (err) console.log(err);
        console.log("Table Vehicle created");
    });
    
    con.query(create_table_Rental, function (err, result) {
        if (err) console.log(err);
        console.log("Table Rental created");
    });

    res.send({ errors: errors, message: "Tables created" });
});


//----------------------------------------------Insert initial data----------------------------------------------

app.get('/insertData', (req, res) => {
    let errors = [];
    for(let i = 0; i < initial_Customer_data.length; i++){
        let sql = `INSERT INTO Customer (CustID, Name, Phone) VALUES ('${initial_Customer_data[i].CustID}','${initial_Customer_data[i].Name}', '${initial_Customer_data[i].Phone}')`;
        con.query(sql, function(err, result) {
            if (err) errors.push(err);
        }
    )};
    console.log("Customer data inserted");
    
    for(let i = 0; i < initial_Rate_data.length; i++){
        let sql = `INSERT INTO Rate (Type, Category, Weekly, Daily) VALUES ('${initial_Rate_data[i].Type}','${initial_Rate_data[i].Category}', '${initial_Rate_data[i].Weekly}', '${initial_Rate_data[i].Daily}')`;
        con.query(sql, function(err, result) {
            if (err) errors.push(err);
        }
    )};
    console.log("Rate data inserted");

    for(let i = 0; i < initial_Vehicle_data.length; i++){
        let sql = `INSERT INTO Vehicle (VehicleID, Description, Year, Type, Category) VALUES ('${initial_Vehicle_data[i].VehicleID}','${initial_Vehicle_data[i].Description}', '${initial_Vehicle_data[i].Year}', '${initial_Vehicle_data[i].Type}', '${initial_Vehicle_data[i].Category}')`;
        con.query(sql, function(err, result) {
            if (err) errors.push(err);
        }
    )};
    console.log("Vehicle data inserted");

    for(let i = 0; i < initial_Rental_data.length; i++){
        let sql = `INSERT INTO Rental (CustID, VehicleID, StartDate, OrderDate, RentalType, Qty, ReturnDate, TotalAmount, PaymentDate) VALUES ('${initial_Rental_data[i].CustID}','${initial_Rental_data[i].VehicleID}', '${initial_Rental_data[i].StartDate}', '${initial_Rental_data[i].OrderDate}', '${initial_Rental_data[i].RentalType}', '${initial_Rental_data[i].Qty}', '${initial_Rental_data[i].ReturnDate}', '${initial_Rental_data[i].TotalAmount}', '${initial_Rental_data[i].PaymentDate}')`;
        con.query(sql, function(err, result) {
            if (err) errors.push(err);
        }
    )};
    console.log("Rental data inserted");

    res.send({ errors: errors, message: "Data inserted" });
});


// ---------------------------------------Delete all data from tables---------------------------------------

app.get('/deleteData', (req, res) => {
    let errors = [];
    let sql = "DELETE FROM Rental";
    con.query
    (sql, function(err, result) {
        if (err) errors.push(err);
    });
    console.log("Rental data deleted");

    sql = "DELETE FROM Vehicle";
    con.query
    (sql, function(err, result) {
        if (err) errors.push(err);
    });
    console.log("Vehicle data deleted");
    
    sql = "DELETE FROM Rate";
    con.query
    (sql, function(err, result) {
        if (err) errors.push(err);
    });
    console.log("Rate data deleted");

    sql = "DELETE FROM Customer";
    con.query
    (sql, function(err, result) {
        if (err) errors.push(err);
    });
    console.log("Customer data deleted");

    res.send({ errors: errors, message: "Data deleted" });
});

//--------------------------------------------------------------Describe Tables--------------------------------------------------------------
app.get('/describeCustomer', (req, res) => {
    let sql = "DESCRIBE Customer";
    con.query
    (sql, function (err, result) {
        if (err) res.send(err);
        else
        res.send(result);
    });
});

app.get('/describeRate', (req, res) => {
    let sql = "DESCRIBE Rate";
    con.query
    (sql, function (err, result) {
        if (err) res.send(err);
        else
        res.send(result);
    });
});

app.get('/describeVehicle', (req, res) => {
    let sql = "DESCRIBE Vehicle";
    con.query
    (sql, function (err, result) {
        if (err) res.send(err);
        else
        res.send(result);
    });
});

app.get('/describeRental', (req, res) => {
    let sql = "DESCRIBE Rental";
    con.query
    (sql, function (err, result) {
        if (err) res.send(err);
        else
        res.send(result);
    });
});



// --------------------------------------------------------------------------------- Drop Tables---------------------------------------------------------------------------------

app.get('/dropTables', (req, res) => {
    
    let foreign_key_check = `SET FOREIGN_KEY_CHECKS = 0;`;
    con.query(foreign_key_check, function (err, result) {
        if (err) console.log(err);
        console.log("Foreign key check disabled");
    });

    let sql = `DROP TABLE IF EXISTS Customer, Rate, Vehicle, Rental;`;
    con.query
    (sql, function (err, result) {
        if (err) res.send(err);
        else
        res.send(result);
    });

    foreign_key_check = `SET FOREIGN KEY_CHECKS = 1;`;
    con.query(foreign_key_check, function (err, result) {
        if (err) console.log(err);
        console.log("Foreign key check enabled");
    });
});

app.get('/dropCustomer', (req, res) => {
    let errors = [];
    con.query('DROP TABLE Customer', function (err, result) {
        if (err) errors.push(err);
    });

    res.send({ errors: errors, message: "Table Customer dropped" });
});

app.get('/dropRate', (req, res) => {
    let errors = [];
    con.query('DROP TABLE Rate', function (err, result) {
        if (err) errors.push(err);
    });

    res.send({ errors: errors, message: "Table Rate dropped" });
});

app.get('/dropVehicle', (req, res) => {
    let errors = [];
    con.query('DROP TABLE Vehicle', function (err, result) {
        if (err) errors.push(err);
    });

    res.send({ errors: errors, message: "Table Vehicle dropped" });
});

app.get('/dropRental', (req, res) => {
    let errors = [];
    con.query('DROP TABLE Rental', function (err, result) {
        if (err) errors.push(err);
    });

    res.send({ errors: errors, message: "Table Rental dropped" });
});





// --------------------------------------------------------------------------------- View Tables---------------------------------------------------------------------------------

app.get('/viewCustomers', (req, res) => {
    
    con.query("SELECT * FROM Customer", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    });
    
});

app.get('/viewVehicles', (req, res) => {
    
    con.query("SELECT * FROM Vehicle", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    }); 
});

app.get('/viewRates', (req, res) => {
    
    con.query("SELECT * FROM Rate", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.get('/viewRentals', (req, res) => {
    con.query("SELECT * FROM Rental", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    });
    
});

app.get('/showTables', (req, res) => {
    con.query("SHOW TABLES", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.get('/dropView1', (req, res) => {
    con.query("DROP VIEW vRENTALInfo", function (err, result, fields) {
        if (err) res.send(err);
        else res.send(result);
    });
});

// -----------------------------------------------------------------Custom Queries-----------------------------------------------------------------

// Add a new Customer
app.get('/addCustomer/:Name/:Phone', (req, res) => {
    let sql = `INSERT INTO Customer (Name, Phone) VALUES ('${req.params.Name}', '${req.params.Phone}')`;
    con.query(sql, function(err, result) {
        if (err) res.send(err);
        res.send('Customer added');
    });
});

// Add a new Vehicle
app.get('/addVehicle/:VehicleID/:Description/:Year/:Type/:Category', (req, res) => {
    let sql = `INSERT INTO Vehicle (VehicleID, Description, Year, Type, Category) VALUES ('${req.params.VehicleID}', '${req.params.Description}', '${req.params.Year}', '${req.params.Type}', '${req.params.Category}')`;
    con.query(sql, function(err, result) {
        if (err) console.log(err);
        res.send('Vehicle added');
    });
});

// Find available Vehicles for a given date range
app.get('/findAvailableVehicles/:StartDate/:EndDate', (req, res) => {
    let sql = `SELECT VehicleID, Description, Year, Type, Category FROM Vehicle WHERE VehicleID NOT IN (SELECT VehicleID FROM Rental WHERE StartDate <= '${req.params.EndDate}' AND ReturnDate >= '${req.params.StartDate}')`;
    con.query(sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

// Create a new Rental but check if the Vehicle is available for the given date range.
app.get('/createRental/:CustID/:VehicleID/:StartDate/:OrderDate/:RentalType/:Qty/:ReturnDate/:TotalAmount/:PaymentDate', (req, res) => {
    let sql = `SELECT VehicleID FROM Vehicle WHERE VehicleID NOT IN (SELECT VehicleID FROM Rental WHERE StartDate <= '${req.params.ReturnDate}' AND ReturnDate >= '${req.params.StartDate}')`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        if (result.length == 0) {
            res.send('Vehicle not available');
        } else {
            let new_payment_date = req.params.PaymentDate==="null"? null : req.params.PaymentDate;
            let sql = `INSERT INTO Rental (CustID, VehicleID, StartDate, OrderDate, RentalType, Qty, ReturnDate, TotalAmount, PaymentDate) VALUES ('${req.params.CustID}', '${req.params.VehicleID}', '${req.params.StartDate}', '${req.params.OrderDate}', '${req.params.RentalType}', '${req.params.Qty}', '${req.params.ReturnDate}', '${req.params.TotalAmount}', '${new_payment_date}')`;
            console.log(sql);
            con.query(sql, function
            (err, result) {
                if (err) res.send(err);
                res.send('Rental created');
            });
        }
    });
});

// Add an extra column 'Returned' to the Rental table. The values will be 0 for non-returned Vehicles and 1 for returned Vehicles. Then update the values for the Rentals that have a payment date not null. 
app.get('/updateRental', (req, res) => {
    let sql = `ALTER TABLE Rental ADD Returned INT NOT NULL DEFAULT 0`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        let sql = `UPDATE Rental SET Returned = 1 WHERE PaymentDate != '0000-00-00'`;
        con.query
        (sql, function(err, result) {
            if (err) res.send(err);
            res.send('Rental updated');
        });
    });
});

// Handle the return of a Vehicle. Update the Rental table with the payment date (set this equal to return date) and returned.
app.get('/showTotalAmount/:Name/:VehicleID/:ReturnDate', (req, res) => {
    let sql1 = `SELECT TotalAmount FROM Rental WHERE CustID IN (SELECT CustID FROM Customer WHERE Name = '${req.params.Name}') AND VehicleID = '${req.params.VehicleID}' AND ReturnDate = '${req.params.ReturnDate}'`
    console.log(sql1);
    con.query
    (sql1, function(err, result) {
        if (err) res.send(err);
        else{
            res.send(result);
        }
    });
});

app.get('/returnVehicle/:Name/:VehicleID/:ReturnDate', (req, res) => {
    let sql2 = `UPDATE Rental SET PaymentDate = ReturnDate, Returned = 1 WHERE CustID IN (SELECT CustID FROM Customer WHERE Name = '${req.params.Name}') AND VehicleID = '${req.params.VehicleID}' AND ReturnDate = '${req.params.ReturnDate}'`
    console.log(sql2);
    con.query
    (sql2, function(err, result) {
        if (err) res.send(err);
        else{
            res.send('Vehicle returned');
        }
    });
});

// Find the total payment due for a given Customer for a Qty number for days or weeks. RentalType is either '1' for daily or '7' for weekly. The Rates for each type are stored in the Rate table under Daily and Weekly and are based on the Vehicle category and type. After calculating the total amount, 
app.get('/findTotalPayment/:CustID/:VehicleID/:StartDate', (req, res) => {
    let sql = `SELECT RentalType, Qty, Category, Type FROM Rental, Vehicle WHERE Rental.VehicleID = Vehicle.VehicleID AND CustID = '${req.params.CustID}' AND Rental.VehicleID = '${req.params.VehicleID}' AND StartDate = '${req.params.StartDate}'`;

    con.query
    (sql, function(err, result) {
        if (err) res.send(err
        );
        let sql = `SELECT Daily, Weekly FROM Rate WHERE Category = '${result[0].Category}' AND Type = '${result[0].Type}'`;
        con.query
        (sql, function(err, result2) {
            if (err) res.send(err);
            if (result[0].RentalType == 1) {
                res.send(`Total payment due: $${result2[0].Daily * result[0].Qty}`);
            } else {
                res.send(`Total payment due: $${result2[0].Weekly * result[0].Qty}`);
            }
        }
        );
    }
    );
});


let viewcreate = `CREATE VIEW vRENTALInfo
AS SELECT Rental.OrderDate, Rental.StartDate, Rental.ReturnDate,
CASE Rental.RentalType
    WHEN 1 THEN Rental.Qty
    WHEN 7 THEN Rental.Qty * 7
END AS TotalDays,
Vehicle.VehicleID as VIN,
Vehicle.Description as Vehicle,
CASE Vehicle.Type
	WHEN 1 THEN 'Compact'
	WHEN 2 THEN 'Medium'
	WHEN 3 THEN 'Large'
	WHEN 4 THEN 'SUV'
	WHEN 5 THEN 'Truck'
	WHEN 6 THEN 'VAN'
END AS Type,
CASE Vehicle.Category
	WHEN 0 THEN 'Basic'
	WHEN 1 THEN 'Luxury'
END AS Category,
Customer.CustID AS CustomerID,
Customer.Name AS CustomerName,
Rental.TotalAmount As OrderAmount,
CASE Rental.PaymentDate
	WHEN '0000-00-00' THEN Rental.TotalAmount
	else 0
END AS RentalBalance
FROM Customer, Vehicle, Rate, Rental
WHERE Customer.CustID = Rental.CustID AND Vehicle.VehicleID = Rental.VehicleID AND Vehicle.Type = Rate.Type AND Vehicle.Category = Rate.Category
ORDER BY StartDate ASC;`

// Create view vRentalInfo
app.get('/createView', (req, res) => {
    let errors = [];
    con.query
    (viewcreate, function(err, result) {
        if (err) {
            console.log(err)
        }
    });
    res.send({errors: errors, message: 'View created'});
});

app.get('/describeView', (req, res) => {
    let sql = `DESCRIBE vRENTALInfo`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

// View vRentalInfo
app.get('/viewRentalInfo', (req, res) => {
    let errors = [];
    let sql = `SELECT * FROM vRENTALInfo`;
    con.query
    (sql, function(err, result) {
        if (err) {
            errors.push(err);
        }
        else {
            res.send(result);
        }

    });
});


app.get('/viewNoFilter', (req, res) => {
    let sql = `SELECT CustomerID, CustomerName, CASE RentalBalance WHEN 0 THEN '$0.00' ELSE RentalBalance END AS RemainingBalance FROM vRENTALInfo ORDER BY RentalBalance ASC`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/viewFilterID/:custID', (req, res) => {
    let sql = `SELECT CustomerID, CustomerName, CASE RentalBalance WHEN 0 THEN '$0.00' ELSE RentalBalance END AS RemainingBalance FROM vRENTALInfo WHERE CustomerID = '${req.params.custID}' ORDER BY RentalBalance ASC`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/viewFilterName/:custNamePart', (req, res) => {
    let sql = `SELECT CustomerID, CustomerName, CASE RentalBalance WHEN 0 THEN '$0.00' ELSE RentalBalance END AS RemainingBalance FROM vRENTALInfo WHERE CustomerName LIKE '%${req.params.custNamePart}%' ORDER BY RentalBalance ASC`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/viewFilterBoth/:custID/:custNamePart', (req, res) => {
    let sql = `SELECT CustomerID, CustomerName, CASE RentalBalance WHEN 0 THEN '$0.00' ELSE RentalBalance END AS RemainingBalance FROM vRENTALInfo WHERE CustomerID = '${req.params.custID}' AND CustomerName LIKE '%${req.params.custNamePart}%' ORDER BY RentalBalance ASC`;
    console.log(sql);
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/view2NoFilter', (req, res) => {
    // For all vehicles in vehicle table list their vehicleID, description, and their Daily Rate from the Rate Table if they appear in vRENTALInfo view else put 'N/A' in the Average Daily Rate column
    let sql = `SELECT Vehicle.VehicleID as VIN, Vehicle.Description as Description,  CASE WHEN Vehicle.VehicleID IN (SELECT VIN FROM vRENTALInfo) THEN Daily ELSE 'Not Applicable' END as AvgDaily FROM Vehicle, Rate WHERE Vehicle.Type = Rate.Type AND Vehicle.Category = Rate.Category GROUP BY Vehicle.VehicleID ORDER BY Vehicle.VehicleID ASC`;
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/view2FilterVIN/:vin', (req, res) => {
    let sql = `SELECT Vehicle.VehicleID as VIN, Vehicle.Description as Description,  CASE WHEN Vehicle.VehicleID IN (SELECT VIN FROM vRENTALInfo) THEN Daily ELSE 'Not Applicable' END as AvgDaily FROM Vehicle, Rate WHERE Vehicle.Type = Rate.Type AND Vehicle.Category = Rate.Category AND Vehicle.VehicleID = '${req.params.vin}' GROUP BY Vehicle.VehicleID ORDER BY Vehicle.VehicleID ASC`;
    console.log(sql);
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/view2FilterDesc/:descPart', (req, res) => {
    let sql = `SELECT Vehicle.VehicleID as VIN, Vehicle.Description as Description,  CASE WHEN Vehicle.VehicleID IN (SELECT VIN FROM vRENTALInfo) THEN Daily ELSE 'Not Applicable' END as AvgDaily FROM Vehicle, Rate WHERE Vehicle.Type = Rate.Type AND Vehicle.Category = Rate.Category AND Vehicle.Description LIKE '%${req.params.descPart}%' GROUP BY Vehicle.VehicleID ORDER BY Vehicle.VehicleID ASC`;
    console.log(sql);
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get('/view2FilterBoth/:vin/:descPart', (req, res) => {
    let sql = `SELECT Vehicle.VehicleID as VIN, Vehicle.Description as Description,  CASE WHEN Vehicle.VehicleID IN (SELECT VIN FROM vRENTALInfo) THEN Daily ELSE 'Not Applicable' END as AvgDaily FROM Vehicle, Rate WHERE Vehicle.Type = Rate.Type AND Vehicle.Category = Rate.Category AND Vehicle.VehicleID = '${req.params.vin}' AND Vehicle.Description LIKE '%${req.params.descPart}%' GROUP BY Vehicle.VehicleID ORDER BY Vehicle.VehicleID ASC`;
    console.log(sql);
    con.query
    (sql, function(err, result) {
        if (err) res.send(err);
        res.send(result);
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
});