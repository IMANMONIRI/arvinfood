import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-slate-900 px-4'
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
