import { useForm } from "@tanstack/react-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/registerSchema";
import { Link } from "@tanstack/react-router";

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
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Name */}
          <form.Field
            name="name"
            validators={{
              onChange: registerSchema.shape.name,
            }}
          >
            {(field) => (
              <>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded border p-3"
                />

                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((err, index) => (
                    <p key={index} className="text-sm text-red-500">
                      {err?.message}
                    </p>
                  ))}
              </>
            )}
          </form.Field>

          {/* Email */}
          <form.Field
            name="email"
            validators={{
              onChange: registerSchema.shape.email,
            }}
          >
            {(field) => (
              <>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded border p-3"
                />

                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((err, index) => (
                    <p key={index} className="text-sm text-red-500">
                      {err?.message}
                    </p>
                  ))}
              </>
            )}
          </form.Field>

          {/* Password */}
          <form.Field
            name="password"
            validators={{
              onChange: registerSchema.shape.password,
            }}
          >
            {(field) => (
              <>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded border p-3"
                />

                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((err, index) => (
                    <p key={index} className="text-sm text-red-500">
                      {err?.message}
                    </p>
                  ))}
              </>
            )}
          </form.Field>

          {/* Phone */}
          <form.Field
            name="phone"
            validators={{
              onChange: registerSchema.shape.phone,
            }}
          >
            {(field) => (
              <>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value ?? "")}
                  onBlur={field.handleBlur}
                  className="w-full rounded border p-3"
                />

                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((err, index) => (
                    <p key={index} className="text-sm text-red-500">
                      {err?.message}
                    </p>
                  ))}
              </>
            )}
          </form.Field>

          <button
            type="submit"
            className="w-full rounded bg-black py-3 text-white"
          >
            Register
          </button>
          <p className="mt-1 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              Go to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
