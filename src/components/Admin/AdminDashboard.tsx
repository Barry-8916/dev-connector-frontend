import React, { useEffect, useState } from "react";
import api from "../../services/api";

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/admin/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      await api.delete(`/admin/users/${userId}`);
      setUsers(users.filter((user: any) => user.id !== userId));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
