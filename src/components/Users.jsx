import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete data in data server

        fetch(`https://coffee-server-gamma-three.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data delete", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });

              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      this is users {users.length}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button className="btn">Edit</button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
