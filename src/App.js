import React, { useState, useTransition } from 'react';
import axios from "axios";
import { useEffect } from "react";


function App() {
  const [menus, setMenus] = useState([]);

  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((err) => console.log(err));

  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log("data", menus)
  return (
    <>

      {menus.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img src={item.imageUrl} />

        </div>
      ))
      }
    </>
  );


  // const [users, setUsers] = useState([]);

  // const getUserData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));

  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // console.log("data", users)
  // return (
  //   <>
  //     <h1>Hello, World</h1>

  //     {users.map((item) => (
  //       <div>
  //         <h1>{item.name}</h1>
  //         <p>{item.phone}</p>
  //       </div>
  //     ))
  //     }
  //   </>
  // );

}



export default App;