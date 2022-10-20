/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = (props) => {
  const [data, setData] = useState();
  const [userId, setUserId] = useState(props.id);
  const [extension, setExtension] = useState(props.extens);
  let getRender = "";

  useEffect(() => {
    setUserId(props.id);
    setExtension(props.extens);
  }, [props]);

  useEffect(() => {
    if (props.extens) {
      getRender = `http://localhost:3000/user/${userId}/${extension}`;
    } else {
      getRender = `http://localhost:3000/user/${userId}`;
    }
  }, [props]);

  const fetchData = (value) => {
    axios
      .get(value)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
    console.log(value);
  };
  useEffect(() => {
    fetchData(getRender);
  }, [getRender]);

  return <div> {console.log(data)}</div>;
};

export default Data;
