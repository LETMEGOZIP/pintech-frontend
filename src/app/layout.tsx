import StyledComponentsRegistry from "./registry";
import Header from "./global/ui/outlines/Header";
import Footer from "./global/ui/outlines/Footer";
import { CommonProvider } from "./global/contexts/CommonContext";
import { Metadata } from 'next'
import { setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'


export const metadata: Metadata = {
  title:"삐삐쀼쀼",
  description: "쀼"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang = "ko">
      <body>
        <StyledComponentsRegistry>
          <CommonProvider>
            <Header/>
              <main className="MainContent">{children}</main>
            <Footer/>
          </CommonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};