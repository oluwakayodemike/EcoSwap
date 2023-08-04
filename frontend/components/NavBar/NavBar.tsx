"use client";

import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button, { IconButton } from "@components/Button";

import "./NavBar.scss";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { iconAnim } from "./Animation";

const NavBar: React.FC = () => {
  const [menuDrop, setMenuDrop] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <motion.div animate={menuDrop ? "closed" : "open"} variants={iconAnim}>
            <div className={"nav-icon"} onClick={() => (window.location.href = "/")}>
              <i className="fa-solid fa-earth-oceania fa-xl" style={{ color: "#2e2e2e" }} />
            </div>
          </motion.div>
          <div className="nav-links">
            <Button open="/Home">Our&nbsp;Team</Button>
            <Button open="/Listing">Track</Button>
            <Button open="/Profile">Get&nbsp;Badge</Button>
            <Button open="/About Us">Blog</Button>
            <Button open="/Login">Blog</Button>
          </div>
        </div>

        <div className="nav-right">
          <IconButton open="https://github.com/Project-Eco-Track" target="_blank">
            <i className="fa-brands fa-github fa-xl" style={{ color: "#2e2e2e" }} />
          </IconButton>

          <IconButton open="https://devpost.com/software/ecotrack-dtn732">
            <i className="fa-brands fa-dyalog fa-xl" style={{ color: "#2e2e2e" }} />
          </IconButton>
          <SignedOut>
            <Button open="#">
              <SignInButton mode="modal" redirectUrl={"/"}>
                Sign In
              </SignInButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <IconButton open="#">
              <UserButton />
            </IconButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;