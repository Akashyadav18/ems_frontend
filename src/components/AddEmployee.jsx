import { useEffect, useState } from "react"
import { saveEmpData, EmpData, updateEmpData } from "./services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    useEffect(() => {
        if(id) {
            EmpData(id).then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            })
        }
    },[id])

    const handleSaveOrUpdate = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const emp = { firstName, lastName, email }
            console.log(emp);
            if(id) {
                updateEmpData(id, emp).then((res) => {
                    console.log(res.data);
                    navigate("/employee")
                })
            }

            saveEmpData(emp).then((res) => {
                console.log(res.data);
                navigate("/employees")
            })
        }
    }

    const validateForm = () => {
        let valid = true;
        const errorCopy = {...errors};
        if (firstName.trim()) {
            errorCopy.firstName = ""
        }
        else {
            errorCopy.firstName = "FirstName required!"
            valid = false;
        }
        if (lastName.trim()) {
            errorCopy.lastName = ""
        }
        else {
            errorCopy.lastName = "LastName required!"
            valid = false;
        }
        if (email.trim()) {
            errorCopy.email = ""
        }
        else {
            errorCopy.email = "Email required!"
            valid = false;
        }

        setErrors(errorCopy);
        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className="my-4">Update Employee</h2>
        }
        else {
            return <h2 className="my-4">Add Employee</h2>
        }
    }
    function pageBtn(){
        if(id){
            return <p>Update Employee</p>
        }
        else {
            return <p>Add Employee</p>
        }
    }

    return (
        <div>
            <div className="card w-50 m-auto mt-lg-5">
                {pageTitle()}
                <div className="card-body">
                    <form>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">FirstName</label>
                            <div className="col-sm-10">
                                <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">LastName</label>
                            <div className="col-sm-10">
                                <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" onClick={handleSaveOrUpdate} className="btn btn-success text-center">{pageBtn()}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
