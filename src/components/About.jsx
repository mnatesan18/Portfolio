import { motion } from 'framer-motion'
import { FaCode, FaMusic, FaBook } from 'react-icons/fa'
import { MdSportsCricket } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'

const MY_PHOTO = 'https://raw.githubusercontent.com/mnatesan18/Portfolio/main/myself.jpg'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay } },
})

const pills = [
  { icon: <FaCode />,           label: 'Developer'       },
  { icon: <MdSportsCricket />,  label: 'Cricketer'       },
  { icon: <FaMusic />,          label: 'Pianist'         },
  { icon: <FaBook />,           label: 'Researcher'      },
  { icon: <SiLeetcode />,       label: 'Problem Solver'  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.span
          className="label"
          variants={fadeUp()} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          About Me
        </motion.span>

        <div className="about-grid">
          <motion.div
            className="photo-wrap"
            variants={fadeUp()} initial="hidden"
            whileInView="show" viewport={{ once: true }}
          >
            <img src={MY_PHOTO} alt="Muthu Natesan" className="about-photo" />
          </motion.div>

          <motion.div
            className="about-text"
            variants={fadeUp(0.15)} initial="hidden"
            whileInView="show" viewport={{ once: true }}
          >
            <h2 className="section-heading">
              Who am <span className="gradient-text">I?</span>
            </h2>
            <p>
              I'm <strong>Muthu Natesan</strong> — a multi-faceted individual who
              codes by day, plays cricket on weekends, and sits at the piano
              whenever the mood strikes. I believe the best engineers are those
              with rich lives outside of code.
            </p>
            <p>
              I've published academic research, consistently solved algorithmic
              challenges, and shipped software projects — all while building
              skills that go far beyond a screen.
            </p>
            <div className="about-pills">
              {pills.map((p) => (
                <span key={p.label} className="pill">
                  {p.icon}&nbsp;{p.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
