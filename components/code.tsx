import React from "react";

export function RunCommand({ children }: { children: React.ReactNode }) {
  return <span className="text-green-400">{children}</span>;
}

export function LineComment({ children }: { children: React.ReactNode }) {
  return <span className="block text-gray-400">{children}</span>;
}
