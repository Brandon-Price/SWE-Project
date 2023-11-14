import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import AdminOrders from "../components/AdminOrders";
import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer, AdminBar, AdminButton} from "../styles/ItemList.styles";
import { useState } from "react";
import AddForm from "../components/AddForm";
import { useSelector } from "react-redux";

const AdminOrderHistory = ({user}) => {

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
                        <Option value="Oldest">Oldest Descending</Option>
                        <Option value="Newest">Newest Ascending</Option>
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
            <AdminOrders filters ={filters} sort={sort}/>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default AdminOrderHistory;