import { useAppDispatch } from "../../store/hook";
import { printMessage } from "../../slice/demoslice";
import { useEffect } from "react";
const Dashboard = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(printMessage());
    }, []);

    return <h1>Dashboard</h1>;
};

export default Dashboard;
