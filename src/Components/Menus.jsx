import Link from "next/link";
import React from "react";

export default function Menus() {
  return (
    <div>
      <Link className='p-3' href={"/about"}>About</Link>
      <Link className='p-3' href={"/products"}>Products</Link>
      <Link href={'/about/kim'}>Kim</Link>
    </div>
  );
}
