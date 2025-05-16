"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(data);
  const cookieStore = await cookies();
  cookieStore.set("name", data.email, {path: '/'});
  cookieStore.set("password", data.password, { path: '/' });
  revalidatePath("/");
    data.email === "admin" && data.password === "admin"
      ? redirect("/admin")
      : redirect("/user");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("name", {path: '/'});
  cookieStore.delete("password", { path: '/' });
  revalidatePath("/");
  redirect("/login");
}