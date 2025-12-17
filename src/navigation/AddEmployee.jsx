import React from "react";
import "../pages/employees.jsx"
import axios from "axios";

import { useState, useEffect } from "react";

function AddEmployee() {

    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        Getemployees();
    }, []);

    const Getemployees = async () => {
        try {
            const response = await axios.post('https://hrmsbackend-ej88.onrender.com/api/login',
                {email, password},
                {headers: {'Content-Type': 'application/json',},}
            );
            setEmployees(response.data);
            console.log("hi");

        } catch (error) {
            setError(error);
        }
    };
    return (
        <div>
            <button onClick={Getemployees}>Get employees</button>
        </div>
    )
}

export default AddEmployee