import Customers from "./Customers";
function ItemPageCustomer(props) {
    let { user } = props;
    return (
        <Customers user={user}/>
        )
}

export default ItemPageCustomer;