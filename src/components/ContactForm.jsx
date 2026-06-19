import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaRegCommentDots, FaTag, FaUserAlt } from 'react-icons/fa';

const initialValues = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Full name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.';
    if (!/^[0-9+\-\s()]{7,}$/.test(values.phone)) next.phone = 'Enter a valid phone number.';
    if (!values.subject.trim()) next.subject = 'Subject is required.';
    if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    if (!validate()) return;

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, values, { publicKey });
        setStatus('Message sent successfully.');
      } else {
        setStatus('Form validated. Add EmailJS environment variables to send messages.');
      }
      setValues(initialValues);
    } catch {
      setStatus('Unable to send right now. Please try again or use email directly.');
    }
  };

  const fields = [
    ['name', 'Full Name', 'text', FaUserAlt],
    ['email', 'Email', 'email', FaEnvelope],
    ['phone', 'Phone Number', 'tel', FaPhoneAlt],
    ['subject', 'Subject', 'text', FaTag]
  ];

  return (
    <form onSubmit={handleSubmit} className="glass relative overflow-hidden rounded-[1.75rem] p-5 sm:p-7">
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
      <div className="relative mb-7">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700 dark:text-teal-200">Contact Form</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white">Send a professional inquiry</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">Tell me what you need and I will respond with the next best step.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([name, label, type, Icon]) => (
          <label key={name} className="relative grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            {label}
            <span className="relative">
              <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={values[name]}
                type={type}
                autoComplete={name === 'name' ? 'name' : name}
                onChange={(event) => setValues({ ...values, [name]: event.target.value })}
                className={`w-full rounded-2xl border bg-white/85 py-3 pl-11 pr-4 font-semibold outline-none transition placeholder:text-slate-400 focus:ring-4 dark:bg-white/10 ${
                  errors[name]
                    ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100 dark:border-rose-400/40 dark:focus:ring-rose-400/10'
                    : 'border-slate-200 focus:border-teal-400 focus:ring-teal-100 dark:border-white/10 dark:focus:ring-teal-400/10'
                }`}
              />
            </span>
            {errors[name] && <span className="text-xs text-rose-500">{errors[name]}</span>}
          </label>
        ))}
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
        Message
        <span className="relative">
          <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-slate-400" />
          <textarea
            rows="6"
            value={values.message}
            onChange={(event) => setValues({ ...values, message: event.target.value })}
            className={`w-full resize-none rounded-2xl border bg-white/85 py-3 pl-11 pr-4 font-semibold outline-none transition focus:ring-4 dark:bg-white/10 ${
              errors.message
                ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100 dark:border-rose-400/40 dark:focus:ring-rose-400/10'
                : 'border-slate-200 focus:border-teal-400 focus:ring-teal-100 dark:border-white/10 dark:focus:ring-teal-400/10'
            }`}
          />
        </span>
        {errors.message && <span className="text-xs text-rose-500">{errors.message}</span>}
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="btn-primary w-full sm:w-auto" type="submit"><FaPaperPlane /> Send Message</button>
        {status && (
          <p className="inline-flex w-full items-start gap-2 rounded-2xl bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800 dark:bg-teal-400/10 dark:text-teal-200 sm:w-auto sm:items-center sm:rounded-full">
            <FaCheckCircle /> {status}
          </p>
        )}
      </div>
    </form>
  );
}
