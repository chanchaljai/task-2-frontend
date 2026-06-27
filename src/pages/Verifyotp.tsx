import { useState } from "react";
const Verifyotp = ({ OtpLenght = 6 }) => {
  const [otp, setOtp] = useState(new Array(OtpLenght).fill(""));
  console.log(otp);
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Verify with OTP
        </h1>
        <p className="text-center text-sm mt-6">
          We have send a {OtpLenght}-digit verification code to your mobile
          number
        </p>
        <div className="flex justify-center gap-3 mt-10">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              className="w-12 h-12 border rounded  text-xl"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <p>
            Don't receive the code?{" "}
            <span className="text-red-600">Resend OTP</span>
          </p>
        </div>
        <div className="text-center">
          <button className="text-white bg-red-600 test-2xl font-bold px-10 py-3 rounded my-6 hover:bg-red-700 hover: cursor-pointer">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verifyotp;
