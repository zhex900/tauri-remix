import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className="container">
      <h1>About page</h1>

      <Link to="/">Back to home</Link>
    </div>
  );
}
