import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/utils";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  column?: boolean;
  spacing?: number;
}

export const Stack: FC<StackProps> = forwardRef<HTMLDivElement, StackProps>(({ children, column, spacing, className, ...props }) => {
  return (
    <div className={cn("flex gap-4 flex-wrap", column && "flex-col", spacing && `gap-${spacing}`, className)} {...props}>
      {children}
    </div>
  );
});
