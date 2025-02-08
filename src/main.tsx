import { ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import createApolloClient from "./graphql/apolloClient.tsx";
import "./index.css";

const apolloClient = createApolloClient();

const clientId =
  "396838489032-l3sf4aiu946ll7os1rt5rlrglha5ov4r.apps.googleusercontent.com";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </ApolloProvider>
  </StrictMode>
);
