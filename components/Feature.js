import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    key: "Automated Property Management",
    value: "Simplify rent collection, lease management, and property analytics."
  },
  {
    key: "Integrated Maintenance Solutions",
    value: "Ensure timely upkeep with automated scheduling and vendor management."
  },
  {
    key: "Data-driven Insights",
    value: "Harness powerful analytics for informed decision-making and market insights."
  },
  {
    key: "Secure Cloud Infrastructure",
    value: "Protect sensitive data with robust online security measures."
  },
  {
    key: "Scalable Solutions",
    value: "Grow effortlessly with flexible, scalable features tailored to your business needs."
  }
  // test
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Transforming Real Estate Management with Us
            </h3>
            <p className="my-2 text-black-500">
              Explore our comprehensive suite of PropTech solutions, each crafted to streamline and elevate your real estate operations:
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{duration: 2 + index}}
                  variants={scrollAnimation}
                  key={feature.key}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                >
                  <strong>{feature.key}:</strong> {feature.value}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
