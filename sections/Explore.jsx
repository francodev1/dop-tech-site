'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Produtos" textStyles="text-center" />
        <TitleText
          title={<>Aguarde <br className="md:block hidden" /> ...</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col min-h-[70vh] gap-5">
  {/* Se quiser usar o exploreWorlds de novo, descomenta este trecho:
  {exploreWorlds.map((world, index) => (
    <ExploreCard
      key={world.id}
      {...world}
      index={index}
      active={active}
      handleClick={setActive}
    />
  ))}
  */}

     <p className="text-lg sm:text-xl md:text-2xl text-white text-center mt-8">
    🚧 <span className="font-extrabold">Aguarde</span>: em breve grandes novidades e projetos
    que vão transformar o jeito de automatizar e escalar o seu negócio.
  </p>
  <p className="text-md sm:text-lg text-gray-300 text-center mt-4">
    Siga a <span className="font-extrabold text-white">DoP Tech</span> e seja o primeiro a descobrir o futuro da automação com IA.
  </p>

  <a
  href="https://instagram.com/dop.tech"
  target="_blank"
  rel="noopener noreferrer"
  className="mx-auto mt-6 flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
>
  <Image
    src="/instagram.png"
    alt="Instagram"
    width={40}
    height={40}
  />
  Seguir no Instagram
</a>

</div>

      </motion.div>
    </section>
  );
};

export default Explore;
