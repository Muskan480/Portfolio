import { motion } from 'motion/react';
export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              ABOUT <span className="text-muted">ME</span>
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I am a passionate Computer Science student with a strong interest in software development and emerging technologies. I have a solid foundation in programming languages such as Java and a good understanding of data structures and web development.
              </p>
              <p>
                I am eager to enhance my technical skills and stay updated with the latest industry trends. I am dedicated, quick to learn, and always ready to take on new challenges to build a successful career in the IT field.
              </p>
              <p className="text-sm italic">
                I hereby declare that the above-mentioned information is true and correct to the best of my knowledge and belief.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 group"
          >
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="object-cover w-full h-full grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}