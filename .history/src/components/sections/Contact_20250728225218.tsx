'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, MapPin, Phone, Linkedin, Github, Instagram, Facebook, Loader2, BadgeCheck
} from 'lucide-react';

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kousaila-benhamouche',
        icon: <Linkedin className="w-6 h-6" aria-label="LinkedIn" />,
        color: 'hover:text-blue-600'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/kousaila502',
        icon: <Github className="w-6 h-6" aria-label="GitHub" />,
        color: 'hover:text-gray-800'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/k0uss4il4/',
        icon: <Instagram className="w-6 h-6" aria-label="Instagram" />,
        color: 'hover:text-pink-600'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/kokoXxXx/',
        icon: <Facebook className="w-6 h-6" aria-label="Facebook" />,
        color: 'hover:text-blue-700'
    }
];

const contactInfo = [
    {
        label: 'Email',
        value: 'k.benhamouche@esi-sba.dz',
        icon: <Mail className="w-6 h-6 text-blue-600" aria-label="Email" />,
        bg: 'bg-blue-100'
    },
    {
        label: 'Location',
        value: 'Oran, Algeria',
        icon: <MapPin className="w-6 h-6 text-green-600" aria-label="Location" />,
        bg: 'bg-green-100'
    },
    {
        label: 'Phone',
        value: '+213 662942408',
        icon: <Phone className="w-6 h-6 text-purple-600" aria-label="Phone" />,
        bg: 'bg-purple-100'
    }
];

const initialForm = { name: '', email: '', subject: '', message: '' };

const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
    const [formData, setFormData] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [k: string]: string }>({});

    // Floating label animation state
    const isFilled = (field: keyof typeof formData) => !!formData[field];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const validate = () => {
        const errs: { [k: string]: string } = {};
        if (!formData.name.trim()) errs.name = 'Name is required';
        if (!formData.email.trim()) errs.email = 'Email is required';
        else if (!validateEmail(formData.email)) errs.email = 'Invalid email address';
        if (!formData.subject.trim()) errs.subject = 'Subject is required';
        if (!formData.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData(initialForm);
        }, 1200);
    };

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            {/* Gradient divider/shape */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0.3, scale: 0.9 }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-200 via-purple-100 to-pink-100 opacity-30 blur-3xl rounded-full"
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        Get In Touch
                    </h2>
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            <BadgeCheck className="w-4 h-4 mr-1" /> Open to Work
                        </span>
                    </div>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Let&apos;s discuss backend development and DevOps opportunities. I&apos;m always interested in innovative projects and collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <motion.div
                                        key={info.label}
                                        className="flex items-center bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-sm p-4"
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.7 }}
                                        transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
                                    >
                                        <div className={`w-12 h-12 ${info.bg} rounded-full flex items-center justify-center mr-4`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{info.label}</p>
                                            <p className="text-gray-600">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-blue-400 outline-none ${social.color}`}
                                        aria-label={social.name}
                                        tabIndex={0}
                                        title={social.name}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                        {/* Map Preview */}
                        <div className="rounded-xl overflow-hidden mt-8 shadow-lg border border-gray-200">
                            <iframe
                                title="Oran, Algeria Map"
                                aria-label="Map of Oran, Algeria"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.662%2C35.678%2C-0.562%2C35.728&amp;layer=mapnik"
                                className="w-full h-48"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="max-w-xl w-full mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
                        {submitted ? (
                            <motion.div
                                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
                            >
                                <div className="flex justify-center mb-4">
                                    <BadgeCheck className="text-green-600 w-12 h-12" />
                                </div>
                                <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                                <p className="text-green-700">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-green-600 hover:text-green-800 font-medium focus:ring-2 focus:ring-green-400 rounded transition"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            aria-label="Full Name"
                                            tabIndex={0}
                                            className={`peer w-full px-4 py-3 border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-transparent`}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-3 top-3 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
                                                ${isFilled('name') ? '-top-3 text-xs text-blue-600' : ''}`}
                                        >
                                            Full Name *
                                        </label>
                                        {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
                                    </div>
                                    {/* Email */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            aria-label="Email Address"
                                            tabIndex={0}
                                            className={`peer w-full px-4 py-3 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-transparent`}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`absolute left-3 top-3 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
                                                ${isFilled('email') ? '-top-3 text-xs text-blue-600' : ''}`}
                                        >
                                            Email Address *
                                        </label>
                                        {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
                                    </div>
                                </div>
                                {/* Subject */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        aria-label="Subject"
                                        tabIndex={0}
                                        className={`peer w-full px-4 py-3 border ${errors.subject ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-transparent`}
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="subject"
                                        className={`absolute left-3 top-3 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
                                            ${isFilled('subject') ? '-top-3 text-xs text-blue-600' : ''}`}
                                    >
                                        Subject *
                                    </label>
                                    {errors.subject && <span className="text-xs text-red-500 mt-1">{errors.subject}</span>}
                                </div>
                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        aria-label="Message"
                                        tabIndex={0}
                                        className={`peer w-full px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-transparent resize-none`}
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-3 top-3 px-1 text-gray-500 bg-white transition-all duration-200 pointer-events-none
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
                                            ${isFilled('message') ? '-top-3 text-xs text-blue-600' : ''}`}
                                    >
                                        Message *
                                    </label>
                                    {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message}</span>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-400"
                                    aria-label="Send Message"
                                    tabIndex={0}
                                >
                                    {isSubmitting && <Loader2 className="animate-spin w-5 h-5" />}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;