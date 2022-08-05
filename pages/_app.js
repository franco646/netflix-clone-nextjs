import React from "react";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { wrapper } from "../redux/store";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  return (
    <PersistGate loading={<div>loading</div>} persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
