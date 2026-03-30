'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FORM_ENDPOINT = 'https://formsubmit.co/Edgar@Faithbridgeinsurancegroup.com';
const HERO_SRC = 'https://i.ibb.co/F42KSnV9/Chat-GPT-Image-Mar-29-2026-08-49-04-PM.png';
const LOGO_SRC = '/logo.png';

export default function FaithBridgeComingSoonPage() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, -60]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const hasAttemptedSubmit = useRef(false);

  function handleLaunchSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') || '').trim();

    if (!email) {
      event.preventDefault();
      setSubmitMessage('Please enter a valid email address.');
      return;
    }

    hasAttemptedSubmit.current = true;
    setIsSubmitting(true);
    setSubmitMessage('Sending...');
  }

  function handleFormFrameLoad() {
    if (!hasAttemptedSubmit.current) return;
    setIsSubmitting(false);
    setSubmitMessage('Thanks — you’re on the list. We’ll be in touch soon.');
    hasAttemptedSubmit.current = false;
  }

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
          style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }}
        />
      </div>

      <iframe name="launch-form-target" className="hidden" onLoad={handleFormFrameLoad} />

      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#f6f1e8]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center">
            <img
              src={LOGO_SRC}
              alt="FaithBridge Insurance logo"
              className="h-9 w-auto max-w-[140px] object-contain"
            />
          </div>

          <div className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#7b7269] md:flex">
            <span>Home</span>
            <span>Family</span>
            <span>Business</span>
          </div>
        </div>
      </div>

      <section className="relative isolate overflow-hidden pt-20">
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
          initial={{ scale: 1.06, x: 0, y: 0 }}
          animate={{ scale: [1.06, 1.0], x: [0, -10, 0], y: [0, -6, 0] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        >
          <img src={HERO_SRC} className="h-full w-full object-cover" alt="Modern farmhouse exterior" />
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0.18 }}
          animate={{ opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.06) 70%)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(20,15,10,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,39,34,0.74)_0%,rgba(31,39,34,0.48)_38%,rgba(31,39,34,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(255,247,231,0.18),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,rgba(246,241,232,0.94))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/85 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#d1a84a]" />
                Launching May 1, 2026
              </div>

              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
                Thoughtful coverage for
                <span className="block text-[#ecd58d]">the life you are building.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
                FaithBridge helps homeowners, families, and business owners find coverage that
                feels clear, personal, and rooted in trust.
              </p>

              <div className="mt-8 flex max-w-3xl flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em] text-white/80">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-10 max-w-2xl rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/10 backdrop-blur-md">
                <form
                  onSubmit={handleLaunchSubmit}
                  action={FORM_ENDPOINT}
                  method="POST"
                  target="launch-form-target"
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input type="hidden" name="_subject" value="Launch Update Request" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email for launch updates"
                    className="flex-1 rounded-[1rem] border border-white/10 bg-white px-4 py-3.5 text-[#2f2b27] outline-none placeholder:text-[#81776d]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-[1rem] bg-[#32443a] px-6 py-3.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28372f] disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Launch Updates'}
                  </button>
                </form>
                {submitMessage ? (
                  <p className="px-1 pt-3 text-sm text-white/88">{submitMessage}</p>
                ) : null}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="hidden lg:block"
            >
              <div className="ml-auto max-w-md rounded-[2rem] border border-white/20 bg-[rgba(255,250,243,0.88)] p-6 shadow-[0_30px_90px_rgba(33,24,18,0.18)] backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#9d7d53]">
                  Why FaithBridge
                </p>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-[1.5rem] bg-white/80 p-5 shadow-sm">
                    <p className="font-serif text-2xl leading-tight text-[#32443a]">
                      Coverage guidance that feels personal, calm, and clear.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ['01', 'Homes'],
                      ['02', 'Families'],
                      ['03', 'Business'],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-[1.25rem] border border-[#eadfd1] bg-white p-4 text-center"
                      >
                        <p className="font-serif text-2xl text-[#32443a]">{value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#7c736b]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="rounded-[2rem] border border-[#ebe0d3] bg-white/95 shadow-[0_20px_50px_rgba(77,55,38,0.08)] transition-all hover:shadow-[0_28px_60px_rgba(77,55,38,0.12)]">
                <div className="p-7">
                  <div className="mb-5 h-px w-14 bg-[#cda44d]" />
                  <h3 className="font-serif text-[28px] leading-tight text-[#32443a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#6f665d]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9d7d53]">
              A better way to buy insurance
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.03em] text-[#3f352e] md:text-6xl">
              More clarity. More confidence. More care.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#6f665d]">
              We believe insurance should feel less transactional and more like trusted guidance
              for the people, places, and plans that matter most.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                'Designed for first homes, family milestones, and new business beginnings.',
                'Built around simple explanations, thoughtful advice, and dependable service.',
                'Created to feel approachable, warm, and genuinely helpful from the start.',
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-[1.5rem] border border-[#e7dbce] bg-[#fbf8f3] px-5 py-4 text-sm leading-7 text-[#5f5851] shadow-sm"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {polaroids.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative rounded-md bg-white p-3 shadow-[0_25px_55px_rgba(69,50,37,0.14)] ${item.rotation}`}
              >
                <div className="absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-4deg] rounded-sm bg-[#e8ddcf] shadow-md" />
                <div className="overflow-hidden rounded-sm border border-[#efe4d7] bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-2 pb-2 pt-4 text-center">
                  <h4 className="font-serif text-2xl text-[#32443a]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#6f665d]">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-12">
        <div className="rounded-[2.5rem] border border-[#eadfd2] bg-[linear-gradient(180deg,#fffaf4_0%,#f6efe6_100%)] px-8 py-12 text-center shadow-[0_30px_70px_rgba(78,56,39,0.08)]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9d7d53]">
            Launching May 1, 2026
          </p>
          <h3 className="mt-4 font-serif text-4xl text-[#3f352e] md:text-5xl">
            Be among the first to experience FaithBridge Insurance.
          </h3>

          <div className="mx-auto mt-8 max-w-xl">
            <form
              onSubmit={handleLaunchSubmit}
              action={FORM_ENDPOINT}
              method="POST"
              target="launch-form-target"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <input type="hidden" name="_subject" value="Launch Update Request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email for launch updates"
                className="flex-1 rounded-[1rem] border border-[#e5dbcf] bg-white px-4 py-3.5 text-[#2f2b27] outline-none placeholder:text-[#81776d]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[1rem] bg-[#32443a] px-6 py-3.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#28372f] disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Get Launch Updates'}
              </button>
            </form>

            {submitMessage ? (
              <p className="mt-3 text-sm text-[#5f5851]">{submitMessage}</p>
            ) : null}
          </div>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { value: String(days).padStart(2, '0'), label: 'Days' },
              { value: String(hours).padStart(2, '0'), label: 'Hours' },
              { value: String(minutes).padStart(2, '0'), label: 'Minutes' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-[#eadfd1] bg-white/85 px-4 py-5 shadow-sm"
              >
                <p className="font-serif text-3xl text-[#32443a]">{item.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#7b7269]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
