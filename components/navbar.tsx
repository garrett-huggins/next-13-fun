import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-700">
      <nav className="container py-4 mx-auto">
        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/docs">Docs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  );
};
