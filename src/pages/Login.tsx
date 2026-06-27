import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { loginSchema } from "../schemas/loginSchema";
import { useNavigate } from "@tanstack/react-router";

function Login() {
    const [isOtp, setIsOtp] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      // validation ke bad
      if(isOtp){
        navigate({to: "/verify-otp"});
      }else{
        navigate({to: "/user"});
      }

    },
  });



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-3xl text-gray-900">Welcome Back,</h1>
        <h2 className="text-lg text-gray-600 mb-4">Login your account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {isOtp ? (
            <form.Field
              name="phone"
              validators={{ onChange: loginSchema.shape.phone }}
            >
              {(field) => (
                <>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={field.state.value}
                    onChange={(val) => field.handleChange(val ?? "")}
                    onBlur={field.handleBlur}
                    className="w-full border p-3"
                    placeholder="Enter your Mobile Number"
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
          ) : (
            <>
              <form.Field
                name="email"
                validators={{ onChange: loginSchema.shape.email }}
              >
                {(field) => (
                  <>
                    <input
                      className="w-full border p-3"
                      placeholder="Enter your Email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
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

              <form.Field name="password" validators={{ onChange: loginSchema.shape.password }}>
                {(field) => (
                  <>
                    <input
                      className="w-full border p-3"
                      placeholder="Enter your Password"
                      type="password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
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
            </>
          )}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="otpToggle"
              className="w-4 h-4 cursor-pointer"
              onChange={() => setIsOtp(!isOtp)}
            />
            <label
              htmlFor="otpToggle"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Login with OTP
            </label>
          </div>

          <button
          className="w-full bg-black text-white font-bold py-3 px-4 rounded">
            {isOtp ? "Send OTP" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
