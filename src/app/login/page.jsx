import { FaLock } from "react-icons/fa";
import { login } from "./action";

export default function LoginPage() {
  return (
    <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-cyan-500/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-cyan-400">
            به صفحه ورود خوش آمدید
          </h2>
          <FaLock className="text-cyan-400 text-center w-full mt-8 text-8xl" />
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="email" className="sr-only">
                نام کاربری
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="appearance-none relative block w-full px-3 py-3 border border-cyan-500/30 bg-gray-900/50 placeholder-cyan-200/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent sm:text-sm"
                placeholder="نام کاربری"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                رمز ورود
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none relative block w-full px-3 py-3 border border-cyan-500/30 bg-gray-900/50 placeholder-cyan-200/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent sm:text-sm"
                placeholder="رمز ورود"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              formAction={login}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}