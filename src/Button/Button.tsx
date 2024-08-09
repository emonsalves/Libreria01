import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className="inline-block rounded-lg bg-blue-400 px-5 py-3 font-bold text-white">{children}</button>;
};