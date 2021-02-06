import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "17",
      name: "Mohamed Hussein",
      image: "",
      placesCount: 3,
    }
  ]

  return (
    <UsersList items={USERS} />
  );
};

export default Users;
