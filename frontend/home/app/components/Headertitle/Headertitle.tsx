import React from "react";

const Headertitle = ({ title, subtitle, description }: { title: string; subtitle: string; description: string; }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm text-primary">{subtitle}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default Headertitle;