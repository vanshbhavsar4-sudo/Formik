import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackForm = () => {
  const initialValues = {
    studentName: "",
    age: "",
    course: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    studentName: Yup.string().required("Student Name is required"),

    age: Yup.number()
      .min(18, "Minimum age is 18")
      .max(99, "Maximum age is 99")
      .required("Age is required"),

    course: Yup.string().required("Please select a course"),

    comments: Yup.string().test(
      "comments-length",
      "Comments must be at least 15 characters",
      (value) => !value || value.length >= 15
    ),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      alert("Feedback Submitted Successfully! ");
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-black via-red-950 to-orange-950">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Course Feedback 
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Share your learning experience
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">

              {/* Student Name */}
              <div>
                <Field
                  name="studentName"
                  placeholder="Student Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                />

                <ErrorMessage
                  name="studentName"
                  component="p"
                  className="text-orange-300 text-sm mt-1"
                />
              </div>

              {/* Age */}
              <div>
                <Field
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                />

                <ErrorMessage
                  name="age"
                  component="p"
                  className="text-orange-300 text-sm mt-1"
                />
              </div>

              {/* Course */}
              <div>
                <Field
                  as="select"
                  name="course"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                >
                  <option value="" className="text-black">
                    Select Course
                  </option>

                  <option value="React" className="text-black">
                    React
                  </option>

                  <option value="JavaScript" className="text-black">
                    JavaScript
                  </option>

                  <option value="NodeJS" className="text-black">
                    NodeJS
                  </option>
                </Field>

                <ErrorMessage
                  name="course"
                  component="p"
                  className="text-orange-300 text-sm mt-1"
                />
              </div>

              {/* Comments */}
              <div>
                <Field
                  as="textarea"
                  rows="5"
                  name="comments"
                  placeholder="Comments (Optional)"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                />

                <ErrorMessage
                  name="comments"
                  component="p"
                  className="text-orange-300 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback "}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;