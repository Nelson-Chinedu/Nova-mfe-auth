import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Typography } from "@NovaOrg/nova-mfe-shared-ui";

interface HeaderState {
  title: string;
  subtitle: string;
}

export interface AuthContextType {
  setHeader: React.Dispatch<React.SetStateAction<HeaderState>>;
}

const Layout = () => {
  const [header, setHeader] = useState<HeaderState>({ title: "", subtitle: "" });

  return (
    <main>
      <div className="flex min-h-screen w-full items-center justify-center px-4">
        <div className="w-full max-w-120  py-8 rounded-xl">
          <div className="w-[85%] mx-auto">
            <Typography variant="h1" className="text-4xl font-semibold w-[60%]">
              {header.title}
            </Typography>
            <Typography className="text-sm font-light mt-3 mb-6" variant="p">
              {header.subtitle}
            </Typography>
            <Outlet context={{ setHeader } satisfies AuthContextType} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
