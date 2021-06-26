import React, { useEffect, useState } from "react";
import { userAPI } from "../../Helper/API";
import TopNav from "../TopNav/TopNav";
import "antd/dist/antd.css";
import { Table } from "antd";
import { tableColumns } from "../../Helper/constant";
import style from "./style.module.css";

function Home() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  useEffect(() => {
    fetch(userAPI)
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Server responds with error");
        return response.json();
      })
      .then(
        (data) => {
          setData(data.results);
          localStorage.setItem("data", data.results);
        },
        (err) => setErr(err)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resultData = [];
  if (data && data.length) {
    for (let i = 0; i < data.length; i++) {
      resultData.push(data[i].user);
    }
  }

  return (
    <div className={style.home}>
      <TopNav />
      <div className={style.table}>
        <Table
          dataSource={resultData}
          columns={tableColumns}
          pagination={{ pageSize: 7 }}
        />
      </div>
    </div>
  );
}

export default Home;
