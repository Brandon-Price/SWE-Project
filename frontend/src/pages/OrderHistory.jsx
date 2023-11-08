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
    const [setSort] = useState("Price Ascending");
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
                        <Option value="ascending">Price Ascending</Option>
                        <Option value="descending">Price Descending</Option>
                        <Option value="quantity">Quantity Remaining</Option>
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
            <Orders filters={filters}/>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default OrderHistory;