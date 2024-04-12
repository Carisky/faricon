import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Request from "./pages/request/Request";
import Profile from "./pages/profile/Profile";
import AdminIndex from "./admin/AdminIndex";
import AccessDenied from "./pages/accessdenied/AccessDenied";
import NotFound from "./pages/notfound/NotFound";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./pages/profile/Login";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
        <Auth0Provider
            domain="dev-014fm6ate4w1mp3d.us.auth0.com"
            clientId="VR9v7GBUo73srJKNZMjhO8w74TI4YuOL"
            redirectUri={window.location.origin}
          >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/request" element={<Request />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/access-denied" element={<AccessDenied />} />
              <Route path="/admin/*" element={<AdminIndex />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </Auth0Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
