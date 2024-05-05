import React from "react";

export default function Header({text, className}: {text: string, className?: string}) {
    return (
      <div className={className}>
        <h1 className="border-y-8 border-transparent">{text}</h1>
      </div>
    );
  }
  