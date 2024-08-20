import Link from 'next/link'
import React from 'react'

export default function NavbarItem({route, title}) {
  return (
    <div>
        <Link className='hover:text-amber-500' href={route}>{title}</Link>
    </div>
  )
}
