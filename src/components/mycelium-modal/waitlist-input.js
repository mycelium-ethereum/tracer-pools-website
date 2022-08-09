import React, { useState, useEffect } from "react";

export const WaitlistInput = ({
  userInput,
  setUserInput,
  status,
  message,
  onValidated,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isValidEmail(userInput)) {
      onValidated({
        EMAIL: userInput,
      });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    console.log(status);
    console.log(message);
  }, [status]);

  const isValidEmail = (email) => {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/.test(email);
  };

  const errorStyles = "bg-[#191203] border-[#FF5621]";
  const normalStyles = "popup-input-container bg-[#191203] border-[#098200]";

  return (
    <form
      className={`relative flex h-9 w-full items-center justify-between rounded-[4px] border transition-colors duration-300 ${
        error ? errorStyles : normalStyles
      }`}
    >
      <input
        type="email"
        name="b_71f7321770f187b58dc7d4552_53e1b02275"
        className="h-full w-full border-none bg-transparent px-4 py-2 text-white outline-none placeholder:text-opacity-30"
        onChange={handleChange}
        value={userInput}
        placeholder="Enter your email address"
      />
      <span
        className={`pointer-events-none absolute left-0 -bottom-6 text-sm leading-5 text-[#FF5621] transition-opacity duration-500 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {message || `This must be a valid email address.`}
      </span>
      <button
        aria-label="submit"
        type="submit"
        onClick={handleSubmit}
        className={`flex h-9 items-center justify-center rounded-[4px] border px-6 py-1.5 ${
          error
            ? "border-[#FF5621] bg-[#FF5621]"
            : "popup-button border-[#38800A]"
        }`}
      >
        Submit
      </button>
    </form>
  );
};
