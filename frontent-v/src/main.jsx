import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "@/components/layout";
import RouterProvider from "@/components/router";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",

  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider />
    </ApolloProvider>
  </React.StrictMode>
);
