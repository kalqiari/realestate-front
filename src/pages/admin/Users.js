import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../utils/api";

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        Api.get("/api/v1/users")
            .then(response => {
                setUsers([...response.data]);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => { fetchData() }, []);

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
                                                <th>Username</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone number</th>
                                                <th>Address</th>
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