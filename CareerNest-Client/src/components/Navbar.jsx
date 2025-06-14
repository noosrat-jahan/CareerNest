import React, { useContext, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "@/Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [person, setPerson] = useState("")
     useEffect(()=>{
      axios.get(`https://career-nest-server-one.vercel.app/users/${user?.email}`)
      .then(res=>{
          console.log(res.data)
          setPerson(res.data)
      })
     },[user?.email])

  const handleLogout = () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign out successful",
        showConfirmButton: false,
        timer: 3000,
      });
      navigate("/login");
    });
  };
  return (
    <div className="w-full z-10 px-4 mx-auto shadow-md sticky top-0 bg-background  flex items-center justify-between">
      <NavigationMenu
        viewport={false}
        className="max-w-full gap-5 justify-between"
      >
        {/* logo  */}
        <Link to="/" className="w-1/4">
          <img src={logo} alt="CareerNest" className="w-1/4" />
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Features</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="justify-between">
                <Link to="/profile">
                  Profile
                  <span className="badge px-2">{person.Role}</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link >
              </li>
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Button className="" asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
