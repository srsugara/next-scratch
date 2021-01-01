import Link from "next/link";

export function Home() {
    return <div>
        <h1>Home page</h1>
        <Link href='/people'>
            <a>People</a>
        </Link>
        <br/>
        <Link href='/vehicles'>
            <a>Vehicles</a>
        </Link>
    </div>
}