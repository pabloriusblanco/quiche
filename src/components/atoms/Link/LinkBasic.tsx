import { Link } from "react-router-dom";

type LinkBasicProps = {
  to: string;
  fontSize?: string;
  color?: string;
  extraClasses?: string;
  children: React.ReactNode;
};

const LinkBasic = ({
  to,
  fontSize = "text-normal",
  color = "text-black",
  extraClasses = "hover:text-black-dark",
  children,
}: LinkBasicProps) => {
  if (!to)
    return (
      <div className={`${fontSize} ${color} ${extraClasses}`}>{children}</div>
    );
  return (
    <Link to={to} className={`${fontSize} ${color} ${extraClasses}`}>
      {children}
    </Link>
  );
};

export default LinkBasic;
