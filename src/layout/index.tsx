import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>NOVA</h2>
        <button>Signup</button>
      </div>
      <div>
        <h1>Welcome to Nova</h1>
        <p>Sign in your Nova account to access all Nova products</p>
        {children}
      </div>
    </div>
  );
};

export default Layout;
