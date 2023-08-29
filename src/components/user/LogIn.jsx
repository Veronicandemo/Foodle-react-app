const LogIn = () => {
  return (
    <form className="mx-auto my-20 w-[50%] bg-lighttestRed bg-opacity-80 bg-clip-padding p-10">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-DarkRed dark:text-DarkRed"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black shadow-sm focus:border-DarkRed focus:ring-DarkRed dark:border-DarkRed dark:bg-gray-50 dark:text-black dark:placeholder-gray-400 dark:focus:border-DarkRed dark:focus:ring-DarkRed"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-DarkRed dark:text-DarkRed"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black shadow-sm focus:border-DarkRed focus:ring-DarkRed dark:border-DarkRed dark:bg-gray-50 dark:text-black dark:placeholder-gray-400 dark:focus:border-DarkRed dark:focus:ring-DarkRed"
          required
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-DarkRed px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-DarkRed focus:outline-none focus:ring-4 focus:ring-lighttestRed dark:bg-DarkRed dark:hover:bg-DarkRed dark:focus:ring-DarkRed"
      >
        Log In <span>&rarr;</span>
      </button>
    </form>
  );
};

export default LogIn;
