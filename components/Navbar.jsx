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
                        className={`link ${pathname === "/" ? "text-[rgb(1,113,243)]" : ""}`}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/about" ? "text-[rgb(1,113,243)]" : ""}`}
                        href="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/about/us" ? "text-[rgb(1,113,243)]" : ""}`}
                        href="/about/us"
                    >
                        About us
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/contact" ? "text-[rgb(1,113,243)]" : ""}`}
                        href="/contact"
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === "/pokemon" ? "text-[rgb(1,113,243)]" : ""}`}
                        href="/pokemon"
                    >
                        Pokemon
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
