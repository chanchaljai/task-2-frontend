import { useForm } from "@tanstack/react-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Register() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },

    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Register
        </h1>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {/* Name */}
          <form.Field name="name">
            {(field) => (
              <input
                type="text"
                placeholder="Enter Name"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                className="w-full rounded border p-3"
              />
            )}
          </form.Field>

          {/* Email */}
          <form.Field name="email">
            {(field) => (
              <input
                type="email"
                placeholder="Enter Email"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                className="w-full rounded border p-3"
              />
            )}
          </form.Field>

          {/* Password */}
          <form.Field name="password">
            {(field) => (
              <input
                type="password"
                placeholder="Enter Password"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
                className="w-full rounded border p-3"
              />
            )}
          </form.Field>

          {/* Phone */}
          <form.Field name="phone">
            {(field) => (
              <PhoneInput
                international
                defaultCountry="IN"
                value={field.state.value}
                onChange={(value) =>
                  field.handleChange(value ?? "")
                }
                className="w-full rounded border p-3"
              />
            )}
          </form.Field>

          <button
            type="submit"
            className="w-full rounded bg-black py-3 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;