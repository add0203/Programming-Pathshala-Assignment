import React from "react";
import aboutImg from "../assets/about.png";
import CountUp from "react-countup";
import { IoPeople } from "react-icons/io5";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 dark:text-darkh1">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 dark:text-darkh2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="dark:text-black">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 dark:text-gray900">
            <div className="space-y-8">
              <div className="flex items-center gap-4 ">
                <img src={IoPeople} alt="" className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    {/* 2,245,341 */}
                    <CountUp end={2245341} duration={7} separator="," />
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <img src="/src/assets/icons/clubs.png" alt="" /> */}
                <img src={IoPeople} alt="" className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={46328} duration={7} separator="," />
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <img src={IoPeople} alt="" className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={828867} duration={7} separator="," />
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <img src="/src/assets/icons/payments.png" alt="" /> */}
                <img src={IoPeople} alt="" className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={1926436} duration={7} separator="," />
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
