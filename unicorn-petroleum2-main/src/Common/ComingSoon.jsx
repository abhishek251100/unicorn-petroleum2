import React from "react";

export default function ComingSoon({ title = "Coming Soon" }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          This page is under construction.
        </p>
      </div>
    </div>
  );
}
