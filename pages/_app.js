import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { store, persistor } from "@/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
