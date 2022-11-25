import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../utils/api";
import {Button} from "react-bootstrap";
import {useKeycloak} from "@react-keycloak/web";

const Users = () => {
    const [users, setUsers] = useState([]);
    const {keycloak} = useKeycloak();
    const fetchData = () => {
        Api.get("/api/v1/users", {  headers: keycloak?.token ? {authorization: `Bearer ${keycloak?.token}`} : {}})
            .then(response => {
                setUsers([...response.data]);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => { fetchData() }, [keycloak?.token]);

    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="px-4 pt-4 d-flex justify-content-between">
                                    <h3 className="card-title">Users</h3>
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
                                                <th>Phone Number</th>
                                                <th>Address</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user.username}>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phoneNumber}</td>
                                                    <td>{user.state}, {user.city}, {user.streetAddress}</td>
                                                    <td>
                                                        <Button className="px-3 mx-2" variant="outline-success">
                                                            Activate
                                                        </Button>
                                                        <Button variant="outline-danger">De-activate</Button>
                                                    </td>
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
    );
}

export default Users;