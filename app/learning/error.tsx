"use client"

const learningError = ({ error, reset }: { error: Error; reset: ()=>void   }) => {
  return (
    <div className="flex flex-col border h-40 border-red-500 items-center justify-center gap-8">
      <h2>You need to be authorized</h2>
      <h5>{error.message}</h5>
      <button className="h-12 rounded-lg w-20 px-2 py-1 bg-blue-600"
      onClick={reset}>
        login
      </button>
    </div>
  );
};

export default learningError;
