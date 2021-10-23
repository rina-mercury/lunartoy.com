import Router from "next/router";
import withYM from "next-ym";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default withYM("86069306", Router)(MyApp);
