const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = user?.userFound?.isAdmin ? true : false;

  console.log(!isAdmin);

  if (!isAdmin) return <h1>Acess denied , Admin Only</h1>;

  return <div>AdminRoute</div>;
};

export default AdminRoute;
