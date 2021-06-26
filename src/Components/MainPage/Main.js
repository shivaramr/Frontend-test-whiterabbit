import React from "react";
import { MenuItems } from "./subComponents/MenuItems/MenuItems";
import Card from "./subComponents/Card/Card";
import style from "./style.module.css";

function Main() {
  const Menu = MenuItems.map((element, index) => (
    <Card icon={element.icon} title={element.title} link={element.link} />
  ));

  return <div className={style.body}>{Menu}</div>;
}

export default Main;
