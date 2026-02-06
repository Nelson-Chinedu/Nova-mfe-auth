import Layout from "~/layout";
import { Button, Input, Typography, Checkbox } from "@NovaOrg/nova-mfe-shared-ui";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import GoogleIcon from "~/assets/icons/google.svg";
import FacebookIcon from "~/assets/icons/facebook.svg";
import { useState } from "react";
import { AUTHS_PATHS } from "~/constants/paths";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-120  py-8 rounded-xl ">
        <div className="w-[85%] mx-auto">
          <Layout title="Create Nova Account" subtitle="Create your Nova account to access all Nova products">
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
                or sign up using email
              </Typography>

              <div className="grow border-t border-slate-300" />
            </div>
            <form action="" className="flex flex-col gap-2">
              <Input
                startIcon={<Mail size={20} />}
                placeholder="Email"
                className="rounded-xl bg-white py-3 placeholder:text-sm text-sm"
              />
              <Button size="lg" className="rounded-xl mt-2">
                Continue
              </Button>
            </form>

            <Typography className="text-xs text-gray-700 my-4">
              By creating an account you agree to the
              <Link to="#" className="underline font-bold">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline font-bold">
                Privacy
              </Link>{" "}
            </Typography>
            <Typography className="text-sm text-gray-700">
              Already have an account?.{" "}
              <Link to={`/${AUTHS_PATHS.SIGNIN}`} className="text-[#3c41e9] underline font-semibold">
                Signin
              </Link>
            </Typography>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Signup;
