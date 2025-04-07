// LinkComponent.tsx
import React from "react";

const LinkComponent: React.FC = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkComponent;
