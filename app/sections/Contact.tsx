'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const contactItems = [
  { icon: <FaEnvelope />, label: "Email", value: "vemulanaresh333@gmail.com", href: "mailto:vemulanaresh333@gmail.com" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+1 (361) 742-9587", href: "tel:+13617429587" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "naresh-vemula", href: "https://www.linkedin.com/in/naresh-vemula-149b15238" },
  { icon: <FaGithub />, label: "GitHub", value: "Naresh-081", href: "https://github.com/Naresh-081" },
  { icon: <FaFilePdf />, label: "Resume", value: "View PDF", href: "https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await emailjs.sendForm('service_7t7moih', 'template_cteh7wk', e.target as HTMLFormElement, 'jqEMOrc_xTsGxvLZH');
      setStatus(res.status === 200 ? 'success' : 'error');
      if (res.status === 200) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-4xl font-bold mb-3 text-center text-slate-900"
      >
        Get in{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-slate-500 mb-12 max-w-md mx-auto text-sm"
      >
        Open to data engineering roles, collaborations, and interesting problems
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm"
        >
          <h3 className="text-base font-bold text-slate-900 mb-5">Send a message</h3>

          {status === 'success' && (
            <p className="mb-4 text-sm bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg px-4 py-2.5">
              Message sent — I&apos;ll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="mb-4 text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-2.5">
              Something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={form[id as keyof typeof form]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors"
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-slate-600 text-sm mb-2">
            Feel free to reach out for roles, collaborations, or just to connect.
          </p>
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <span className="text-indigo-600 group-hover:text-indigo-500 transition-colors text-base">
                {item.icon}
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                <p className="text-sm font-semibold text-slate-800">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}
