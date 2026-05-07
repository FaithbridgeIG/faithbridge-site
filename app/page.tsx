'use client';

import Script from 'next/script';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_SRC =
  'https://i.ibb.co/F42KSnV9/Chat-GPT-Image-Mar-29-2026-08-49-04-PM.png';

export default function FaithBridgeComingSoonPage() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, -60]);

  const trustBadges = [
    'Home Insurance',
    'Life Insurance',
    'Auto Insurance',
    'Condo Insurance',
    'General Liability',
    'Small Business',
  ];

  const highlights = [
    {
      title: 'Protection for Every Chapter',
      desc: 'Coverage built for first homes, growing households, and the milestones that shape your life.',
    },
    {
      title: 'Clear Advice, No Guesswork',
      desc: 'Policies explained in plain language so you can feel confident in what you are choosing.',
    },
    {
      title: 'Personal, Relationship-First Service',
      desc: 'A thoughtful approach rooted in trust, care, and long-term guidance for the people you love most.',
    },
  ];

  const polaroids = [
    {
      title: 'Policy Review',
      image:
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
      note: 'A thoughtful review of your current coverage so the details match the life you are living now.',
      rotation: '-rotate-1',
    },
    {
      title: 'First Home Insurance',
      image:
        'https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg?auto=compress&cs=tinysrgb&w=1200',
      note: 'Protection that helps new homeowners feel steady, informed, and ready for what comes next.',
      rotation: 'rotate-1',
    },
    {
      title: 'Commercial Coverage',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      note: 'Coverage solutions for growing businesses, daily operations, and the momentum behind a new venture.',
      rotation: '-rotate-1',
    },
    {
      title: 'Personal Consultation',
      image:
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      note: 'A calm, personal conversation about what matters most and how to protect it with confidence.',
      rotation: 'rotate-1',
    },
  ];

  const target = new Date('2026-05-01T00:00:00');
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent font-sans text-[#3f352e]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img
          src={HERO_SRC}
          alt="farmhouse background"
          className="h-full w-full object-cover opacity-[0.35] contrast-[1.05] saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.18)_0%,rgba(246,241,232,0.06)_18%,rgba(246,241,232,0.10)_58%,rgba(246,241,232,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,235,0.22),transparent_36%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(92,73,53,0.12),transparent_42%)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: 'url(https://grainy-grad
