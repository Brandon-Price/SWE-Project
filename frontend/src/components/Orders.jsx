import {Container} from "../styles/ItemList.styles.jsx";
import Order from "./Order";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = (filters) => {
    
    const [orders, setOrders] = useState([]);
    const [filterSelect, setFilters] = useState([]);
    const searchFilter = useSelector(state => state.searchFilter.content)

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/orders");
                setOrders(res.data);
                console.log(res);
            } catch (err) {}
        };
        getOrders();
    }, []);

    useEffect(() => {
        setFilters(
            orders.filter((order) =>
            Object.entries(filters).every(([key, value]) => order[key] === value)
            )
        );
    }, [orders, filters]);




    return (
    <Container>
        {filters
            ? filterSelect.filter(filterSelect => filterSelect.title.toLowerCase()
            .includes(searchFilter.toLowerCase()))
            .map((order) => <Order order={order} key={order._id} />)
            : orders.filter(filterSelect => filterSelect.title.toLowerCase()
            .includes(searchFilter.toLowerCase()))
                .map((order) => <Order order={order} key={order._id} />)}
    </Container>
        
    );
};

export default Orders