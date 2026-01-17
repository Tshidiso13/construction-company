import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields (Name, Email, Message).");
            return;
        }

        // For now, just log the data
        console.log("Form submitted:", formData);

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Show success message
        setSubmitted(true);

        // Hide message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="font-poppins">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 bg-orange-600 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
                <p className="text-lg md:text-2xl mt-2">Get in touch with BuildCo today</p>
            </section>

            {/* Contact Form + Info */}
            <section className="py-20 max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
                    <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                    {submitted && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-xl shadow-md mb-4">
                            Your message has been sent successfully!
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="font-medium mb-1">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium mb-1">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="font-medium mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="+27 123 456 789"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-medium mb-1">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-orange-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact Info + Map */}
                <div className="space-y-8">
                    {/* Info */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-4">
                        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
                        <p>
                            <span className="font-semibold">Address:</span> 450 Alkaline Street, Johannesburg, South Africa
                        </p>
                        <p>
                            <span className="font-semibold">Phone:</span> 010 290 4719
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span> info@buildco.com
                        </p>
                        <p>
                            <span className="font-semibold">Business Hours:</span> Mon - Fri, 8:00 AM - 5:00 PM
                        </p>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.112088861326!2d18.423300815201954!3d-33.92583828069805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d2e11111111%3A0x1111111111111111!2sJohannesburg!5e0!3m2!1sen!2sza!4v1617911111111!5m2!1sen!2sza"
                            width="100%"
                            height="300"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            title="BuildCo Location"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
