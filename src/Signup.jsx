import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/signup', data)
      .then((response) => {
        const {user} = response.data;
        // store the token in local storage
        localStorage.setItem(
          'auth',
          JSON.stringify({
              user,
          })
      );
        console.log("Data Submitted Successfully ", response.data);
        swal({
          title: "Account Created!",
          text: "Your account has been successfully created.",
          icon: "success",
          button: "OK",
        });

        setData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phone: "",
          company: "",
          interests: [],
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          button: "OK",
        });
      });
  };

  const handleInterestToggle = (interest) => {
    setData((prevData) => {
      const isSelected = prevData.interests.includes(interest);
      return {
        ...prevData,
        interests: isSelected
          ? prevData.interests.filter((item) => item !== interest)
          : [...prevData.interests, interest],
      };
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Create an Account
        </h1>
        <p className="text-gray-500 text-center mb-6">
          "Join us today to get exclusive access to features and updates."
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          {/* Phone Number and Company */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={data.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Company"
                required
              />
            </div>
          </div>
          {/* Interests */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Areas
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                "Health Care", "Weight Loss", "Muscle Building", "Yoga and Meditation", "Productivity", "Skill Development",
                "Time Management", "Mental Wellness", "Diet and Nutrition", "Sports Training", "Financial Planning", "Language Learning"
              ].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${data.interests.includes(interest)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-900"
                    }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login here
              </NavLink>
            </p>
            <p className="text-sm text-gray-600">
              Want to login as Admin ?{" "}
              <NavLink
                to="/AdminSignup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up here
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
