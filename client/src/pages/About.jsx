import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10  flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            FOREVER is a modern e-commerce clothing brand built for those who
            value style, comfort, and quality. Our mission is to redefine
            everyday fashion by offering carefully curated collections that
            blend timeless design with contemporary trends. From casual wear to
            statement pieces, every product is crafted with attention to detail,
            premium fabrics, and lasting comfort.
          </p>
          <p>
            As a digital-first clothing app, FOREVER delivers a seamless
            shopping experience—making it easy to explore, choose, and shop
            fashion that truly lasts. We believe clothing is more than just what
            you wear; it’s how you express yourself.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at FOREVER is to empower customer with choice,
            convenience and quality of the stuff which we are providing. The
            quality which never looses its charm and remains untouched.
            Commitment to delivering we have proven.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our use-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
