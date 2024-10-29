import { socials } from "../constants/index.jsx";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const redirect = () => {
    window.location.href = "https://www.linkedin.com/in/mohammad-jasim23/";
  };

  const error = (event) => {
    event.preventDefault();
    toast.error("Failed to redirect to Any Social Media");
  };

  const error2 = (event) => {
    event.preventDefault();
    toast.error("Sorry no privacy policy were found");
  };

  const error3 = (event) => {
    event.preventDefault();
    toast.error("Sorry no terms of use were found");
  };

  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70 cursor-pointer" onClick={redirect}>
              ©2024 Jasim - All Rights Reserved
            </p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer" onClick={error2}>
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer" onClick={error3}>
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a onClick={error} href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Toaster/>
    </footer>
  );
};

export default Footer;