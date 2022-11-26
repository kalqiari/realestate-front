import React, {useEffect, useState} from "react";
import axios from "axios";
import Api from "../../utils/api";
import {useKeycloak} from "@react-keycloak/web";


const Dashboard = () => {


    const [rentedPropertiesState, setRentedProperties] = useState([]);
    const [customers, setCustomers] = useState([]);
    const {keycloak} = useKeycloak();

    useEffect(() => {
        getCustomers();
        Api.get("/api/v1/properties/findPropertyByPropertyStatus", {
            headers: keycloak?.token
                ? {authorization: `Bearer ${keycloak?.token}`}
                : {}
        })
            .then(response => {
                setRentedProperties(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [keycloak?.authenticated]);


    const getCustomers = async () => {
        Api.get("/api/v1/users/top10RecentCustomers", {
            headers: keycloak?.token
                ? {authorization: `Bearer ${keycloak?.token}`}
                : {}
        })
            .then(response => {
                setCustomers([...response.data]);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="content-wrapper">
            {/* {role == "ADMIN" ? */}

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="px-4 pt-4 d-flex justify-content-between">
                                    <h3 className="card-title">List of Last 10 Properties Rented</h3>
                                </div>

                                <div className="card-body">
                                    <table
                                        id="example3"
                                        className="table table-bordered table-hover"
                                    >
                                        <thead>
                                        <tr>
                                            <th>Property Id</th>
                                            <th>Street Address</th>
                                            <th>Bed No</th>
                                            <th>Bath Room No</th>
                                            <th>Rent Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {rentedPropertiesState.map((e) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.streetAddress}</td>
                                                <td>{e.bedrooms}</td>
                                                <td>{e.bathrooms}</td>
                                                <td>{e.price}</td>
                                            </tr>)
                                        )}
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
                                    <h3 className="card-title">List of Last 10 Most Recent Customers</h3>
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
                                            </tr>)
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Dashboard
