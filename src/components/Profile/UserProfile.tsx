import React, { useEffect, useState } from "react";
import api from "../../services/api";

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/auth/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Your Profile</h2>
      {profile && (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
