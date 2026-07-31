import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { FaGithub, FaBookOpen } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    icon:  <SiLeetcode />,
    title: 'Problem Solving',
    desc:  'Consistently tackling algorithmic challenges on LeetCode — sharpening data structures, graph theory, and dynamic programming skills daily.',
    link:  'https://leetcode.com/u/MUTHUNATESAN18/',
    cta:   'View Profile',
  },
  {
    icon:  <FaBookOpen />,
    title: 'Research Publication',
    desc:  'Published a chapter in Springer — contributing novel research findings to the academic community and pushing boundaries of the field.',
    link:  'https://link.springer.com/chapter/10.1007/978-981-99-9442-7_28',
    cta:   'Read Paper',
  },
  {
    icon:  <FaGithub />,
    title: 'Open Source',
    desc:  'Explore personal projects, experiments, and collaborative open-source work. Code is always cleaner the second time around.',
    link:  'https://github.com/mnatesan18',
    cta:   'Explore GitHub',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}
const cardAnim = {
  hidden: { opacity: 0, y: 54 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          What I've built
        </motion.span>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          Projects &amp; <span className="gradient-text">Work</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={cardAnim}
              onMouseMove={handleMouseMove}
            >
              <div className="card-icon-wrap">{p.icon}</div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <span className="card-arrow">
                {p.cta} <FiArrowUpRight />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
