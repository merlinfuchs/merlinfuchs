import { ReactNode } from "react";

export default function CodeCaption({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="text-sm font-light tracking-wider -mt-1.5 text-zinc-400 text-center"
      {...props}
    >
      {children}
    </div>
  );
}
