import React from "react";

type Props = {};

const PaginationButton = (props: Props) => {
  return (
        <div className="flex justify-center gap-8">
          <button className="items-center w-28 py-2 text-xl bg-gradient-to-r from-violet-400 to-indigo-500 text-white font-semibold rounded-lg ">
            Previous
          </button>
          <button className="items-center w-28 py-2 text-xl bg-gradient-to-r from-violet-400 to-indigo-500 text-white font-semibold rounded-lg ">
            Next
          </button>
        </div>
  );
};

export default PaginationButton;
