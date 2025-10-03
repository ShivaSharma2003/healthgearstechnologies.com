import { motion } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiHeart,
  FiGlobe,
  FiCheck,
  FiClock,
  FiSmile,
  FiThumbsUp,
  FiSettings,
  FiFlag
} from "react-icons/fi";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    bio: "20+ years of experience in medical technology and healthcare innovation"
  },
  {
    name: "Michael Roberts",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    bio: "Former lead engineer at major healthcare companies, specialized in ultrasound systems"
  },
  {
    name: "Dr. Emily Martinez",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
    bio: "Board-certified radiologist with expertise in diagnostic imaging"
  },
  {
    name: "James Wilson",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1563833717765-00462801314e?auto=format&fit=crop&w=300&q=80",
    bio: "PhD in Biomedical Engineering, leading our innovation initiatives"
  }
];

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started with a vision to revolutionize medical imaging"
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Expanded operations to 20+ countries"
  },
  {
    year: "2018",
    title: "Innovation Award",
    description: "Received Healthcare Technology Innovation of the Year"
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Launched AI-powered diagnostic tools"
  },
  {
    year: "2023",
    title: "Market Leader",
    description: "Became industry leader in ultrasound technology"
  }
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-center opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Healthcare Through Innovation
            </h1>
            <p className="text-xl text-blue-100">
              At Health Gear Technologies, we're dedicated to advancing healthcare through 
              cutting-edge technology and unwavering commitment to patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <FiTarget size={24} />
                  <h3 className="text-lg font-semibold">Our Mission</h3>
                </div>
                <p className="text-slate-600">
                  To revolutionize healthcare delivery through innovative medical imaging 
                  solutions that enhance diagnostic accuracy, improve patient outcomes, 
                  and empower healthcare providers.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <FiHeart size={24} />
                  <h3 className="text-lg font-semibold">Our Vision</h3>
                </div>
                <p className="text-slate-600">
                  To be the global leader in healthcare technology, setting new standards 
                  for innovation, reliability, and patient care excellence.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <FiThumbsUp size={24} />
                  <h3 className="text-lg font-semibold">Our Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" />
                    <span className="text-slate-600">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" />
                    <span className="text-slate-600">Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" />
                    <span className="text-slate-600">Integrity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-blue-600" />
                    <span className="text-slate-600">Collaboration</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000"
                  alt="Medical professionals collaborating"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-blue-100 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
            <p className="text-slate-600 mt-4">
              A timeline of innovation and growth in healthcare technology
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-blue-100 -translate-x-1/2" />

            {/* Timeline entries */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                  }`}
                >
                  <div className={`text-right ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                  <div className={index % 2 === 0 ? "md:text-left" : "md:text-right"}>
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto relative z-10">
                      <FiFlag size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Our Leadership</h2>
            <p className="text-slate-600 mt-4">
              Meet the experts leading our mission to transform healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-blue-300" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-blue-300" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-blue-200">Team Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-blue-300" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">40+</div>
              <div className="text-blue-200">Countries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-blue-300" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-blue-200">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We foster an environment of innovation, collaboration, and continuous learning. 
                Our team is driven by a shared passion for improving healthcare through 
                technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiSmile className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Employee-First Culture
                    </h3>
                    <p className="text-slate-600">
                      We believe happy employees lead to better innovation and customer satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiSettings className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Continuous Innovation
                    </h3>
                    <p className="text-slate-600">
                      We encourage creative thinking and embrace new technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiUsers className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Collaborative Spirit
                    </h3>
                    <p className="text-slate-600">
                      We work together across teams to achieve exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000"
                  alt="Team collaboration"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-blue-100 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Mission to Transform Healthcare
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                We're always looking for talented individuals who share our passion
                for innovation and excellence in healthcare technology.
              </p>
              
              <div className="flex justify-center gap-4">
                <a
                  href="/careers"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Careers
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
