import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Request from "./pages/request/Request";
import Profile from "./pages/profile/Profile";
import AdminIndex from "./admin/AdminIndex";
import DriverIndex from "./driver/DriverIndex";
import AccessDenied from "./pages/accessdenied/AccessDenied";
import NotFound from "./pages/notfound/NotFound";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/profile/Login";
import { ToastContainer } from "react-toastify";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/request" element={<Request />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/access-denied" element={<AccessDenied />} />
              <Route path="/admin/*" element={<AdminIndex />} />
              <Route path="/driver/*" element={<DriverIndex />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
      <ToastContainer
      autoClose={3000}
      />
    </Provider>
);

reportWebVitals();
