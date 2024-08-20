import Link from "next/link";
import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex bg-amber-100 p-4 text-lg justify-center gap-7 my-3">
      <div>
        <NavbarItem route="/category/now_playing" title="현재 상영작" />
      </div>
      <div>
        <NavbarItem route="/category/top_rated" title="평점 좋은 영화" />
      </div>
      <div>
        <NavbarItem route="/category/upcoming" title="개봉 상영작" />
      </div>
    </div>
  );
}
