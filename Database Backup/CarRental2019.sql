CREATE TABLE CUSTOMER(
	CustID int PRIMARY KEY not null,
	Name varchar(30) not null,
	Phone varchar(14)
);
.mode csv
.import CUSTOMER.csv CUSTOMER
delete from CUSTOMER where Name = 'Name';


CREATE TABLE VEHICLE(
	VehicleID char(17) primary key not null,
	Description varchar(50) not null,
	Year int not null,
	Type int not null,
	Category int not null,
	Foreign Key (Type) REFERENCES RATE(Type) on delete cascade,
	Foreign Key (Category) REFERENCES RATE(Category) on delete cascade
);
.mode csv
.import VEHICLE.csv VEHICLE
delete from VEHICLE where Description = 'Description';

CREATE TABLE RATE(
	Type int not null,
	Category int not null,
	Weekly decimal(10,2) not null,
	Daily decimal(10,2) not null,
	primary key(Type,Category)
 );
.mode csv
.import RATE.csv RATE
delete from RATE where Weekly = 'Weekly';

-- Check on delete cascade
CREATE TABLE RENTAL(
	CustID int not null,
	VehicleID char(14) not null,
	StartDate date not null,
	OrderDate date not null,
	RentalType int not null,
	Qty int not null,
	ReturnDate date not null,
	TotalAmount int not null,
	PaymentDate date,
	primary key(CustID,VehicleID,StartDate),
	Foreign Key (CustID) REFERENCES CUSTOMER(CustID) on delete cascade,
	Foreign Key (VehicleID) REFERENCES VEHICLE(VehicleID) on delete cascade
);
.mode csv
.import RENTAL.csv RENTAL
delete from RENTAL where Qty = 'Qty';

.mode column
.header on
