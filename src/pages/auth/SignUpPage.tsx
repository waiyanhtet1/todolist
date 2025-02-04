import { Link } from "react-router-dom";
import googleLogo from "../../../public/img/gLogo.png";
import Button from "../../components/Button";

const SignUpPage = () => {
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
        <Button
          variant="primary"
          size="lg"
          IconImg={googleLogo}
          onClick={() => console.log("clicked")}
        >
          <div className="flex items-center gap-3">
            <p className="text-neutral-text font-bold">Signup with Google</p>
          </div>
        </Button>
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
