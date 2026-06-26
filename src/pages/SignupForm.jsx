import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Sign Up completed successfully!");
    console.log(values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Join our community today
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300"
            >
              Sign Up
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;