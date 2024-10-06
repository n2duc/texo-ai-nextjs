import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function GoogleButton({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <Button variant="outline" className={cn("w-full", className)}>
      <ChromeIcon />
      <span className="ml-[10px] text-sm font-bold text-neutral-700">{children}</span>
    </Button>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
    >
      <path
        d="M16.8341 9.20146C16.8341 8.63854 16.7785 8.05746 16.6859 7.5127H8.66504V10.7268H13.259C13.0737 11.7618 12.4624 12.6698 11.5548 13.2509L14.2963 15.3391C15.9079 13.8683 16.8341 11.7255 16.8341 9.20146Z"
        fill="#4280EF"
      />
      <path
        d="M8.66509 17.3367C10.9621 17.3367 12.8885 16.5922 14.2963 15.321L11.5548 13.2509C10.7953 13.7594 9.81357 14.0499 8.66509 14.0499C6.44223 14.0499 4.57132 12.5791 3.88594 10.6179L1.07031 12.7425C2.51517 15.5571 5.44194 17.3367 8.66509 17.3367Z"
        fill="#34A353"
      />
      <path
        d="M3.88566 10.5997C3.5337 9.56462 3.5337 8.43877 3.88566 7.40372L1.07003 5.26099C-0.134021 7.62163 -0.134021 10.3999 1.07003 12.7424L3.88566 10.5997Z"
        fill="#F6B704"
      />
      <path
        d="M8.66509 3.97172C9.86914 3.95356 11.0547 4.40753 11.9253 5.22467L14.3519 2.82771C12.8144 1.41133 10.7768 0.648662 8.66509 0.666821C5.44194 0.666821 2.51517 2.44638 1.07031 5.26099L3.88594 7.40373C4.57132 5.42442 6.44223 3.97172 8.66509 3.97172Z"
        fill="#E54335"
      />
    </svg>
  );
}
