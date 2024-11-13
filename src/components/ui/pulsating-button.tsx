"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PulsatingButton({ children, className, ...props }: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-tighter text-white transition duration-300 ease-in-out bg-primary rounded-lg hover:bg-primary/90",
        "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:animate-pulse-slow before:opacity-60",
        "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:animate-pulse-slow after:animation-delay-1000 after:opacity-60",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
