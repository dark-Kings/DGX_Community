import { useState, useEffect, useContext } from "react";
import { images } from "../constant/index.js";
import { IoRefreshCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import generateCaptcha from '../utils/generateCaptcha.js'
import ApiContext from '../context/ApiContext.jsx';

const VerifyEmail = () => {

  const { fetchData } = useContext(ApiContext);
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const refreshCaptcha = async () => {
    const newCaptcha = await generateCaptcha(6);
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userCaptcha !== captcha) {
      toast.error("Invalid captcha", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid Email", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const endpoint = "user/verify";
    const method = "POST"
    const headers = { "Content-Type": "application/json" };
    const body = { email: email };
    setLoading(true)

    try {
      const data = await fetchData(endpoint, method, body, headers);
      if (!data.success) {
        refreshCaptcha()
        setLoading(false)
        toast.error(`Error in verify mail: ${data.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (data.success) {
        refreshCaptcha()
        setLoading(false)
        toast.success("Mail sent successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/SignInn');
        }, 3500);
      }
    } catch (error) {
      refreshCaptcha()
      setLoading(false)
      toast.error(`Something went wrong try again`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    loading ? <h1 className="flex items-center justify-center min-h-screen">Loading...</h1> : <div>
      <ToastContainer />
      <section className="h-screen">
        <div className="h-full">
          <div className="flex h-full flex-wrap md:w-250 items-center justify-center lg:justify-between">
            <div className="shrink-1 hidden lg:block ml:10 mb-12 grow-0 basis-auto md:mb-0 md:w-5/12 sm:w-6/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
              <img
                src={images.verifyImg}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:rounded-l-full h-screen flex justify-center items-center bg-DGXblue">
              <div className="mb-12 md:mb-0 w-full md:w-8/12 lg:w-5/12 xl:w-5/12 border border-DGXgreen rounded-lg bg-DGXwhite">
                <form className="mb-12 w:50 pr-5 pl-5" onSubmit={handleSubmit}>
                  <div className="flex flex-row items-center justify-center xl:justify-start mt-5 align-item-center">
                    <p className="mb-5 me-4 text-xl md:font-bold">
                      Verify Email
                    </p>
                  </div>

                  <div className="relative mb-6 data-twe-input-wrapper-init">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border border-DGXgreen bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="email"
                      value={email}
                      onChange={handleChangeEmail}
                      placeholder="Email address"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative mb-6 data-twe-input-wrapper-init">
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border border-DGXgreen bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="userCaptcha"
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        placeholder="Enter Captcha"
                        required
                      />
                      <label
                        htmlFor="userCaptcha"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >
                        Enter Captcha
                      </label>
                    </div>
                  </div>

                  <div className="relative mb-2 data-twe-input-wrapper-init items-center justify-center">
                    <div
                      className="peer block min-h-[auto] w-full rounded border  border-DGXgreen bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 select-none font-extrabold tracking-widest"
                      id="captchaDisplay"
                    >
                      {captcha}
                    </div>
                  </div>

                  <div className="relative mb-4 data-twe-input-wrapper-init flex justify-center">
                    <button
                      type="button"
                      className="text-blue hover:text-blue-700 border border-DGXblue border-double bg-DGXgreen  border-indigo-600 data-twe-input-wrapper-init mt-3"
                      onClick={refreshCaptcha}
                    >
                      <IoRefreshCircleSharp className="text-3xl" />
                    </button>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="button"
                      className="inline-block w-full rounded bg-DGXgreen px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      onClick={handleSubmit}
                    >
                      Verify
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyEmail;
