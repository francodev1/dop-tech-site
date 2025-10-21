'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre a DoP" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
       <span className="font-extrabold text-white">Dove of Peace Tech</span> é uma empresa cristã que 
       acredita que <span className="font-extrabold text-white">tecnologia</span> deve trazer 
       <span className="font-extrabold text-white"> paz</span>, não caos. 🕊️<br /><br />
       
       Desenvolvemos soluções de <span className="font-extrabold text-white">automação e IA</span> que 
       eliminam trabalho repetitivo, desafogam empresários e liberam tempo para o que realmente importa.
       <br /><br />
       
       Essa é a verdadeira <span className="font-extrabold text-white">paz tecnológica</span>: 
       quando sistemas trabalham por você, e você pode focar em crescer com tranquilidade. 
       Vamos juntos <span className="font-extrabold text-white">transformar</span> seu negócio? 🚀

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
