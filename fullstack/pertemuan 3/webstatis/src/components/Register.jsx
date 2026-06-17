import React from "react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

      <form>
        <div className="mb-4">
          <label className="block mb-2">Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan Nama"
            className="w-full border p-2 rounded"
          />
        </div>

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
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
