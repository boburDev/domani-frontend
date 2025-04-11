import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className }: Props) => {
  return <div className={twMerge("container mx-auto  2xl:px-0", className)}>{children}</div>;
};

export default Container;
