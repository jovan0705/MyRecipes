import { Outlet } from "react-router-dom"
import CategoriesAdmin from "./CategoriesAdmin"

const Dashboard = () => {
    return (
        <>
        <div>
            <Outlet/>
        </div>
        </>
    )
}

export default Dashboard