import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [isDisable, setIsDisable] = useState(true);
  const captchaRef = useRef(null);
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    // console.log(email, password);

    userLogin(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Successfully logged in user!",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  const handleCaptchaValue = () => {
    console.log(captchaRef.current.value);
    const user_captcha_value = captchaRef.current.value;
    if (!validateCaptcha(user_captcha_value)) {
      setIsDisable(true);

      return toast.error("Captcha does not match");
    } else {
      setIsDisable(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  className="input input-bordered"
                  placeholder="type the text above"
                />
                <button
                  onClick={handleCaptchaValue}
                  type="button"
                  className="btn btn-outline btn-info mt-3"
                >
                  Check Captcha
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  //  disabled={isDisable}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-col items-center pb-5">
              <p>
                <small>
                  New here? <Link to="/signUp">Create a new account</Link>
                </small>
              </p>
              <div className="divider"></div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
