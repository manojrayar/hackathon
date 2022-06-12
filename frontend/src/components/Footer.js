import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer class="bg-dark text-center text-white">
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: Social media --> */}
      <section class="mb-4">
        {/* <!-- Facebook --> */}
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/dmrishabh"
          role="button"
          target="blank"
        >
          <FaGithub />
          <br />
          <p>Rishabh Mishra</p>{" "}
        </a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/manojrayar"
          role="button"
          target="blank"
        >
          <FaGithub />
          <br />
          <p> Manoj Rayar</p>{" "}
        </a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/rutikkolhapure"
          role="button"
          target="blank"
        >
          <FaGithub />
          <br />
          <p> Rutik Kolhapure</p>
        </a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/rutikkolhapure"
          role="button"
          target="blank"
        >
          <FaGithub />
          <br />
          <p>Get Source Code</p>
        </a>
      </section>
      {/* <!-- Section: Social media --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div
      class="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Made with ❤️ in India
    </div>
    {/* <!-- Copyright --> */}
  </footer>
);

export default Footer;
