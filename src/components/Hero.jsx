import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 44 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Animated background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Dot-grid overlay */}
      <div className="hero-grid" />

      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Hello, World — I'm glad you're here
          </motion.span>

          <motion.h1 variants={item} className="hero-name">
            I'm <span className="gradient-text">Muthu</span>
          </motion.h1>

          <motion.div variants={item} className="hero-typerow">
            <span>A passionate&nbsp;</span>
            <span className="type-accent">
              <TypeAnimation
                sequence={[
                  'Programmer.',  2600,
                  'Cricketer.',   2000,
                  'Pianist.',     2000,
                  'Researcher.',  2000,
                  'Problem Solver.', 2000,
                ]}
                repeat={Infinity}
                speed={55}
                deletionSpeed={70}
              />
            </span>
          </motion.div>

          <motion.p variants={item} className="hero-desc">
            Building cool things. Breaking boundaries on the pitch.
            Playing Tamil classics on the piano.
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch <HiOutlineMail />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        ↓
      </motion.div>
    </section>
  )
}
