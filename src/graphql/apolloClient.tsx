import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import authStorage from "../utils/authStorage";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_HASURA_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  //clear jwt if expired
  if (graphQLErrors) {
    console.log("[graphQLErrors]", graphQLErrors);
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions?.code === "invalid-jwt") {
        authStorage.clearToken();
        alert("Session Expired, Please Sign In With Your Credentials Again");
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    alert("network connection problem");
  }
});

const createApolloClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      return {
        headers: {
          ...headers,
          "x-hasura-admin-secret": import.meta.env.VITE_HASURA_KEY,
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
