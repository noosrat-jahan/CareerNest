import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const feedbackData = [
    {
      Name: "Ayesha Rahman",
      Role: "Final Year CS Student",
      Review:
        "CareerNest helped me prepare for my first interview with confidence.The mentor feedback and resume tips were spot on!I finally understood how to present my skills in a professional way.",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "April 2025",
    },
    {
      Name: " Tanvir Alam",
      Role: "Junior Web Developer at DevForge",
      Review:
        "The mock interviews were incredibly helpful and felt just like the real thing. I improved my communication and got rid of my hesitation. Soon after, I landed my first job in a reputed software company!",
      Rating: "⭐⭐⭐⭐",
      Date: "March 2025",
    },
    {
      Name: "Farzana Hossain",
      Role: "Final Year EEE Student",
      Review:
        "I thought my EEE background wouldn't match with tech. But the platform showed me beginner-friendly tech roles to explore. Now I’m learning frontend development with clear guidance.",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "May 2025",
    },
    {
      Name: "Nusrat Jahan",
      Role: "BSc in Software Engineering, NSU",
      Review:
        "I was confused about how to get started in tech. CareerNest’s structured roadmap cleared my doubts completely. Now I feel confident to build projects and apply for internships.",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "january 2025",
    },
    {
      Name: "Rakib Hasan",
      Role: "Freelance Frontend Developer",
      Review:
        "I loved how the platform focused on practical learning over theory. Each section felt relevant to real-world job demands. CareerNest added real value to my portfolio.",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "February 2025",
    },
    {
      Name: "Mahira Kabir",
      Role: "Job Seeker (Career Switcher from Accounting)",
      Review:
        "Switching careers felt scary, but CareerNest made it manageable. I followed the beginner-friendly tech path and mentor advice closely. Now I’m freelancing and building my first client base..",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "March 2025",
    },
    {
      Name: "Shadman Chowdhuryn",
      Role: "Intern at ByteTech",
      Review:
        "CareerNest’s resume review was the most helpful part for me. I realized how small changes make a big impact on job calls. Thanks to their guidance, I secured my first internship.",
      Rating: "⭐⭐⭐⭐⭐",
      Date: "May 2025",
    },
  ];
  return (
    <div>
      <div className="slider-container p-2">
        <h1 className="scroll-m-20 my-8 text-center font-poppins text-4xl font-bold tracking-tight text-balance">
          What Users Say About CareerNest
        </h1>
        <Slider {...settings} className="slider-container ">
          {feedbackData.map((feedback) => (
            <div key={feedback} className="px-2">
              <div className="border border-gray-400 rounded-md p-4">
                <p>{feedback.Review}</p>
                <div>
                  <img src="" alt="" />
                  <h4>{feedback.Name}</h4>
                  <h4>{feedback.Role}</h4>
                  <h3>{feedback.Rating}</h3>
                  <h5>{feedback.Date}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
