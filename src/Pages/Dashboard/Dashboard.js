import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input
                id=" dashboard-sidebar"
                type="checkbox"
                class="drawer-toggle"
            />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className="text-2xl font-bold text-purple-500">
                    Welcome to my Dashboard
                </h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for=" dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">My Appointments</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">My Reviews</Link>
                    </li>
                    {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addDoctor">
                                    Add a Doctor
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageDoctor">
                                    Manage Doctors
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
