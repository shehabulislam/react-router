import { Routes, Route, Outlet, Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ textDecoration: match ? "underline" : "none", color: match ? "red" : "black", margin: "10px 10px" }} to={to} {...props}>
      {children}
    </Link>
  );
}
export default CustomLink;
