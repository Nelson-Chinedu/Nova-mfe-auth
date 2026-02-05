import Layout from "~/layout";
import { Button, Input, Typography, Checkbox } from "@NovaOrg/nova-mfe-shared-ui";
import { EyeIcon, EyeOffIcon, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import GoogleIcon from "~/assets/icons/google.svg";
import FacebookIcon from "~/assets/icons/facebook.svg";
import { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-120  py-8 rounded-xl ">
        <div className="w-[85%] mx-auto">
          <Layout title="Welcome to Nova" subtitle="Sign in your Nova account to access all Nova products">
            <div className="flex flex-col gap-4">
              <Button size="lg" variant="outline" className="bg-white rounded-xl text-sm gap-2">
                <img src={GoogleIcon} width={30} />
                Continue with Google
              </Button>
              <Button size="lg" variant="outline" className="bg-white rounded-xl text-sm gap-2">
                <img src={FacebookIcon} width={30} />
                Continue With Facebook
              </Button>
            </div>
            <div className="relative flex items-center py-5">
              <div className="grow border-t border-slate-300" />

              <Typography variant="span" className="shrink mx-4 text-sm text-slate-500 font-normal">
                or sign in using email
              </Typography>

              <div className="grow border-t border-slate-300" />
            </div>
            <form action="" className="flex flex-col gap-2">
              <Input
                startIcon={<Mail size={20} />}
                placeholder="Email"
                className="rounded-xl bg-white py-3 placeholder:text-sm text-sm"
              />
              <Input
                startIcon={<Lock size={20} />}
                endIcon={
                  showPassword ? (
                    <EyeIcon size={20} onClick={handleTogglePasswordVisibility} />
                  ) : (
                    <EyeOffIcon size={20} onClick={handleTogglePasswordVisibility} />
                  )
                }
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="rounded-xl bg-white py-3 text-sm placeholder:text-sm"
              />
              <Button size="lg" className="rounded-xl mt-2">
                Continue
              </Button>
              <div className="flex flex-row items-center justify-between">
                <Checkbox label="Remember me" />
                <Link to={"#"} className="text-sm text-[#3c41e9] underline">
                  Forgot Your Password?
                </Link>
              </div>
            </form>

            <Typography className="text-xs text-gray-700 my-4">
              By clicking "Continue with Google/Facebook" above, you agree to the{" "}
              <Link to="#" className="underline font-bold">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline font-bold">
                Privacy
              </Link>{" "}
            </Typography>
            <Typography className="text-sm text-gray-700">
              Get started with Nova.{" "}
              <Link to="#" className="text-[#3c41e9] underline font-semibold">
                Signup
              </Link>
            </Typography>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Signin;
