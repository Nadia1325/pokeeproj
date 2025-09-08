import { useState } from "react";

const Registeru = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", formData);
    
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-lg w-[20rem]"
      >
        <h2 className="text-xl font-semibold text-center mb-2">Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-2 border rounded-sm outline-none focus:ring focus:ring-blue-300"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="User Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-sm outline-none focus:ring focus:ring-blue-300"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border rounded-sm outline-none focus:ring focus:ring-blue-300"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-2 border rounded-sm outline-none focus:ring focus:ring-blue-300"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-sm hover:bg-blue-700"
        >
          Register
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white py-2 rounded-sm hover:bg-red-600"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Registeru;

        