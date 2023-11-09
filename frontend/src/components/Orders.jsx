import {Container} from "../styles/ItemList.styles.jsx";
import Order from "./Order";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = (filters, sort) => {

    function dateSort(list, days)
    {
        let today = new Date();
        let sorted = [];
        for(let x of list)
        {
            let postedDate = new Date(x.timestamp);
            let dateDifference = today - postedDate;
            let totalDifference = dateDifference/ (86400000);
            if(totalDifference <= days)
            {
                sorted.push(x);
            }

        }

        return sorted;
    }
    const user = useSelector((state) => state.user.currentUser);
    const [orders, setOrders] = useState([]);
    const [filterSelect, setFilters] = useState([]);
    const searchFilter = useSelector(state => state.searchFilter.content)
    /*
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/orders/find/${user._id}`, {
                    userId: user._id
                }, {
                    headers: {
                    token: `Bearer ${user.accessToken}`
                }})
                setOrders(res.data);
                console.log(res);
            } catch(err) {}
        };
        getOrders();
    }, []);
    */

    useEffect(() => {
        const getOrders = async () => {
         axios.get(`http://localhost:5000/api/orders/find/${user._id}`, {
             userId: user._id,
            }, {
            headers: {
            token: `Bearer ${user.accessToken}`
        }
        })
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
            console.error(error)
        });
    };
    getOrders();
    }, []);
    


    useEffect(() => {
        if (sort === "Last 30") 
        {
          setFilters((prev) => [...prev].sort((a, b) => a.timestamp));
        } else if (sort === "Last 90") 
        {
          setFilters((prev) => [...prev].sort((a, b) => b.price - a.price));
        } else if (sort === "User ID") {
          setFilters((prev) => [...prev].sort((a, b) => b.quantity - a.quantity));
        }
      }, [sort]);


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