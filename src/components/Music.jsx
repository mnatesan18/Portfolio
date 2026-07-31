import { motion } from 'framer-motion'

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
}
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.18 } },
}

export default function Music() {
  return (
    <section id="music" className="section">
      <div className="container">
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beyond Code
        </motion.span>

        <div className="music-grid">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="music-tagline">
              Playing the{' '}
              <span className="gradient-text">Piano</span>
            </h2>
            <p className="music-body">
              Music is my escape. I love playing Rajnikanth classics on the piano
              — each note an expression of South India's vibrant culture and
              cinematic soul.
            </p>
            <p className="music-body">
              The piano teaches me what programming can't: patience, feel, and
              the art of improvisation.
            </p>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/f6YDzCIsmiw?si=j1MlW06bGEzrdxmS"
                title="Muthu playing piano — Rajnikanth classic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
