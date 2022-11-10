/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Function Data
 * @param {url} url specify the end point to be used to retrieve data from the api
 * Allow when called, as well as the relevant end point to mock the desired data
 */

function Data(url) {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = (value) => {
    if (value) {
      axios
        .get(value)
        .then((res) => {
          setUserData(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/404");
        });
    }
  };
  if (userData) {
    return userData?.data?.data;
  }
}

export default Data;
