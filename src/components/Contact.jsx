import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  {
    icon:  <FaLinkedinIn />,
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/muthu-natesan-muthurajan-758a101a9/',
  },
  {
    icon:  <FaGithub />,
    label: 'GitHub',
    href:  'https://github.com/mnatesan18',
  },
  {
    icon:  <FaXTwitter />,
    label: 'Twitter / X',
    href:  'https://x.com/@natesan_muthu',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-inner">
          <motion.span
            className="label"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Say Hello
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p
            className="contact-sub"
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
          >
            Whether it's a project, collaboration, or just a chat — I'm always
            happy to connect.
          </motion.p>

          <motion.div
            className="contact-socials"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
              >
                {s.icon}
                <span>{s.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
