import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
      });
  }, []);

  return (
    <div>
      {users.map((item, index) => (
        <div key={index}>{item.firstname}</div>
      ))}
    </div>
  );
};

export default UserPage;