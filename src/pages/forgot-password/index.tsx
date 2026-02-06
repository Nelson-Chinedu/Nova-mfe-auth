import { useEffect } from "react";
import { Mail } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";

import { Button, Input, Typography } from "@NovaOrg/nova-mfe-shared-ui";

import { AuthContextType } from "~/layout";

import { AUTHS_PATHS, BASE_PATHS } from "~/constants/paths";

const ForgotPassword = () => {
  const { setHeader } = useOutletContext<AuthContextType>();

  useEffect(() => {
    setHeader({
      title: "Forgot Password",
      subtitle: "Enter your Nova email address to reset password",
    });
  }, [setHeader]);

  return (
    <>
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
        <Link to={`/${BASE_PATHS.AUTH}/${AUTHS_PATHS.SIGNIN}`} className="text-[#3c41e9] underline font-semibold">
          Signin
        </Link>
      </Typography>
    </>
  );
};

export default ForgotPassword;
