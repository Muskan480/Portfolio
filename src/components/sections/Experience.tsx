import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Vitality',
    role: 'Frontend Developer Intern',
    period: 'May 2025 – July 2025',
    description: 'Built responsive and interactive web pages using HTML, CSS, and JavaScript. Enhanced UI/UX design to improve user engagement and optimized code for performance.',
  },
  {
    company: 'Poornima University, Jaipur',
    role: 'BTech Computer Science and Engineering',
    period: '2024 – 2028 (Onoing)',
    description: 'Pursuing a Bachelor of Technology in Computer Science and Engineering with a focus on software development and emerging technologies.',
  },
  {
    company: 'Achievements',
    role: 'Certifications & Awards',
    period: 'Completed',
    description: 'Oracle Certified Professional, MongoDB Certified, Google Cloud Certified, and participant in Google Solution Challenge.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            EXPERIENCE <span className="text-muted">& ACHIEVEMENTS</span>
          </h2>
          <p className="text-muted max-w-xl">
            My professional journey and key milestones in the software industry.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 p-8 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-all"
            >
              <div className="text-sm font-mono text-muted uppercase tracking-widest pt-1">
                {exp.period}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-glow transition-all">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-muted mb-4">{exp.company}</p>
                <p className="text-muted leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
