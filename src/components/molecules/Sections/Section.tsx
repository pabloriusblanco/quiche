import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <div className="container">
    {children}
  </div>;
};

export default Section;
