import NavLink from "./nav-link/NavLink";

const Nav = () => {
  return (
    <nav className="flex gap-6">
      <span className="nav-link">
        <NavLink href={"/"}>Home</NavLink>
      </span>
      <span className="nav-link">
        <NavLink href={"/blogs"}>Blogs</NavLink>
      </span>
    </nav>
  );
};

export default Nav;
