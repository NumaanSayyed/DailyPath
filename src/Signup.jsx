import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Signup() {

    const [data , setData] = useState({
        email : "",
        password:"",
        firstName:"",
        lastName: "",
        phone: "",
        company: "",
        interests: [], // To store selected interests

    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value
        });
    };


    const handleSubmit = (e) =>{
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

        axios.post('/api/signup', userData).then((response)=>{
            console.log("Data Submitted Successfully " , response.data);
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
          
        }).catch((error)=>{
            console.error(error);
          swal({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            button: "OK",
          });
        });

      }
 
    const handleInterestToggle = (interest) =>{
      setData((prevData)=>{
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

           <form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" value={data.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="password" value={data.password} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="phone" id="phone" value={data.phone} onChange={handleChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="company" id="company" value={data.company} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
    </div>
  </div>
          {/* Add the interest areas */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Areas</label>
            <div className="flex flex-wrap gap-3">
              {["Health Care",
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
                "Language Learning"].map((interest) => (
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
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handleSubmit}>Submit</button>
</form>

     




          </div>



    </>
  )
}

export default Signup
