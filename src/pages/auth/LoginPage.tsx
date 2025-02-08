import { useMutation, useQuery } from "@apollo/client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { INSERT_USER } from "../../graphql/mutations/userMutation";
import { GET_IS_USER_EXIT } from "../../graphql/queries/userQueries";
import { GoogleUser } from "../../types/taskTypes";

const LoginPage = () => {
  const navigate = useNavigate();

  const [insertUser, { loading, error }] = useMutation(INSERT_USER);

  const [userEmail, setUserEmail] = useState("");
  const [googleResponse, setGoogleResponse] =
    useState<CredentialResponse | null>(null);

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_IS_USER_EXIT, {
    variables: { email: userEmail },
    skip: !userEmail,
  });

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
      const decoded: GoogleUser = jwtDecode(response.credential);
      setUserEmail(decoded.email as string);
      setGoogleResponse(response);
    }
  };

  useEffect(() => {
    const createUser = async () => {
      if (googleResponse && userData) {
        const userCount = userData?.user_aggregate?.aggregate?.count || 0;

        if (userEmail !== "" && userCount >= 1) {
          // User already exists
          localStorage.setItem("token", googleResponse.credential as string);
          navigate("/");
        } else {
          // New user, insert into DB
          const { name, email, picture }: GoogleUser = jwtDecode(
            googleResponse.credential as string
          );
          await insertUser({ variables: { name, email, picture } });
          localStorage.setItem("token", googleResponse.credential as string);
          navigate("/");
        }
      }
    };

    createUser();
  }, [googleResponse, userData, insertUser, navigate, userEmail]);

  if (error || userError) return "Error";

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="h-full flex flex-col items-center justify-evenly">
        <p className="text-2xl font-bold text-neutral-text">
          Hi, Welcome Back! 👋
        </p>

        {loading || userLoading ? (
          <Loading type="button" />
        ) : (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Login Failed")}
          />
        )}
      </div>

      <div className="flex items-center justify-around p-10">
        <p>Don’t have an account? </p>
        <Link to="/signup" className="text-primary underline">
          Sing Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
