import React from "react";
import style from "./style.module.css";

function Card(props) {
  const { icon, title, link } = props;
  return (
    <div
      className={style.card}
      onClick={() => {
        window.location.pathname = link;
      }}
    >
      <div className={style.body}>
        {icon}
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
