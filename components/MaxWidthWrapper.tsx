import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn("mx-auto  max-w-screen-2xl px-2.5 md:px-20 ", className)}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
