import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              LET'S <span className="text-muted">CONNECT</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:muskanydv480@gmail.com"
                className="group flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-muted transition-colors"
              >
                <Mail className="w-8 h-8" />
                muskanydv480@gmail.com
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
              <p className="text-muted text-lg">Phone: +91 7015415596</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted">Socials</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.linkedin.com/in/muskanyadav480/" className="text-lg hover:text-muted transition-colors">LinkedIn</a>
                  <a href="https://github.com/Muskan480" className="text-lg hover:text-muted transition-colors">GitHub</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted">Location</h4>
                <p className="text-lg">Haryana (Rewari)</p>
                <p className="text-muted text-sm">India</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted font-mono"
        >
          <p>© 2026 MUSKAN. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT & MOTION</p>
        </motion.div>
      </div>
    </section>
  );
}
