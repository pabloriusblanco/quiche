import { Link } from "react-router-dom";

type LinkBasicProps = {
  to: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  children: React.ReactNode;
};

const LinkBasic = ({
  to,
  fontSize = "text-normal",
  color = "text-black",
  hoverColor = "hover:text-black-dark",
  children,
}: LinkBasicProps) => {
  return (
    <Link to={to} className={`${fontSize} ${color} ${hoverColor}`}>
      {children}
    </Link>
  );
};

export default LinkBasic;
