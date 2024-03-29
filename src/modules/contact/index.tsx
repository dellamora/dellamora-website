/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import ButtonOutline from "../../common/components/buttonOutline";
import Section from "../../common/components/section";
import { DarkModeContext } from "../../common/context/darkMode";

const Contact = (): JSX.Element => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const [inView, setInView] = useState(false);
  return (
    <Section
      className="body-font relative"
      id={"contact"}
      setIsInView={state => {
        setInView(state);
      }}
    >
      <div className="absolute inset-0 bg-primaryLight dark:bg-primaryDark ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131362.3371708613!2d-51.0663674021011!3d-30.09587027455416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1669444290001!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            filter: ` grayscale(1) contrast(1.2) ${
              isDark ? "opacity(0.1)" : "opacity(0.3)"
            }`,
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            inView ? { opacity: 1, transition: { delay: 1.2 } } : { opacity: 0 }
          }
          className="gap-3 items-center bg-primaryLight dark:bg-secondaryDark lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <div className="flex flex-row font-Inter font-bold text-4xl gap-3">
            <h1>
              Let&apos;s create something{" "}
              <span className="text-redLight dark:text-redLight">
                together!
              </span>
            </h1>
          </div>
          <p className="font-Inter text-grayMedium ">
            I&apos;m availiable for freelance work – especially ambitious and
            creative projects. Feel free to send any request (:
          </p>
          <ButtonOutline
            href="mailto:francielle@dellamora.dev"
            isLink={false}
            className="w-full rounded transition-colors hover:bg-grayLight/20 dark:hover:bg-primaryDark/20 text-redLight border-redLight dark:border-redLight  dark:text-redLight text-center"
          >
            Send Mail
          </ButtonOutline>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
