import Layout from "~/layout";
import { Button, Input, Typography } from "@NovaOrg/nova-mfe-shared-ui";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { AUTHS_PATHS } from "~/constants/paths";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-120  py-8 rounded-xl ">
        <div className="w-[85%] mx-auto">
          <Layout title="Forgot Password" subtitle="Enter your Nova email address to reset password">
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

            <Typography className="text-sm text-gray-700 my-4">
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

export default ForgotPassword;
