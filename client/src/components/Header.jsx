import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left-aligned Button */}
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-2 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> View Website </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        {/* Title & Description Centered */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Blog Posts
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* Right-aligned Button */}
        <button
          className="rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 "
          type="button"
        >
          Create Post
        </button>
      </div>
    </header>
  );
};

export default Header;
