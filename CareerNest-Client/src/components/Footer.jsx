import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white py-10 mt-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Brand & Vision */}
          <div>
            {/* logo  */}

            <img src={logo} alt="CareerNest" className="w-1/2 mx-auto" />

            <p className=" text-sm text-gray-600 dark:text-gray-400">
              Empowering students and freshers to explore, learn, and launch
              their dream careers.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="/jobs"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Job Board
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Career Blogs
                </a>
              </li>
              <li>
                <a
                  href="/resume-builder"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Resume Builder
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/notes"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  My Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="/guides"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Career Guides
                </a>
              </li>
              <li>
                <a
                  href="/tips"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Interview Tips
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  Career Tools
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-blue-600 dark:hover:text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Subscribe for updates and job alerts.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 rounded-l bg-gray-100 dark:bg-gray-800 text-sm w-full focus:outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r text-sm text-white hover:bg-blue-700">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4 text-gray-500 dark:text-gray-400">
              <a href="#">
                <i className="ri-linkedin-fill hover:text-blue-600 dark:hover:text-white"></i>
              </a>
              <a href="#">
                <i className="ri-facebook-fill hover:text-blue-600 dark:hover:text-white"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line hover:text-pink-500 dark:hover:text-white"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-x-line hover:text-gray-900 dark:hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t border-gray-200 dark:border-gray-800 pt-4">
          © {new Date().getFullYear()} CareerNest. Built with ❤️ by passionate
          learners.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
