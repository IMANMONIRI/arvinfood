
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  const cookieStore = await cookies();
  const name = cookieStore.get("name");
    if (!name) {
        redirect("/login");
        
        return;
    }
  return (
    <div className="w-full pt-32 flex flex-col items-center justify-center space-y-8">
      {/* <p>hello, {name}</p> */}
      <h1 className="text-5xl">سلام {name.value} . به سایت ما خوش آمدید</h1>
      <p className="text-2xl">سایت در دست ساخت قرار دارد</p>
    </div>
  );
}
