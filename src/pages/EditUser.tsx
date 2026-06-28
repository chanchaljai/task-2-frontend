import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";

const EditUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams({ strict: false });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
  });

  // User fetch karo
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      if (!res.ok) throw new Error("User nahi mila");
      return res.json();
    },
  });

  // Data aane pe form fill karo
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        age: String(user.age),
      });
    }
  }, [user]);

  // Update API
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          age: Number(formData.age),
        }),
      });
      if (!res.ok) throw new Error("Update nahi hua");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate({ to: "/users" });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    mutate();
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Edit User
        </h1>
        <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
          <PhoneInput
            international
            defaultCountry="IN"
            placeholder="Phone"
            value={formData.phone}
            onChange={(value) =>
              setFormData({ ...formData, phone: value ?? "" })
            }
            className="border border-gray-300 p-2"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-500 text-white rounded py-2 text-2xl disabled:opacity-50"
          >
            {isPending ? "Updating..." : "Update Data"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;