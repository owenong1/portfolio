import React from "react";

export default function Title({text, className}: {text: string, className?: string}) {
  return (
    <div className={className}>
      <h1 className="text-5xl text-center">{text}</h1>
    </div>
  );
}
