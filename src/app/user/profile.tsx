import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import UserProfile from '../../components/user/UserProfile';
import { User } from '../../data/users';

interface UserProfilePageProps {
  user: User;
}

const UserProfilePage: NextPage<UserProfilePageProps> = ({ user }) => {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(`http://localhost:3000/api/users/${context.params?.id}`);
  return {
    props: {
      user: data,
    },
  };
};

export default UserProfilePage;
