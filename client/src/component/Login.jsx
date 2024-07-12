import React, { useEffect } from "react";
import { useApi } from "../utils/apiContext";


const Login = () => {
  const { loading, data, error, makeApiCall } = useApi();
  const postData = {
    "email": "anshulpant14@gmail.com",
    "password": "Anshul1234",
  }
  // const postData = {
  //     "email":"10maitrirautela@gmail.com"
  // }
  // const postData = {
  //   "inviteCode":"SRAD8VUE36",
  //   "name":"Zeeshan",
  //    "email":"giint240008@gmail.com",
  //    "collegeName":"GBPUAt Pantnagar",
  //    "password":"Anshul1234",
  //    "phoneNumber":"7351549320",
  //    "category":"F",
  //    "designation":"Teacher"
  //   }
  // const postData = {
  //   "currentPassword":"Akshay@1234",
  //   "newPassword":"Anshul1234"
  //   }
  useEffect(() => {
    makeApiCall(
      "user/login",
      "POST",
      postData,
      {
        "Content-Type": "application/json",
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYW5zaHVscGFudDE0QGdtYWlsLmNvbSJ9LCJpYXQiOjE3MjA3MjAzODh9.VUVs1W-X1TEM6GQ2PzQ4Usjlc_CQgHHHvg5ciIN351g"
      }
    );
    // makeApiCall(
    //   "user/getuser",
    //   "GET",
    //   postData,
    //   { "Content-Type": "application/json",
    //     "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYW5zaHVscGFudDE0QGdtYWlsLmNvbSJ9LCJpYXQiOjE3MjA3MjAzODh9.VUVs1W-X1TEM6GQ2PzQ4Usjlc_CQgHHHvg5ciIN351g"
    //    }
    // );
    // makeApiCall(
    //   "user/login",
    //   "POST",
    //   postData,
    //   { "Content-Type": "application/json" }
    // );
  }, [makeApiCall]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      Login
      <h1>Data:</h1>
      <p>{data ? JSON.stringify(data) : 'No data'}</p>
    </div>
  );
};

export default Login;
