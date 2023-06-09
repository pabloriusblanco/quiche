import { Link } from "react-router-dom";

type LinkContainer = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const LinkContainer = ({ to, children, className }: LinkContainer) => {
  if (!to)
  return (
    <div className={`flex items-center ${className}`}>{children}</div>
  );
  return (
    <Link to={to} className={`flex items-center ${className}`}>
      {children}
    </Link>
  );
};

export default LinkContainer;
