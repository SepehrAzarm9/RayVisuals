import React from "react";
import Slider from "react-slick";
import Profile1 from "../../../../components/assets/images/profile.png";
import Profile2 from "../../../../components/assets/images/profile.png";
import Profile3 from "../../../../components/assets/images/profile.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stephen",
      title: "Youtuber",
      image: Profile1, // replace with your image path
      feedback:
        "Working with Rayan was a game-changer for our project. Their attention to detail and deep understanding of user experience helped us streamline our website's design, resulting in higher user engagement and satisfaction. The collaborative process was smooth, and the final product exceeded our expectations",
    },
    {
      name: "Rashid",
      title: "Content creator",
      image: Profile2, // replace with your image path
      feedback:
        "We had the pleasure of partnering with Rayan for our app's design overhaul. They brought fresh, innovative ideas to the table, transforming our user interface into something both visually appealing and highly functional. Their work truly enhanced the overall user journey, making our app more intuitive and engaging",
    },
    {
      name: "James",
      title: "Youtuber",
      image: Profile3, // replace with your image path
      feedback:
        "I cannot recommend Rayan enough! Their expertise in UX/UI design made all the difference in launching our website successfully. They quickly grasped our vision and turned it into a seamless and attractive user experience. Their professionalism and creativity made the entire process enjoyable and stress-free",
    },
  ];

  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: "60px", // Padding on either side of the center slide
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // Adjust settings for small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerPadding: "40px", // Reduce center padding
        },
      },
      {
        breakpoint: 1024, // Adjust settings for medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div className="my-60 h-fit  w-[99vw] py-8 overflow-hidden bg-[#05081B]">
      <h2 className="text-center text-4xl font-bold font-poppins  my-8">
        What Our Clients Say About Us
      </h2>
      <Slider {...settings} className="mx-auto" style={{ maxWidth: "1200px" }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div
              // className="relative  m-8   bg-gray-800 p-8 rounded-3xl shadow-lg transform w-1/5 skew-y-1"
              // className="relative bg-[#151939] m-8 p-8 rounded-3xl shadow-lg transform skew-y-1 w-80 lg:w-[300px] mx-auto"
              className="relative p-8 m-8 bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform scale-90 slick-center:scale-105 skew-y-1 w-80 mx-auto"
            >
              <div className="absolute  inset-0 bg-[#000212] transform -skew-y-6 rounded-3xl"></div>
              <div className="relative z-10 text-center flex flex-col justify-center items-center">
                <div className="absolute -top-16 flex justify-center mb-4">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>

                <h2 className="text-white text-xl font-bold mt-10">
                  {testimonial.name}
                </h2>
                <p className="text-blue-400 mb-2">{testimonial.title}</p>
                <p className="text-gray-300 mt-4">{testimonial.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
