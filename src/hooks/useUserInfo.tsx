import { useQuery } from "@apollo/client";
import { GET_USER_ID } from "../graphql/queries/userQueries";
import { getLoginUserProfile } from "../utils/utils";

const useUserInfo = () => {
  const userInfo = getLoginUserProfile();

  const { error, data } = useQuery(GET_USER_ID, {
    variables: { email: userInfo?.email },
  });

  return {
    userId: data?.user_aggregate?.nodes?.[0]?.id || null,
    error: !!error,
  };
};

export default useUserInfo;
