import { User } from '../../data/users';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-lg">Email: {user.email}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
