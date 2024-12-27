import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Signup() {

  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    interests: [], // To store selected interests

  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      company: data.company,
      interests: data.interests,

    };

    axios.post('/api/signup', userData).then((response) => {
      console.log("Data Submitted Successfully ", response.data);
      swal({
        title: "Account Created!",
        text: "Your account has been successfully created.",
        icon: "success",
        button: "OK",
      });
      // Reset form data
      setData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        interests: "",
      });

    }).catch((error) => {
      console.error(error);
      swal({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        button: "OK",
      });
    });

  }

  const handleInterestToggle = (interest) => {
    setData((prevData) => {
      const isSelected = prevData.interests.includes(interest);
      return {
        ...prevData,
        interests: isSelected
          ? prevData.interests.filter((item) => item !== interest)
          : [...prevData.interests, interest],
      };
    })
  }

  return (
    <>
      <div className="max-w-md mx-auto my-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Sign Up</h2>
        <p className="text-center text-gray-600 mb-8">
          Join us today to get exclusive access to features and updates. Fill in your details below to create your account.
        </p>

        {/* form section for clients to fill in details */}
        <form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
          {/* Email */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>

          {/* First and Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="firstName"
                className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                First Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="lastName"
                className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Phone and Company */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Phone Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="company"
                id="company"
                value={data.company}
                onChange={handleChange}
                className="block py-3 px-4 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="company"
                className="absolute text-sm text-gray-500 top-3 left-4 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Company
              </label>
            </div>
          </div>

          {/* Interest Areas */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Areas</label>
            <div className="flex flex-wrap gap-3">
              {[
                "Health Care",
                "Weight Loss",
                "Muscle Building",
                "Yoga and Meditation",
                "Productivity",
                "Skill Development",
                "Time Management",
                "Mental Wellness",
                "Diet and Nutrition",
                "Sports Training",
                "Financial Planning",
                "Language Learning",
              ].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  aria-pressed={data.interests.includes(interest)}
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
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>






      </div>



    </>
  )
}

export default Signup
