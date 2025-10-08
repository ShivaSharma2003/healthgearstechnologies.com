import { motion } from "framer-motion";
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiCheck,
  FiSmile,
  FiThumbsUp,
  FiSettings,
} from "react-icons/fi";

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
    </main>
  );
}
