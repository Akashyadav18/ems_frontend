import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <>
      <Router>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">

            <Link className="navbar-brand" to="/">
              EMS
            </Link>
            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links (Centered) */}
            <div className="collapse navbar-collapse justify-content-center item-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employees">
                    Employees
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Push content down so it’s not hidden behind fixed navbar */}
        <div className="container mt-5 pt-4 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/addEmployee" element={<AddEmployee/>}/>
            <Route path="/editEmployee/:id" element={<AddEmployee/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
