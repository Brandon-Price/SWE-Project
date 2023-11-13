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
        const today = new Date();
        return list.filter((order) => {

          let postedDate = new Date(order.timestamp);
          let dateDifference = today - postedDate;
          return dateDifference <= days;
        });
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

        const dateSort = () => {
        if (sort === "Last 30") 
        {
          setFilters(dateSort(orders, 30));
        } else if (sort === "Last 90") 
        {
          setFilters(dateSort(orders, 90));
        } else if (sort === "Order ID") {
          setFilters((prev) => [...prev].sort((a, b) => a.order._id.localeCompare(b.order._id)));
        }
        else
        {
          setFilters(orders);
        }

      };
      }, [orders, sort]);


    return (
    <Container>
      {filterSelect
        ? filterSelect.map((order) => <Order order={order} key={order._id} />)
        : orders.map((order) => <Order order={order} key={order._id} />)}
    </Container>
    );
};

export default Orders