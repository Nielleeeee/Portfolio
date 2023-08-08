import React from "react";

export function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 md:px-8 xl:px-12 w-full">{children}</div>;
}
