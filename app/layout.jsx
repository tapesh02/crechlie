import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Poppins } from "next/font/google";
import { ThemeWrapper } from "@utils/ThemeWrapper";
import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navBar/NavBar";
import PropTypes from "prop-types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Crechlie - Find Your Perfect Daycare",
  description: "Discover and compare daycare centers in your area",
};

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeWrapper>
        <html lang="en" className={poppins.variable}>
          <body><NavBar/> {children} <Footer /> </body>
        </html>
      </ThemeWrapper>
    </AppRouterCacheProvider>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};