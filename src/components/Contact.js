import { useState } from 'react';
import { motion } from 'framer-motion';
// react-icons — Material Design and Font Awesome icon sets
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  // Tracks values of each form field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Tracks whether form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);

  // Updates the correct field in formData when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    // spread keeps other fields intact, only updates the changed one
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload on submit
    console.log('Form submitted:', formData); // replace with real API call later
    setSubmitted(true);

    // Reset form and hide success message after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  // Contact methods — icon is now a react-icons component instead of an emoji
  const contactMethods = [
    {
      label: 'Email',
      value: 'peter@example.com',
      icon: MdEmail,          // Material Design email icon
      link: 'mailto:peter@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/pjkiberu',
      icon: FaLinkedin,       // Font Awesome LinkedIn icon
      link: 'https://linkedin.com/in/pjkiberu',
    },
    {
      label: 'GitHub',
      value: 'github.com/pjkiberu',
      icon: FaGithub,         // Font Awesome GitHub icon
      link: 'https://github.com/pjkiberu',
    },
    {
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      icon: FaWhatsapp,       // Font Awesome WhatsApp icon
      link: 'https://wa.me/15551234567',
    },
    {
      label: 'Instagram',
      value: '@pjkiberu',
      icon: FaInstagram,      // Font Awesome Instagram icon
      link: 'https://instagram.com/pjkiberu',
    },
  ];

  return (
    // Section id="contact" links it to navbar scroll
    <section id="contact" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header — animates in when scrolled into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Get In Touch
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-md text-zinc-500">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </motion.div>

        {/* Two column layout — slides in from opposite sides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact methods — slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}   // starts left and invisible
            whileInView={{ opacity: 1, x: 0 }}  // slides into position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              // Each card staggered and slides in from left
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer" // security best practice for external links
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // staggered: 0s, 0.1s, 0.2s...
                viewport={{ once: true }}
                whileHover={{ x: 5, scale: 1.02 }} // slides right slightly on hover
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors"
              >
                {/* Icon — renders the react-icons component stored in method.icon */}
                <div className="text-3xl text-zinc-400">
                  {<method.icon />}
                </div>

                {/* Label and value */}
                <div className="flex-1">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    {method.label}
                  </p>
                  <p className="text-zinc-300 font-medium">{method.value}</p>
                </div>

                {/* Arrow indicator */}
                <div className="text-zinc-600">→</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form — slides in from the right */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}   // starts right and invisible
            whileInView={{ opacity: 1, x: 0 }} // slides into position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Name input — border highlights on focus */}
            <div>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none"
                whileFocus={{ borderColor: '#52525b' }} // border lights up on focus
                required
              />
            </div>

            {/* Email input */}
            <div>
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none"
                whileFocus={{ borderColor: '#52525b' }}
                required
              />
            </div>

            {/* Message textarea — resize disabled to keep layout clean */}
            <div>
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none resize-none"
                whileFocus={{ borderColor: '#52525b' }}
                required
              />
            </div>

            {/* Submit button — text changes to confirm after submission */}
            <motion.button
              type="submit"
              className="w-full rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>

            {/* Success message — fades in after submit, disappears after 3s */}
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-green-400 font-medium"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}