import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "24/7 MCA Relief | Business MCA support", description: "A fast, confidential first step for business owners dealing with merchant cash advance payment pressure." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
