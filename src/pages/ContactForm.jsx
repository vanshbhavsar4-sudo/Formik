import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Minimum 2 characters")
      .required("Required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Required"),
    message: Yup.string()
      .min(10, "Minimum 10 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Contact Us
        </h2>

        <p className="text-center text-gray-300 mb-8">
          We'd love to hear from you
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">

            <div>
              <Field
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
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
                as="textarea"
                rows="5"
                name="message"
                placeholder="Enter your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;