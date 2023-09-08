let initial_customer_data = [
    {
      "CustID": 201,
      "Name": "A. Parks",
      "Phone": "(214) 555-0127"
    },
    {
      "CustID": 202,
      "Name": "S. Patel",
      "Phone": "(849) 811-6298"
    },
    {
      "CustID": 203,
      "Name": "A. Hernandez",
      "Phone": "(355) 572-5385"
    },
    {
      "CustID": 204,
      "Name": "G. Carver",
      "Phone": "(753) 763-8656"
    },
    {
      "CustID": 205,
      "Name": "Sh. Byers",
      "Phone": "(912) 925-5332"
    },
    {
      "CustID": 206,
      "Name": "L. Lutz",
      "Phone": "(931) 966-1775"
    },
    {
      "CustID": 207,
      "Name": "L. Bernal",
      "Phone": "(884) 727-0591"
    },
    {
      "CustID": 208,
      "Name": "I. Whyte",
      "Phone": "(811) 979-7345"
    },
    {
      "CustID": 209,
      "Name": "L. Lott",
      "Phone": "(954) 706-2219"
    },
    {
      "CustID": 210,
      "Name": "G. Clarkson",
      "Phone": "(309) 625-1838"
    },
    {
      "CustID": 211,
      "Name": "Sh. Dunlap",
      "Phone": "(604) 581-6642"
    },
    {
      "CustID": 212,
      "Name": "H. Gallegos",
      "Phone": "(961) 265-8638"
    },
    {
      "CustID": 213,
      "Name": "L. Perkins",
      "Phone": "(317) 996-3104"
    },
    {
      "CustID": 214,
      "Name": "M. Beach",
      "Phone": "(481) 422-0282"
    },
    {
      "CustID": 215,
      "Name": "C. Pearce",
      "Phone": "(599) 881-5189"
    },
    {
      "CustID": 216,
      "Name": "A. Hess",
      "Phone": "(516) 570-6411"
    },
    {
      "CustID": 217,
      "Name": "M. Lee",
      "Phone": "(369) 898-6162"
    },
    {
      "CustID": 218,
      "Name": "R. Booker",
      "Phone": "(730) 784-6303"
    },
    {
      "CustID": 219,
      "Name": "A. Crowther",
      "Phone": "(325) 783-4081"
    },
    {
      "CustID": 220,
      "Name": "H. Mahoney",
      "Phone": "(212) 262-8829"
    },
    {
      "CustID": 221,
      "Name": "J. Brown",
      "Phone": "(644) 756-0110"
    },
    {
      "CustID": 222,
      "Name": "H. Stokes",
      "Phone": "(931) 969-7317"
    },
    {
      "CustID": 223,
      "Name": "J. Reeves",
      "Phone": "(940) 981-5113"
    },
    {
      "CustID": 224,
      "Name": "A. Mcghee",
      "Phone": "(838) 610-5802"
    },
    {
      "CustID": 225,
      "Name": "L. Mullen",
      "Phone": "(798) 331-7777"
    },
    {
      "CustID": 226,
      "Name": "R. Armstrong",
      "Phone": "(325) 783-4081"
    },
    {
      "CustID": 227,
      "Name": "J. Greenaway",
      "Phone": "(212) 262-8829"
    },
    {
      "CustID": 228,
      "Name": "K. Kaiser Acosta",
      "Phone": "(228) 576-1557"
    },
    {
      "CustID": 229,
      "Name": "D. Kirkpatrick",
      "Phone": "(773) 696-8009"
    },
    {
      "CustID": 230,
      "Name": "A. Odonnell",
      "Phone": "(439) 536-8929"
    },
    {
      "CustID": 231,
      "Name": "K. Kay",
      "Phone": "(368) 336-5403"
    }
  ];

let initial_rate_data = [
    {
      "Type": 1,
      "Category": 0,
      "Weekly": 480,
      "Daily": 80
    },
    {
      "Type": 1,
      "Category": 1,
      "Weekly": 600,
      "Daily": 100
    },
    {
      "Type": 2,
      "Category": 0,
      "Weekly": 530,
      "Daily": 90
    },
    {
      "Type": 2,
      "Category": 1,
      "Weekly": 660,
      "Daily": 110
    },
    {
      "Type": 3,
      "Category": 0,
      "Weekly": 600,
      "Daily": 100
    },
    {
      "Type": 3,
      "Category": 1,
      "Weekly": 710,
      "Daily": 120
    },
    {
      "Type": 4,
      "Category": 0,
      "Weekly": 685,
      "Daily": 115
    },
    {
      "Type": 4,
      "Category": 1,
      "Weekly": 800,
      "Daily": 135
    },
    {
      "Type": 5,
      "Category": 0,
      "Weekly": 780,
      "Daily": 130
    },
    {
      "Type": 6,
      "Category": 0,
      "Weekly": 685,
      "Daily": 115
    }
    ];

let initial_vehicle_data = [
    {
      "VehicleID": "19VDE1F3XEE414842",
      "Description": "Acura ILX",
      "Year": 2014,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "1FDEE3FL6EDA29122",
      "Description": "Ford E 350",
      "Year": 2014,
      "Type": 6,
      "Category": 0
    },
    {
      "VehicleID": "1FDRF3B61FEA87469",
      "Description": "Ford Super Duty Pickup",
      "Year": 2015,
      "Type": 5,
      "Category": 0
    },
    {
      "VehicleID": "1FTNF1CF2EKE54305",
      "Description": "Ford F Series Pickup",
      "Year": 2014,
      "Type": 5,
      "Category": 0
    },
    {
      "VehicleID": "1G1JD5SB3E4240835",
      "Description": "Chevrolet Optra",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "1GB3KZCG1EF117132",
      "Description": "Chevrolet Silverado",
      "Year": 2014,
      "Type": 5,
      "Category": 0
    },
    {
      "VehicleID": "1HGCR2E3XEA305302",
      "Description": "Honda Accord",
      "Year": 2014,
      "Type": 2,
      "Category": 0
    },
    {
      "VehicleID": "1N4AB7AP2EN855026",
      "Description": "Nissan Sentra",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "1N6BA0EJ9EN516565",
      "Description": "Nissan Titan",
      "Year": 2014,
      "Type": 5,
      "Category": 0
    },
    {
      "VehicleID": "1N6BF0KM0EN101134",
      "Description": "Nissan NV",
      "Year": 2014,
      "Type": 6,
      "Category": 0
    },
    {
      "VehicleID": "1VWCH7A3XEC037969",
      "Description": "Volkswagen Passat",
      "Year": 2014,
      "Type": 2,
      "Category": 1
    },
    {
      "VehicleID": "2HGFB2F94FH501940",
      "Description": "Honda Civic",
      "Year": 2015,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "2T3DFREV0FW317743",
      "Description": "Toyota RAV4",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "3MZBM1L74EM109736",
      "Description": "Mazda 3",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "3N1CE2CP0FL409472",
      "Description": "Nissan Versa Note",
      "Year": 2015,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "3N1CN7APXEK444458",
      "Description": "Nissan Versa",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "3VW2A7AU1FM012211",
      "Description": "Volkswagen Golf",
      "Year": 2015,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "4S4BRCFC1E3203823",
      "Description": "Subaru Outback",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "4S4BSBF39F3261064",
      "Description": "Subaru Outback",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "4S4BSELC0F3325370",
      "Description": "Subaru Outback",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "5J6RM4H90FL028629",
      "Description": "Honda CR-V",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "5N1AL0MM8EL549388",
      "Description": "Infiniti JX35",
      "Year": 2014,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "5NPDH4AE2FH565275",
      "Description": "Hyundai Elantra",
      "Year": 2015,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "5TDBKRFH4ES26D590",
      "Description": "Toyota Highlander",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "5XYKT4A75FG610224",
      "Description": "Kia Sorento",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "5XYKU4A7XFG622415",
      "Description": "Kia Sorento",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "5XYKUDA77EG449709",
      "Description": "Kia Sorento",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "JF1GPAA61F8314971",
      "Description": "Subaru Impreza",
      "Year": 2015,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "JH4KC1F50EC800004",
      "Description": "Acura RLX",
      "Year": 2014,
      "Type": 3,
      "Category": 1
    },
    {
      "VehicleID": "JH4KC1F56EC000095",
      "Description": "Acura RLX",
      "Year": 2014,
      "Type": 3,
      "Category": 1
    },
    {
      "VehicleID": "JM1BM1V35E1210570",
      "Description": "Mazda 3",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "JM3KE4DY4F0441471",
      "Description": "Mazda CX5",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "JM3TB3DV0E0015742",
      "Description": "Mazda CX9",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "JN8AS5MV0FW760408",
      "Description": "Nissan Rogue Select",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "JTEZUEJR7E5081641",
      "Description": "Toyota 4Runner",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "JTHBW1GG1F120DU53",
      "Description": "Lexus ES 300h",
      "Year": 2015,
      "Type": 2,
      "Category": 1
    },
    {
      "VehicleID": "JTHCE1BL3F151DE04",
      "Description": "Lexus GS 350",
      "Year": 2015,
      "Type": 2,
      "Category": 1
    },
    {
      "VehicleID": "JTHDL5EF9F5007221",
      "Description": "Lexus LS 460",
      "Year": 2015,
      "Type": 3,
      "Category": 1
    },
    {
      "VehicleID": "JTHFF2C26F135BX45",
      "Description": "Lexus IS 250C",
      "Year": 2015,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "JTJHY7AX2F120EA11",
      "Description": "Lexus LX 570",
      "Year": 2015,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "JTJJM7FX2E152CD75",
      "Description": "Lexus GX460",
      "Year": 2014,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "JTMBFREV1FJ019885",
      "Description": "Toyota RAV4",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "KM8SN4HF0FU107203",
      "Description": "Hyundai Santa Fe",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "KMHJT3AF1FU028211",
      "Description": "Hyundai Tucson",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "KMHTC6AD8EU998631",
      "Description": "Hyundai Veloster",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "KNAFZ4A86E5195865",
      "Description": "KIA Sportage",
      "Year": 2014,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "KNAFZ4A86E5195895",
      "Description": "KIA Forte",
      "Year": 2014,
      "Type": 1,
      "Category": 0
    },
    {
      "VehicleID": "KNAGN4AD2F5084324",
      "Description": "Kia Optima Hybrid",
      "Year": 2015,
      "Type": 2,
      "Category": 0
    },
    {
      "VehicleID": "KNALN4D75E5A57351",
      "Description": "Kia Cadenza",
      "Year": 2014,
      "Type": 3,
      "Category": 0
    },
    {
      "VehicleID": "KNALU4D42F6025717",
      "Description": "Kia K900",
      "Year": 2015,
      "Type": 3,
      "Category": 0
    },
    {
      "VehicleID": "KNDPCCA65F7791085",
      "Description": "KIA Sportage",
      "Year": 2015,
      "Type": 4,
      "Category": 0
    },
    {
      "VehicleID": "WA1LGAFE8ED001506",
      "Description": "Audi Q7",
      "Year": 2014,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "WAU32AFD8FN005740",
      "Description": "Audi A8",
      "Year": 2015,
      "Type": 3,
      "Category": 1
    },
    {
      "VehicleID": "WAUTFAFH0E0010613",
      "Description": "Audi A5",
      "Year": 2014,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "WBA3A9G51ENN73366",
      "Description": "BMW 3 Series",
      "Year": 2014,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "WBA3B9C59EP458859",
      "Description": "BMW 3 Series",
      "Year": 2014,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "WBAVL1C57EVR93286",
      "Description": "BMW X1",
      "Year": 2014,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "WDCGG0EB0EG188709",
      "Description": "Mercedes_Benz GLK",
      "Year": 2014,
      "Type": 1,
      "Category": 1
    },
    {
      "VehicleID": "YV440MDD6F2617077",
      "Description": "Volvo XC60",
      "Year": 2015,
      "Type": 4,
      "Category": 1
    },
    {
      "VehicleID": "YV4940NB5F1191453",
      "Description": "Volvo XC70",
      "Year": 2015,
      "Type": 4,
      "Category": 1
    }
  ];

let initial_rental_data = [
    {
      "CustID": 203,
      "VehicleID": "JM3KE4DY4F0441471",
      "StartDate": "2019-09-09",
      "OrderDate": "2019-05-22",
      "RentalType": 1,
      "Qty": 4,
      "ReturnDate": "2019-09-13",
      "TotalAmount": 460,
      "PaymentDate": "2019-09-09"
    },
    {
      "CustID": 210,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 210,
      "VehicleID": "JTHFF2C26F135BX45",
      "StartDate": "2019-05-01",
      "OrderDate": "2019-04-15",
      "RentalType": 7,
      "Qty": 1,
      "ReturnDate": "2019-05-08",
      "TotalAmount": 600,
      "PaymentDate": "2019-05-08"
    },
    {
      "CustID": 210,
      "VehicleID": "JTHFF2C26F135BX45",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 210,
      "VehicleID": "WAUTFAFH0E0010613",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 210,
      "VehicleID": "WBA3A9G51ENN73366",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 210,
      "VehicleID": "WBA3B9C59EP458859",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 210,
      "VehicleID": "WDCGG0EB0EG188709",
      "StartDate": "2019-11-01",
      "OrderDate": "2019-10-28",
      "RentalType": 7,
      "Qty": 2,
      "ReturnDate": "2019-11-15",
      "TotalAmount": 1200,
      "PaymentDate": null
    },
    {
      "CustID": 212,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2019-06-10",
      "OrderDate": "2019-04-15",
      "RentalType": 7,
      "Qty": 3,
      "ReturnDate": "2019-07-01",
      "TotalAmount": 1800,
      "PaymentDate": "2019-06-10"
    },
    {
      "CustID": 216,
      "VehicleID": "1N6BF0KM0EN101134",
      "StartDate": "2019-08-02",
      "OrderDate": "2019-03-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2019-08-30",
      "TotalAmount": 2740,
      "PaymentDate": "2019-08-02"
    },
    {
      "CustID": 216,
      "VehicleID": "1N6BF0KM0EN101134",
      "StartDate": "2019-08-30",
      "OrderDate": "2019-03-15",
      "RentalType": 1,
      "Qty": 2,
      "ReturnDate": "2019-09-01",
      "TotalAmount": 230,
      "PaymentDate": "2019-08-02"
    },
    {
      "CustID": 221,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2019-07-01",
      "OrderDate": "2019-06-12",
      "RentalType": 7,
      "Qty": 1,
      "ReturnDate": "2019-07-08",
      "TotalAmount": 600,
      "PaymentDate": "2019-07-01"
    },
    {
      "CustID": 221,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2019-07-09",
      "OrderDate": "2019-06-12",
      "RentalType": 1,
      "Qty": 2,
      "ReturnDate": "2019-07-11",
      "TotalAmount": 200,
      "PaymentDate": "2019-07-01"
    },
    {
      "CustID": 221,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 221,
      "VehicleID": "JTHFF2C26F135BX45",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 221,
      "VehicleID": "WAUTFAFH0E0010613",
      "StartDate": "2019-07-01",
      "OrderDate": "2019-06-12",
      "RentalType": 7,
      "Qty": 1,
      "ReturnDate": "2019-07-08",
      "TotalAmount": 600,
      "PaymentDate": "2019-07-01"
    },
    {
      "CustID": 221,
      "VehicleID": "WAUTFAFH0E0010613",
      "StartDate": "2019-07-09",
      "OrderDate": "2019-06-12",
      "RentalType": 1,
      "Qty": 2,
      "ReturnDate": "2019-07-11",
      "TotalAmount": 200,
      "PaymentDate": "2019-07-01"
    },
    {
      "CustID": 221,
      "VehicleID": "WAUTFAFH0E0010613",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 221,
      "VehicleID": "WBA3A9G51ENN73366",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 221,
      "VehicleID": "WBA3B9C59EP458859",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 221,
      "VehicleID": "WDCGG0EB0EG188709",
      "StartDate": "2020-01-01",
      "OrderDate": "2019-12-15",
      "RentalType": 7,
      "Qty": 4,
      "ReturnDate": "2020-01-29",
      "TotalAmount": 2400,
      "PaymentDate": null
    },
    {
      "CustID": 229,
      "VehicleID": "19VDE1F3XEE414842",
      "StartDate": "2019-05-06",
      "OrderDate": "2019-04-12",
      "RentalType": 1,
      "Qty": 4,
      "ReturnDate": "2019-05-10",
      "TotalAmount": 400,
      "PaymentDate": "2019-05-06"
    },
    {
      "CustID": 229,
      "VehicleID": "WAUTFAFH0E0010613",
      "StartDate": "2019-05-06",
      "OrderDate": "2019-04-12",
      "RentalType": 1,
      "Qty": 4,
      "ReturnDate": "2019-05-10",
      "TotalAmount": 400,
      "PaymentDate": "2019-05-06"
    }
  ];

module.exports = {
    initial_customer_data,
    initial_rate_data,
    initial_vehicle_data,
    initial_rental_data
}