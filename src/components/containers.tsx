import React from "react";

export function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 md:px-8 lg:px-12 xl:px-16 w-full">{children}</div>;
}
