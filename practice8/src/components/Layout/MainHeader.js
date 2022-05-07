import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
const MainHeader = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Info</a>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
