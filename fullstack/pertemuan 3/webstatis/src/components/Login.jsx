import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      <form>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Masukkan Password"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
