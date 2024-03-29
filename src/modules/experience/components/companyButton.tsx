/* eslint-disable @typescript-eslint/no-unused-vars */

import exp from "constants";
import { motion } from "framer-motion";
import React from "react";
import ChevronRight from "../../../common/svgs/chevronRight";
import { InfoJob } from "../../../domain/interfaces";

type Props = {
  experiences: Pick<InfoJob, "company">;
  onClick: () => void;
  active: boolean;
  inView: boolean;
};
const CompanyButton = ({
  experiences,
  onClick,
  active,
  inView,
}: Props): JSX.Element => {
  return (
    <motion.div
      className="relative w-full"
      animate={
        inView ? { opacity: 1, transition: { delay: 1 } } : { opacity: 0 }
      }
    >
      <button
        className={`w-full flex relative font-Inter items-center text-xl text-left py-2 md:px-6 px-4 z-20 
        ${active ? "text-redLight" : "text-grayMedium dark:text-grayLight"}  `}
        onClick={onClick}
      >
        {experiences.company}
      </button>
      {active && (
        <motion.div
          className=" rounded absolute top-0 bottom-0 left-0 right-0 bg-whiteBasic dark:bg-secondaryDark/20 z-10 flex justify-end"
          layoutId="companyBg"
        >
          <ChevronRight
            width="25px"
            className="hidden md:block mr-4 stroke-redLight "
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompanyButton;
