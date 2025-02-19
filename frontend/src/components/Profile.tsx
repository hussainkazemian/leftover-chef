import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/profile', { headers: { Authorization: `Bearer ${token}` } });
        setProfile(response.data);
      } catch (error) {
        alert('Failed to fetch profile: ' + error.response.data.error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Family Name: {profile.familyName}</p>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Profession: {profile.profession}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;