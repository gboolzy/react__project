import { Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormInput, FormLabel } from "../../utility/FormComponent";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = (data) => {
    console.log(data);
    navigate('/')
    
  };

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
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
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmitHandler)}

            >
              {/* <div>
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
              </div> */}
              <div>
                <FormLabel labelForm="email">Your email</FormLabel>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={inputClass}
                  placeholder="name@company.com"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Last name is required.</p>}
              </div>
              <div>
                <FormLabel labelForm="mobileNo">Your mobile no</FormLabel>
                <input
                  type="text"
                  name="mobileNo"
                  id="mobileNo"
                  className={inputClass}
                  placeholder="0707890934"
                  {...register("mobileNo", { required: true, pattern: /\d+/ })}
                />
                {errors.mobileNo && <p>Last name is required.</p>}
              </div>
              <div>
                <FormLabel labelForm="password">Password</FormLabel>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={inputClass}
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Last name is required.</p>}
              </div>
              {/* <div>
                <FormLabel labelForm="confirm-password">
                  Confirm password
                </FormLabel>
                <FormInput
                  inputType="confirm-password"
                  inputName="confirm-password"
                  inputId="confirm-password"
                  inputPlaceholder="••••••••"
                />
              </div> */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <FormInput inputType="checkbox" inputId="terms" />
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
                style={{ backgroundColor: "rgb(37 99 235)" }}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterForm;
