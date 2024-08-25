"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({href,children}) => {
    const path = usePathname()
  return (
    <Link
      href={href}
      className={`${href === path ? "text-primary" : ""} transition-all duration-300 hover:text-primary`}
      data-abc={true}
    >
      {children}
    </Link>
  );
}

export default NavLink