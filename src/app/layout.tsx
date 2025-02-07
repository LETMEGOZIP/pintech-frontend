import StyledComponentsRegistry from "./registry";
import Header from "./global/ui/outlines/Header";
import Footer from "./global/ui/outlines/Footer";
import { CommonProvider } from "./global/contexts/CommonContext";
import { Metadata } from 'next'
import 'react-datepicker/dist/react-datepicker.css'
import { getUserInfo } from "./member/services/actions";
import { UserProvider } from "./global/contexts/UserContext";
import './globals.css'


export const metadata: Metadata = {
  title:"삐삐쀼쀼",
  description: "쀼"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userInfo = await getUserInfo()
  
  return (
    <html lang = "ko">
      <body>
        <StyledComponentsRegistry>
          <UserProvider _userInfo={userInfo}>
            <CommonProvider>
              <Header/>
                <main className="MainContent">{children}</main>
              <Footer/>
            </CommonProvider>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};