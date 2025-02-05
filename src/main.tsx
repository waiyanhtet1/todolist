import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import createApolloClient from "./graphql/apolloClient.tsx";
import "./index.css";

const apolloClient = createApolloClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
