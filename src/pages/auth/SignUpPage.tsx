import { useMutation, useQuery } from "@apollo/client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { INSERT_USER } from "../../graphql/mutations/userMutation";
import { GET_IS_USER_EXIT } from "../../graphql/queries/userQueries";
import { GoogleUser } from "../../types/taskTypes";

const SignUpPage = () => {
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
        <div className="text-center">
          <p className="text-2xl font-bold text-neutral-text">
            Create an account
          </p>
          <p className="text-sm text-neutral-weak">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {loading || userLoading ? (
          <Loading type="button" />
        ) : (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Login Failed")}
            text="signup_with"
          />
        )}
      </div>

      <div className="flex items-center justify-around p-10">
        <p>I have already an account?</p>
        <Link to="/login" className="text-primary underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
