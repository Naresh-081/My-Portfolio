'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const contactItems = [
  { icon: <FaEnvelope />,  label: "Email",    value: "vemulanaresh333@gmail.com",      href: "mailto:vemulanaresh333@gmail.com" },
  { icon: <FaPhoneAlt />,  label: "Phone",    value: "+1 (361) 742-9587",              href: "tel:+13617429587" },
  { icon: <FaLinkedin />,  label: "LinkedIn", value: "naresh-vemula",                  href: "https://www.linkedin.com/in/naresh-vemula-149b15238" },
  { icon: <FaGithub />,    label: "GitHub",   value: "Naresh-081",                     href: "https://github.com/Naresh-081" },
  { icon: <FaFilePdf />,   label: "Resume",   value: "View PDF",                       href: "https://drive.google.com/file/d/1yJyZ5eBI1CcaHf9VpJ-O-4FyDNT95WqP/view?usp=sharing" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
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

  const inputClass = "w-full bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Get in{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Open to data engineering roles, collaborations, and interesting problems
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 shadow-lg"
        >
          <h3 className="text-sm font-bold text-white mb-5">Send a message</h3>

          {status === 'success' && (
            <p className="mb-4 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 rounded-lg px-4 py-2.5">
              Message sent — I&apos;ll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="mb-4 text-xs bg-red-500/10 text-red-400 border border-red-500/25 rounded-lg px-4 py-2.5">
              Something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            {[
              { id: 'name',  type: 'text',  placeholder: 'Your name' },
              { id: 'email', type: 'email', placeholder: 'you@example.com' },
            ].map(({ id, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                  {id}
                </label>
                <input
                  type={type} id={id} name={id}
                  value={form[id as keyof typeof form]}
                  onChange={onChange} required placeholder={placeholder}
                  className={inputClass}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message" name="message" rows={4}
                value={form.message} onChange={onChange} required
                placeholder="Your message..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit" disabled={submitting}
              className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
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
          className="flex flex-col justify-center space-y-3"
        >
          <p className="text-slate-400 text-sm mb-3">
            Feel free to reach out for roles, collaborations, or just to connect.
          </p>
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-indigo-500/10 hover:-translate-x-1 transition-all duration-300 group"
            >
              <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors text-sm">
                {item.icon}
              </span>
              <div>
                <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                <p className="text-sm font-semibold text-slate-200">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}
