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
    alert("Message Sent Successfully! ");
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-black via-red-950 to-orange-950">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl">

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

            {/* Full Name */}
            <div>
              <Field
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              />

              <ErrorMessage
                name="fullName"
                component="p"
                className="text-orange-300 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="text-orange-300 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <Field
                as="textarea"
                rows="5"
                name="message"
                placeholder="Enter your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
              />

              <ErrorMessage
                name="message"
                component="p"
                className="text-orange-300 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition duration-300"
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