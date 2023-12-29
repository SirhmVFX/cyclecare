const { default: Navigation } = require("../components/Navigation");

function UserLayout({ children }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}

export default UserLayout;
