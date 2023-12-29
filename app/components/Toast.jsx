"use client";

function Toast({ message, show, onClose }) {
  return (
    <>
      <div className="absolute top-10 bg-accent p-4 w-3/4 rounded-2xl">
        {message}
      </div>
    </>
  );
}

export default Toast;
