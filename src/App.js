import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
    return (
        <div className="max-w-7xl mx-auto px-12">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="about" element={<About></About>} />
                <Route path="reviews" element={<Reviews></Reviews>} />
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment></Appointment>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route
                        index
                        element={<MyAppointment></MyAppointment>}
                    ></Route>
                    <Route
                        path="review"
                        element={<MyReview></MyReview>}
                    ></Route>
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <Users></Users>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="addDoctor"
                        element={
                            <RequireAdmin>
                                <AddDoctor></AddDoctor>
                            </RequireAdmin>
                        }
                    ></Route>
                    <Route
                        path="manageDoctor"
                        element={
                            <RequireAdmin>
                                <ManageDoctors></ManageDoctors>
                            </RequireAdmin>
                        }
                    ></Route>
                </Route>
                <Route path="/login" element={<Login></Login>} />
                <Route path="/signup" element={<SignUp></SignUp>} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
