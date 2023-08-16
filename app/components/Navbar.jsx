import Link from 'next/link'
export default function Navbar() {
    return (
        <ul className='topnav'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/blog">Blog List</Link>
            </li>
        </ul>
    );
}