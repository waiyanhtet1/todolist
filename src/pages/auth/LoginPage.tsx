import { Link } from "react-router-dom";
import googleLogo from "../../../public/img/gLogo.png";
import Button from "../../components/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="h-full flex flex-col items-center justify-evenly">
        <p className="text-2xl font-bold text-neutral-text">
          Hi, Welcome Back! 👋
        </p>
        <Button
          variant="primary"
          size="lg"
          IconImg={googleLogo}
          onClick={() => console.log("clicked")}
        >
          <div className="flex items-center gap-3">
            <p className="text-neutral-text font-bold">Sign-in with Google</p>
          </div>
        </Button>
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
