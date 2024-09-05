import React from "react";
import about1 from "/images/about1.jpg";

const About = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div>
          <h2 className="text-center text-4xl font-medium font-semibold pb-16">
            About Furniro
          </h2>
        </div>
        <div className="flex gap-10">
          <img src={about1} alt="" className="h-1/4 w-1/2" />

          <div>
            <h5 className="font-bold text-xl pb-5">Vision and business idea</h5>
            <p className="text-md pb-5">
              “To create a better everyday life for the many people”, this is
              the FURNIRO vision. Our business idea is “to offer a wide range of
              well-designed, functional home furnishing products at prices so
              low that as many people as possible will be able to afford them”.
            </p>

            <p className="text-md ">
              We work hard to achieve quality at affordable prices for our
              customers through optimising our entire value chain, by building
              long-term supplier relationships, investing in highly automated
              production and producing large volumes. Our vision also goes
              beyond home furnishing. We want to create a better everyday for
              all people impacted by our business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
