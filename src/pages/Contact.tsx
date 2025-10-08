import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiUser,
  FiSend,
  FiCheckCircle,
  FiGlobe,
  FiTool,
  FiActivity,
  FiDollarSign,
  FiBriefcase,
} from "react-icons/fi";

const officeLocations = [
  {
    city: "Jaipur",
    address:
      "115-116, Parshavnath Colony, Janpath, Nirman Nagar, Jaipur, Rajasthan 302019",
    phone: "+91 78500 99148",
    email: "healthgearstechnologies@gmail.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
];

const contactReasons = [
  {
    icon: FiTool,
    title: "Probe Repair Services",
    description: "Professional repair and maintenance for ultrasound probes and transducers",
  },
  {
    icon: FiActivity,
    title: "Ultrasound Repair Services",
    description: "Expert repair services for ultrasound machines and medical imaging equipment",
  },
  {
    icon: FiDollarSign,
    title: "Sell your Ultrasound",
    description: "Get competitive quotes for selling your used ultrasound equipment",
  },
  {
    icon: FiGlobe,
    title: "International Sales",
    description: "Connect with our global sales team for worldwide equipment solutions",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Technical Support",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-blue-100">
              Have questions about our healthcare solutions? We're here to help
              and would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="text-slate-400" />
                        </div>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="text-slate-400" />
                        </div>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="text-slate-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiBriefcase className="text-slate-400" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMessageSquare className="text-slate-400" />
                      </div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>Technical Support</option>
                        <option>Business Inquiry</option>
                        <option>Documentation Request</option>
                        <option>International Sales</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiSend />
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-blue-50 rounded-lg text-center"
                >
                  <FiCheckCircle
                    className="mx-auto mb-4 text-blue-600"
                    size={48}
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600">
                    We've received your message and will get back to you
                    shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {officeLocations.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-2xl shadow-sm p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    {office.city} Office
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <FiMapPin className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Address</p>
                        <p className="text-slate-600">{office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <FiPhone className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Phone</p>
                        <p className="text-slate-600">{office.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <FiMail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Email</p>
                        <p className="text-slate-600">{office.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <FiClock className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Hours</p>
                        <p className="text-slate-600">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[16/9]">
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-slate-500">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
