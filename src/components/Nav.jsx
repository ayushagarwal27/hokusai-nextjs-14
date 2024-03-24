"use client";
import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav as BootNav } from "react-bootstrap";

const Nav = () => {
  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand>
            <Link href={"/"}>Hokusai</Link>
          </Navbar.Brand>
          <BootNav>
            <BootNav.Link as={Link} href={"/"}>
              Home
            </BootNav.Link>
            <BootNav.Link as={Link} href={"/bio"}>
              Bio
            </BootNav.Link>
          </BootNav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Nav;
