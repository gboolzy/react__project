import { FormInput, FormLabel } from "../utility/FormComponent";

const RegisterForm = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <FormLabel labelForm="firstName">Your first name</FormLabel>
                <FormInput
                  inputType="text"
                  inputName="firstName"
                  inputId="firstName"
                  inputPlaceholder="Enter first name"
                />
              </div>
              <div>
                <FormLabel labelForm="lastName">Your last name</FormLabel>
                <FormInput
                  inputType="text"
                  inputName="lastName"
                  inputId="lastName"
                  inputPlaceholder="jobs"
                />
              </div>
              <div>
                <FormLabel labelForm="email">Your email</FormLabel>
                <FormInput
                  inputType="email"
                  inputName="email"
                  inputId="email"
                  inputPlaceholder="name@company.com"
                />
              </div>
              <div>
                <FormLabel labelForm="mobileNo">Your mobile no</FormLabel>

                <FormInput
                  inputType="text"
                  inputName="mobileNo"
                  inputId="mobileNo"
                  inputPlaceholder="0707890934"
                />
              </div>
              <div>
                <FormLabel labelForm="password">Password</FormLabel>

                <FormInput
                  inputType="password"
                  inputName="password"
                  inputId="password"
                  inputPlaceholder="••••••••"
                />
              </div>
              <div>
                <FormLabel labelForm="confirm-password">
                  Confirm password
                </FormLabel>
                <FormInput
                  inputType="confirm-password"
                  inputName="confirm-password"
                  inputId="confirm-password"
                  inputPlaceholder="••••••••"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                <FormInput
                  inputType="checkbox"
                  inputId="terms"
                />
                </div>
                <div className="ml-3 text-sm">
                  <FormLabel labelForm="terms">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="/"
                    >
                      Terms and Conditions
                    </a>
                  </FormLabel>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterForm;
