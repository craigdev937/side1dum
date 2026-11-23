import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RED } from "./global/RED";
import { App } from "./app/App";

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <Provider store={RED}>
            <React.Fragment>
                <App />
            </React.Fragment>
        </Provider>
    );


