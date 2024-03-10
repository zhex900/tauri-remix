import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <h1>Welcome to Tauri + Remix!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://remix.run/" target="_blank">
          <img
            src="/remix.svg"
            className="logo remix"
            alt="Remix logo"
            width={140}
          />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <Link to="/about">About</Link>
    </div>
  );
}
