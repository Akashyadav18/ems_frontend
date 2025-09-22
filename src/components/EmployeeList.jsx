import { useEffect, useState } from "react"
import { deleteEmpData, getEmpData } from "./services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmpData().then((data) => setEmployees(data));
    })

    const handleAddEmp = () => {
        navigate('/addEmployee')
    }

    const handleUpdate = (id) => {
        navigate(`/editEmployee/${id}`)
    }

    const handleDelete = (id) => {
        deleteEmpData(id).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div className="container text-center">
            <h2>List of Employees</h2>
            <button className="btn btn-primary my-4" onClick={handleAddEmp}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button onClick={() => handleUpdate(emp.id)} className="btn btn-warning p-2 mx-5">Update</button>
                                    <button onClick={() => handleDelete(emp.id)} className="btn btn-danger p-2">Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
