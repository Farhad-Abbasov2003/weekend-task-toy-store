import React from "react";
import "../Style.scss";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-down">
        <div className="nav-up items-center py-2 flex justify-around text-white text-sm">
          <div className="left">
            Call Us: +1 213 974-5898 Email:{" "}
            <span className="underline cursor-pointer">
              toystore@template.com
            </span>
          </div>

          <div className="right flex gap-4">
            <BsTwitter className="cursor-pointer" />
            <BsFacebook className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
            <BsPinterest className="cursor-pointer" />
            <BsYoutube className="cursor-pointer" />
          </div>
        </div>

        <div className="nav-down py-6 flex justify-around">
          <div className="left items-center flex">
            <div className="logo cursor-pointer text-2xl"><Link to={'/'}>ToyStore</Link></div>
            <ul className="flex text-sm ml-12 gap-10">
              <li className="hover:underline">
                <Link to={'/catalog'}>Catolog</Link>
              </li>
              <li className="hover:underline">
                <Link>Delivery</Link>
              </li>
              <li className="hover:underline">
                <Link>About</Link>
              </li>
              <li className="hover:underline">
                <Link>Contacs</Link>
              </li>
            </ul>
          </div>

          <div className="right gap-4 flex items-center">
            <span className="cursor-pointer">Cart</span>
            <HiOutlineShoppingCart className="cursor-pointer" />
            <span className="span-2 cursor-pointer">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
