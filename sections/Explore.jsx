'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import AppCard from '../components/AppCard';
import AppModal from '../components/AppModal';

// Produtos DoP Tech - Roadmap 2025
const exploreApps = [
  {
    id: 1,
    icon: '/headset.svg',
    title: 'DoPVision',
    category: 'Dashboard de Tráfego Pago • Lançamento: Dez 2025',
    description: 'Dashboard inteligente que centraliza campanhas, vendas e métricas de tráfego pago. Economize 6h/semana em relatórios manuais com exportação automatizada para WhatsApp, CSV e PDF.',
    features: [
      'Dashboard único para todos os clientes',
      'Métricas automáticas: ROI, ROAS, conversão, ticket médio',
      'Cadastro de vendas (física + online)',
      'Correlação tráfego × vendas reais',
      'Exportação formatada (WhatsApp, CSV, PDF)',
      'OCR de nota fiscal com IA (em breve)',
    ],
    link: null,
  },
  {
    id: 2,
    icon: '/vrpano.svg',
    title: 'DoPAssist',
    category: 'Assistente IA para WhatsApp • Coming Soon Q1 2026',
    description: 'Assistente de IA integrado ao WhatsApp Business que responde clientes 24/7, processa pedidos e escala para humanos quando necessário. Aumente vendas e reduza tempo de resposta em 80%.',
    features: [
      'IA responde automaticamente no WhatsApp Business',
      'Treinamento com FAQs e catálogo de produtos',
      'Processa pedidos e consultas de estoque',
      'Escala para atendente humano quando necessário',
      'Dashboard de analytics e performance',
      'Setup em 10 minutos, sem código',
    ],
    link: null,
  },
  {
    id: 3,
    icon: '/stamp.png',
    title: 'DoPStock',
    category: 'Gestão Inteligente de Estoque • Coming Soon Q2 2026',
    description: 'Sistema de estoque com IA que prevê quando produtos vão acabar, otimiza reposição e identifica itens parados. Reduza rupturas em 70% e economize capital parado.',
    features: [
      'Previsão de demanda com Machine Learning',
      'Alertas automáticos de reposição',
      'Análise de produtos parados (sugestões de promoção)',
      'Integração vendas online + física',
      'Relatórios de giro e lucratividade',
      'Sugestões inteligentes de compra',
    ],
    link: null,
  },
  {
    id: 4,
    icon: '/map.png',
    title: 'DoPFlow',
    category: 'Automação de Processos • Roadmap 2026',
    description: 'Plataforma de automação no-code que conecta seus sistemas e elimina tarefas manuais. Zapier brasileiro com templates prontos para o mercado nacional.',
    features: [
      'Automação sem código (no-code)',
      'Templates prontos para Brasil (Bling, Tiny, WhatsApp API)',
      'Conecta vendas, estoque, financeiro, CRM',
      'Gatilhos inteligentes e ações personalizadas',
      'Integração nativa com apps brasileiros',
      'Interface 100% em português',
    ],
    link: null,
  },
];

const Explore = () => {
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
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nossos Produtos" textStyles="text-center" />
        <TitleText
          title={
            <>
              Automação e IA que trazem <br className="md:block hidden" /> paz tecnológica
            </>
          }
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[20px] text-center text-secondary-white text-[18px] max-w-3xl mx-auto"
        >
          Soluções inteligentes que eliminam trabalho manual, automatizam processos repetitivos 
          e liberam seu tempo para focar no que realmente importa: crescer seu negócio.
        </motion.p>

        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreApps.map((app, index) => (
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

export default Explore;
