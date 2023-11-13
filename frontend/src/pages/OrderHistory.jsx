import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer, AdminBar, AdminButton} from "../styles/ItemList.styles";
import { useState } from "react";
import AddForm from "../components/AddForm";
import { useSelector } from "react-redux";

const OrderHistory = ({user}) => {

    const [filters] = useState({});
    const [sort, setSort] = useState("Last 30 Days");
    const [isAdminBarVisible, setAdminBarVisibility] = useState(false);
    user = useSelector((state) => state.user.currentUser);


    const toggleAdminBar = () => {
        setAdminBarVisibility(!isAdminBarVisible);
    };

    return(
        <Container>
            <Navbar user={user}/>
            <SubHeader/>
            <FilterContainer>
                <Filter>
                    
                </Filter>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
                        <Option value="Last 30">Last 30 Days</Option>
                        <Option value="Last 90">Last 90 Days</Option>
                        <Option value="Order ID">User ID</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {user != null && user.isAdmin &&
                <div>
                    <AdminButton type="button" onClick={toggleAdminBar}>Admin Options</AdminButton>
                </div>}
            {isAdminBarVisible && 
            <AdminBar onClose={toggleAdminBar}>
                <AddForm></AddForm>
            </AdminBar>}
            <Orders filters ={filters} sort={sort}/>
            <EmptyContainer/>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default OrderHistory;