"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Card = () => {
  return (
    <div
      className={cn(
        "w-72 min-h-104 h-104 rounded-xl",
        "shadow-[0px_1px_1px_rgba(0,0,0,00.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-6, flex flex-col items-center"
      )}
    >
      <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
      <p className="text-neutral-500 mt-2 text-[10px]">
        A collection of beautiful UI components, let&apos;s get on with it.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
            <Image 
            src="/vercel.svg"
            alt="vercel"
            width={50}
            height={50}
            className="h-4 w-4"
            />
        </button>
      </div>
    </div>
  );
};
