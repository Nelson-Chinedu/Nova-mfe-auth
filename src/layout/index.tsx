import { FC, ReactNode } from "react";

import { Typography } from "@NovaOrg/nova-mfe-shared-ui";

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

const Layout: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <>
      <div>
        <Typography variant="h1" className="text-4xl font-semibold w-[60%]">
          {title}
        </Typography>
        <Typography className="text-sm font-light mt-3 mb-6" variant="p">
          {subtitle}
        </Typography>
        {children}
      </div>
    </>
  );
};

export default Layout;
