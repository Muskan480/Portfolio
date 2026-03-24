import { motion } from 'motion/react';
import { Code2, Layout, Server, Database, Cloud, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Java', 'JavaScript', 'Python', 'C', 'MySQL'],
  },
  {
    title: 'Web Development',
    icon: <Layout className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'Basic React'],
  },
  {
    title: 'Soft Skills',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['Problem-Solving', 'Logical Thinking', 'Communication', 'Teamwork', 'Time Management'],
  },
  {
    title: 'Certifications',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['Python (Excel Ed)', 'Google Cloud', 'MongoDB', 'Oracle OCP'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            TECH <span className="text-muted">STACK</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive list of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-background hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-muted group-hover:text-foreground transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono bg-white/5 text-muted rounded-full border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
