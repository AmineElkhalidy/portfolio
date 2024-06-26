import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import ParentContainer from "../components/Container";
import Paragraph from "../components/atoms/Paragraph";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Copyright from "../components/Copyright";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqdeyeo");

  return (
    <section
      className="w-full flex items-center justify-center pt-24 sm:pt-32"
      id="contact"
    >
      <ParentContainer>
        <div className="mx-auto max-w-xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            layout
            className="text-lg font-semibold leading-8 tracking-tight gradient-text"
          >
            Get in touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ y: [20, 0], opacity: [0, 0.5, 1] }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            layout
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Contact Me
          </motion.h2>
        </div>

        <div className="pt-24">
          <div className="grid gap-16 md:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [-50, 0], opacity: [0, 0, 5, 1] }}
              transition={{ ease: "easeIn", duration: 1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black-900 mb-4">
                Get in touch
              </h2>
              <Paragraph styles="max-w-lg w-full text-grey-400 text-base sm:text-lg leading-7">
                Have a project in mind?
                <br /> Looking to partner or work together?
                <br />
                Reach out through the form and I'll be in touch with you asap.
              </Paragraph>

              {/* Contact resources container */}
              <div className="mt-6 md:mt-10 flex flex-col gap-6">
                <a
                  href="mailto:a.amineelkhalidy@gmail.com"
                  className=" inline-flex items-center gap-4 text-base sm:text-lg md:text-[20px] font-bold"
                >
                  <EnvelopeIcon className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                  a.amineelkhalidy@gmail.com
                </a>
                <a
                  href="tel:+212611154307"
                  className=" inline-flex items-center gap-4 text-base sm:text-lg md:text-[20px] font-bold"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                  +212611154307
                </a>
              </div>

              <div className="max-w-sm mt-10 md:mt-14">
                <div className="flex gap-6 items-center">
                  {/* <a
                    href="https://www.upwork.com/freelancers/~01f55a2d4b119d3119"
                    target="_blank"
                    aria-label="Upwork Profile"
                    className="inline-block p-4 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                      className="w-7 h-full fill-black-900"
                    >
                      <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.fiverr.com/amineelkhalidy/make-responsive-modern-and-pixel-perfect-website"
                    target="_blank"
                    aria-label="Fiverr Profile"
                    className="inline-block p-4 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      className="w-[1.6rem] fill-black-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
                        <circle cx="11.5" cy="1.5" r="1.5" />
                      </g>
                    </svg>
                  </a> */}

                  <a
                    href="https://github.com/AmineElkhalidy"
                    target="_blank"
                    aria-label="Github Profile"
                    className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      className="fill-black-900  w-[1.85rem] -ml-[.20rem] h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z"
                        data-name="Brand Logos"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/elkhalidyamine"
                    target="_blank"
                    aria-label="Linkedin Profile"
                    className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="24px"
                      height="24px"
                      className="w-7 fill-black-900"
                    >
                      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                    </svg>
                  </a>

                  {/* <a
                    href="https://www.instagram.com/elkhalidyamine/"
                    target="_blank"
                    aria-label="Instagram Profile"
                    className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-instagram fill-gray-700"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  <a
                    href="https://web.facebook.com/profile.php?id=61560347909437&ref=xav_ig_profile_web&_rdc=1&_rdr"
                    target="_blank"
                    aria-label="Facebook Profile"
                    className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-sm border duration-300 hover:shadow-md hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </motion.div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ x: [50, 0], opacity: [0, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 1 }}
              className="mb-16"
            >
              {state.succeeded ? (
                <div className="w-full h-full">
                  <p className="text-xl text-center font-semibold sm:text-2xl md:text-3xl lg:text-4xl md:mt-12">
                    <span className="gradient-text">Thank you</span> for your
                    message, I'll get in touch with you{" "}
                    <span className="gradient-text">as soon as possible</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Full Name box*/}
                  <div className="mb-6">
                    <div>
                      <label
                        className="mb-3 block font-bold text-black-500"
                        htmlFor="fullname"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full rounded-md py-3 pl-6 bg-[#f2f6f7] outline-none duration-300 focus:border focus:border-green-700"
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Your full name"
                        required
                        autoComplete="true"
                      />
                      <ValidationError
                        prefix="First Name"
                        field="first-Name"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Email box */}
                  <div className="mb-6">
                    <div>
                      <label
                        className="mb-3 block font-bold text-black-500"
                        htmlFor="email"
                      >
                        Your E-mail
                      </label>

                      <input
                        className="w-full rounded-md py-3 pl-6 bg-[#f2f6f7] duration-300 focus:border focus:border-green-700 outline-none"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your e-mail"
                        required
                        autoComplete="true"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="mb-6">
                    <div>
                      <label
                        className="mb-3 block font-bold text-black-500"
                        htmlFor="message"
                      >
                        Your Message :
                      </label>
                      <textarea
                        className="w-full rounded-md pt-4 pl-6 outline-none duration-300 focus:border focus:border-green-700 pb-24 bg-[#f2f6f7] resize-none"
                        name="message"
                        id="message"
                        placeholder="Your message in details..."
                        autoCorrect="false"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Button box */}
                  <div className="relative flex justify-end">
                    <button
                      className="inline-block rounded-md px-10 py-3 bg-black-900 text-white cursor-pointer text-lg duration-300 font-medium"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          <Copyright />
        </div>
      </ParentContainer>
    </section>
  );
};

export default Contact;
