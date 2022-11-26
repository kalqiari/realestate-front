import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../utils/api";

const Dashboard = () => {
  const [rentedProperties, setRentedProperties] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getRentedProperties();
    getCustomers();
  }, []);

  const getRentedProperties = async () => {
    Api.get("/api/v1/properties/findPropertyByPropertyStatus")
      .then((response) => {
        setRentedProperties([...response.data]);
        console.log(rentedProperties);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCustomers = async () => {
    Api.get("/api/v1/users/top10RecentCustomers")
      .then((response) => {
        setCustomers([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="content-wrapper">
      {/* {role == "ADMIN" ? */}

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="px-4 pt-4 d-flex justify-content-between">
                  <h3 className="card-title">
                    List of Last 10 Properties Rented
                  </h3>
                </div>

                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Property Name</th>
                        <th>Property Type</th>
                        <th>Bed No</th>
                        <th>Bath Room No</th>
                        <th>Rent Amount</th>
                        <th>Security Deposit Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rentedProperties.map((property) => (
                        <tr key={property.id}>
                          <td>{property.propertyName}</td>
                          <td>{property.propertyType}</td>
                          <td>{property.noOfBedRoom}</td>
                          <td>{property.noOfBathRoom}</td>
                          <td>{property.rentAmount}</td>
                          <td>{property.securityDepositAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="px-4 pt-4 d-flex justify-content-between">
                  <h3 className="card-title">
                    List of Last 10 Most Recent Customers
                  </h3>
                </div>

                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((item) => (
                        <tr key={item.email}>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
