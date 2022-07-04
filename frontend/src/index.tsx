import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GRAPHQL_URL } from "./constants";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

/* Creating a new ApolloClient instance. */
const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});
/* Creating a root element for the React app. */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  /* Wrapping the App component with the ApolloProvider component. */
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
