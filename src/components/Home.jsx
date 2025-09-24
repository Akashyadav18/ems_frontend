import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <div className="p-5 bg-light rounded shadow-sm">
                <h1 className="display-4 mb-3">Welcome to EMS</h1>
                <p className="lead mb-4">
                    Manage your employees effortlessly with our Employee Management System.
                </p>
                <Link to="/employees" className="btn btn-primary btn-lg">
                    Go to Employee List
                </Link>
            </div>
        </div>
    );
};

export default Home;
