import { cookies } from "next/headers";
import Link from "next/link";
import { logout } from "./login/action";

export default async function Navbar() {
    const cookieStore = await cookies();
      const name = cookieStore.get("name");
      console.log(name);
    return (
        <div className="w-full px-16 py-4">
            {name ? (
                <form action={logout}>
                    <button className="cursor-pointer">{name.value}</button>
                </form>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    )
}