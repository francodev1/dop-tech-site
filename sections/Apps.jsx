'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import AppCard from '../components/AppCard';
import AppModal from '../components/AppModal';
import styles from '../styles';

// Dados dos aplicativos - customize conforme suas necessidades
const apps = [
  {
    id: 1,
    icon: '/headset.svg',
    title: 'VR Experience',
    category: 'Realidade Virtual',
    description: 'Aplicativo de realidade virtual imersiva que oferece experiências únicas e interativas para os usuários explorarem novos mundos.',
    features: [
      'Experiências VR totalmente imersivas',
      'Interface intuitiva e fácil de usar',
      'Suporte para múltiplos dispositivos VR',
      'Conteúdo atualizado regularmente',
      'Modo multiplayer integrado',
    ],
    link: '#',
  },
  {
    id: 2,
    icon: '/vrpano.svg',
    title: 'Metaverse Platform',
    category: 'Metaverso',
    description: 'Plataforma completa de metaverso onde você pode criar, explorar e interagir em mundos virtuais compartilhados.',
    features: [
      'Criação de avatares personalizados',
      'Mundos virtuais interativos',
      'Economia digital integrada',
      'Eventos e reuniões virtuais',
      'Integração com blockchain',
    ],
    link: '#',
  },
  {
    id: 3,
    icon: '/map.png',
    title: 'World Explorer',
    category: 'Exploração',
    description: 'Explore mundos virtuais incríveis com mapas interativos e navegação em tempo real.',
    features: [
      'Mapas 3D interativos',
      'Navegação em tempo real',
      'Pontos de interesse personalizados',
      'Compartilhamento de localizações',
      'Modo exploração guiada',
    ],
    link: '#',
  },
  {
    id: 4,
    icon: '/get-started.png',
    title: 'Quick Start',
    category: 'Onboarding',
    description: 'Plataforma de integração rápida que facilita o onboarding de novos usuários com tutoriais interativos.',
    features: [
      'Tutoriais interativos passo a passo',
      'Suporte em tempo real',
      'Documentação completa',
      'Vídeos explicativos',
      'Comunidade ativa',
    ],
    link: '#',
  },
  {
    id: 5,
    icon: '/whats-new.png',
    title: 'Innovation Hub',
    category: 'Inovação',
    description: 'Centro de inovação com as últimas novidades e recursos mais recentes do ecossistema.',
    features: [
      'Atualizações em tempo real',
      'Lançamentos exclusivos',
      'Beta testing de novos recursos',
      'Feedback direto com desenvolvedores',
      'Roadmap de produtos',
    ],
    link: '#',
  },
  {
    id: 6,
    icon: '/stamp.png',
    title: 'Certification',
    category: 'Certificação',
    description: 'Sistema de certificação e conquistas para validar suas habilidades e progresso na plataforma.',
    features: [
      'Certificados digitais verificáveis',
      'Sistema de badges e conquistas',
      'Perfil profissional completo',
      'Compartilhamento em redes sociais',
      'Ranking de usuários',
    ],
    link: '#',
  },
];

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppClick = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedApp(null), 300);
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id="apps">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nossos Aplicativos" textStyles="text-center" />
        <TitleText
          title={
            <>
              Explore nossas soluções <br className="md:block hidden" /> digitais inovadoras
            </>
          }
          textStyles="text-center"
        />

        <motion.p
          variants={staggerContainer}
          className="mt-[20px] text-center text-secondary-white text-[18px] max-w-3xl mx-auto"
        >
          Descubra nossa coleção de aplicativos e plataformas desenvolvidos com as tecnologias mais modernas. Clique em qualquer card para saber mais sobre cada solução.
        </motion.p>

        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              index={index}
              onClick={() => handleAppClick(app)}
            />
          ))}
        </div>
      </motion.div>

      <AppModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        app={selectedApp}
      />
    </section>
  );
};

export default Apps;
