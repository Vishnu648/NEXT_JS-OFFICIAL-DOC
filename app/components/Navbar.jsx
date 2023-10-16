'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



const Navbar = () => {
    const pathname=usePathname();

    return (
        <nav className="h-20 border border-white rounded-lg">
            <ul className="w-full h-full flex items-center justify-around">
                <li>
                    <Link
                        className={`link ${pathname === "/" ? "text-red-800" : ""}`}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/about" ? "text-red-800" : ""}`}
                        href="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/about/us" ? "text-red-800" : ""}`}
                        href="/about/us"
                    >
                        About us
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
