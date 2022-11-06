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
  // const params = useParams();
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

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Data = (props) => {
//   const [data, setData] = useState();
//   const [userId, setUserId] = useState(props.id);
//   const [extension, setExtension] = useState(props.extens);
//   let getRender = "";

//   useEffect(() => {
//     setUserId(props.id);
//     setExtension(props.extens);
//   }, [props]);

//   useEffect(() => {
//     if (
//       (props.id && props.id === "18" && !props.extens) ||
//       (props.id && props.id === "12" && !props.extens)
//     ) {
//       getRender = `http://localhost:3000/user/${userId}`;
//     } else if (
//       (props.id && props.id === "18" && props.extens) ||
//       (props.id && props.id === "12" && props.extens)
//     ) {
//       if (
//         (props.extens && props.extens === "activity") ||
//         (props.extens && props.extens === "average-sessions") ||
//         (props.extens && props.extens === "performance")
//       ) {
//         getRender = `http://localhost:3000/user/${userId}/${extension}`;
//       } else {
//         console.log("erreur");
//       }
//     }
//     console.log(getRender);
//   }, [props]);

//   const fetchData = (value) => {
//     axios
//       .get(value)
//       .then((res) => {
//         setData(res);
//       })
//       .catch((err) => console.log(err));
//     console.log(value);
//   };
//   useEffect(() => {
//     fetchData(getRender);
//   }, [getRender]);

//   return <div>{console.log(data)}</div>;
// };

// export default Data;

// if (
//         (props.extens && props.extens === "activity") ||
//         (props.extens && props.extens === "average-sessions") ||
//         (props.extens && props.extens === "performance")
//       ) {
//         getRender = `http://localhost:3000/user/${userId}/${extension}`;
//       } else {
//         console.log("erreur");
//       }

// if (res.data.data.id && res.data.data.id !== undefined) {
//   // console.log(params.id);
//   // eslint-disable-next-line eqeqeq
//   if (params.id == res.data.data.id && res.data.data.id !== undefined) {
//     console.log("je marche");
//   } else {
//     console.log("je marche pas");
//   }
// }
