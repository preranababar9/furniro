import React from "react";
import about1 from "/images/about1.jpg";
import about2 from "/images/about2.jpg";

const About = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div>
          <h2 className="text-center max-md:text-3xl text-4xl font-medium font-semibold pb-16">
            About Furniro
          </h2>
        </div>

        <div className="flex gap-10 items-center max-md:flex-col mb-20">
          <img src={about1} alt="" className="lg:h-1/3 lg:w-1/2" />

          <div>
            <h5 className="font-bold text-xl pb-5">Vision and business idea</h5>
            <p className="text-md pb-5 text-grey max-md:text-sm ">
              “To create a better everyday life for the many people”, this is
              the FURNIRO vision. Our business idea is “to offer a wide range of
              well-designed, functional home furnishing products at prices so
              low that as many people as possible will be able to afford them”.
            </p>

            <p className="text-md text-grey max-md:text-sm ">
              We work hard to achieve quality at affordable prices for our
              customers through optimising our entire value chain, by building
              long-term supplier relationships, investing in highly automated
              production and producing large volumes. Our vision also goes
              beyond home furnishing. We want to create a better everyday for
              all people impacted by our business.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-10 max-md:flex-col ">
          <img src={about2} alt="" className="lg:h-1/4 lg:w-1/2" />

          <div>
            <h5 className="font-bold text-xl pb-5">Investing for the future</h5>
            <p className="text-md pb-5 text-grey max-md:text-sm ">
              The key financial principle of the FURNIRO Group is to grow by using
              our available resources. In other words, we earn our money before
              we spend it, making it possible for us to make long-term
              investments for the future.
            </p>

            <p className="text-md text-grey max-md:text-sm ">
              The FURNIRO vision is the foundation for our growth. We want to make
              sure that FURNIRO is accessible so that more people can create a
              better everyday life at home. We reinvest a majority of our
              profits in existing and new FURNIRO stores, as well as in product
              development, sustainable solutions and by continuously lowering
              prices to our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
