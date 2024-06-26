"use client";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Error = ({ error }) => {
  return (
    <div>
      <h2>{error.message}</h2>
      <Button variant={"outline-primary"} as={Link} href={"/"}>
        Go back home
      </Button>
    </div>
  );
};

export default Error;
