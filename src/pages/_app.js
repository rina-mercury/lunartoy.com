import Router from "next/router";
import React from "react";
import { YMInitializer } from "react-yandex-metrika";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      const url = window.location.pathname + window.location.search;
      ym("hit", url);
    }
  }, []);

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <YMInitializer
          accounts={["86069306"]}
          options={{ webvisor: true, defer: true }}
          version="2"
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
