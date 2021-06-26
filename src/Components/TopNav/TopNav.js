import React, { useContext } from "react";
import { mrContext } from "../../Helper/Context";
import style from "./style.module.css";

function TopNav() {
  const { loggedIn, setLoggedIn } = useContext(mrContext);

  const logOut = () => {
    setLoggedIn(false);
  };
  return (
    <div className={style.top}>
      {loggedIn && <button onClick={logOut} className={style.button}>
        Log Out
      </button>}
    </div>
  );
}

export default TopNav;
