import { NavLink } from "react-router-dom";
function ItemLogOut(props) {
    let { onClickLogOut } = props;
    return (
        <li><NavLink to="/logout" onClick={onClickLogOut}>Đăng xuất</NavLink></li>
    )
}

export default ItemLogOut;