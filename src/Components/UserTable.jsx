import React, { useEffect, useState } from "react";

function UserTable() {
  let [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);
  const deleteUser = (e) => {
    let currentDeleteId = parseInt(e.target.id);
    setUserData(userData.filter((user) => user.id !== currentDeleteId));
  };

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
        </tr>

        {userData.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.address.city}</td>
              <td>
                <button id={e.id} onClick={deleteUser}>
                  delete
                </button>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default UserTable;
