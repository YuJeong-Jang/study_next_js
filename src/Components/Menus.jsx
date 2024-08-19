import Link from "next/link";
import React from "react";

export default function Menus() {
  return (
    <div>
      <Link className="p-3" href={'/'}>Home</Link>
      <Link className='p-3' href={"/about"}>About</Link>
      <Link className='p-3' href={"/products"}>Products</Link>
      <Link className='p-3' href={'/about/kim'}>Kim</Link>
      <Link className='p-3' href={'/posts'}>posts</Link>
    </div>
  );
}
