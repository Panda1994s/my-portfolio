import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-purple-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact="true"
            className={(navData) =>
              navData.isActive
                ? "text-white text-4xl cursive tracking-widest"
                : "inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            }
          >
            Vahid Jafari
          </NavLink>
          <NavLink
            to="/post"
            className={(navData) =>
              navData.isActive
                ? "text-purple-100 bg-purple-700 rounded"
                : "inline-flex items-center py-3 px-3 my-6 font-bold rounded text-purple-200 hover:text-green-800"
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={(navData) =>
              navData.isActive
                ? "text-purple-100 bg-purple-700 rounded"
                : "inline-flex items-center py-3 px-3 my-6 font-bold rounded text-purple-200 hover:text-green-800"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "text-purple-100 bg-purple-700 rounded"
                : "inline-flex items-center py-3 px-3 my-6 font-bold rounded text-purple-200 hover:text-green-800"
            }
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
