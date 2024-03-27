// components/Navbar.js
import { Flex } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex gap="middle">
      <Link href="/">Home</Link>
      <Link href="/request">Request</Link>
      <Link href="/cabinet">Cabinet</Link>
    </Flex>
  );
};

export default Navbar;
