import Order from "./Order";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Orders = ({filters, sort}) => {

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

    useEffect(() => {
        const getOrders = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/orders/find/${user._id}`, {
                    headers: {
                            token: `Bearer ${user.accessToken}`
                    }
            });
          console.log('Data obtained successfully:', response.data);
          setOrders(response.data);
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

    useEffect(() => {
        if (sort === "Last 30") 
        {
          setFilters((prev) => [...prev].sort((a, b) => a.date));
        } else if (sort === "Last 90") 
        {
          setFilters((prev) => [...prev].sort((a, b) => b.price - a.price));
        } else if (sort === "User ID") {
          setFilters((prev) => [...prev].sort((a, b) => b.quantity - a.quantity));
        }
      }, [sort]);


    return (
    <Container>
      {filterSelect
        ? filterSelect.map((order) => <Order order={order} key={order._id} />)
        : orders.map((order) => <Order order={order} key={order._id} />)}
    </Container>
    );
};

export default Orders