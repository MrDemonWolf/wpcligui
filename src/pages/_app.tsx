import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
