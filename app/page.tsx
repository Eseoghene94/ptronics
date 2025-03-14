"use client";

import { Button } from "@/components/ui/button";
import {
  Sun,
  Battery,
  Star,
  Users,
  ArrowRight,
  Phone,
  Menu,
  X,
  Check,
  Send,
  Zap, // Add Zap icon for the lightning bolt
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 bg-white/30 backdrop-blur-md rounded-full mt-4 px-8 shadow-lg">
            <div className="flex items-center gap-2">
              <Image
                src="/logo123.jpeg" // Update this path to your logo's location
                alt="DE-PTRONICS HUB Logo"
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
                className="rounded-full" // Optional: Add rounded corners if your logo is circular
              />
              <span className="text-xl font-bold text-gray-800">
                DE-PTRONICS HUB
              </span>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <Link
                href="#about"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                About
              </Link>
              <Link
                href="#solar"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Solar
              </Link>
              <Link
                href="#project"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Our Project
              </Link>
              <Link
                href="#reviews"
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Reviews
              </Link>
              <Button className="bg-[#FFE5B4] hover:bg-[#FFD700] text-black rounded-full px-8">
                GET STARTED
              </Button>
            </div>
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl mx-4 shadow-lg">
              <div className="flex flex-col gap-4">
                <Link
                  href="#about"
                  className="text-gray-800 hover:text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  href="#solar"
                  className="text-gray-800 hover:text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Solar
                </Link>
                <Link
                  href="#project"
                  className="text-gray-800 hover:text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Our Project
                </Link>
                <Link
                  href="#reviews"
                  className="text-gray-800 hover:text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Reviews
                </Link>
                <Button className="bg-[#FFE5B4] hover:bg-[#FFD700] text-black rounded-full">
                  GET STARTED
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/a.jpg"
            alt="Solar Panel House"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent" />

        <div className="relative pt-32 px-4">
          <div className="max-w-8xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-8xl md:text-9xl font-bold text-[#FFE5B4] mb-4 tracking-wider flex items-center gap-4"
            >
              Solar Power <Zap className="h-14 w-12 text-yellow-400" />{" "}
              {/* Lightning bolt icon */}
            </motion.h1>
            <div className="absolute top-24 right-10">
              {/* <p className="text-white">Quick installation</p> */}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="absolute bottom-8 left-0 right-0 px-6 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Power Solutions Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white/20 backdrop-blur-md rounded-[2rem] p-6 overflow-hidden relative border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <Image
                  src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80"
                  alt="Solar Panel"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Power Solutions
                  </h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Water Resistant</li>
                    <li>• High Heat Resistant</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Reviews Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="bg-white/20 backdrop-blur-md rounded-[2rem] p-6 overflow-hidden relative border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Solar Engineer"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Explore Reviews
                  </h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold mr-2 text-white">
                      4.8
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="mt-2 p-0 h-auto text-[#FFE5B4] hover:text-[#FFD700]"
                  >
                    SEE MORE
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Installation Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-white/20 backdrop-blur-md rounded-[2rem] p-6 overflow-hidden relative border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <Image
                  src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80"
                  alt="Battery Storage"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Installation Track Record
                  </h3>
                  <p className="text-2xl font-bold mb-1 text-white">
                    Over 30,000
                  </p>
                  <p className="text-sm text-white/90">Installations</p>
                  <Button
                    variant="link"
                    className="mt-2 p-0 h-auto text-[#FFE5B4] hover:text-[#FFD700]"
                  >
                    TAKE ORDER
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the key features of our solar solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="h-8 w-8 text-yellow-500" />,
                title: "Eco-Friendly",
                description:
                  "Reduce your carbon footprint with clean, renewable energy.",
              },
              {
                icon: <Battery className="h-8 w-8 text-green-500" />,
                title: "Energy Storage",
                description:
                  "Store excess energy for use during cloudy days or at night.",
              },
              {
                icon: <Check className="h-8 w-8 text-blue-500" />,
                title: "Reliable Performance",
                description:
                  "High-quality solar panels designed for long-lasting performance.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="inline-block p-3 bg-gray-50 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re dedicated to providing sustainable energy solutions
              through cutting-edge solar technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="h-8 w-8 text-yellow-500" />,
                title: "Sustainable Energy",
                description:
                  "Harnessing the power of the sun for a cleaner future",
              },
              {
                icon: <Check className="h-8 w-8 text-green-500" />,
                title: "Expert Installation",
                description:
                  "Professional installation by certified technicians",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Customer Satisfaction",
                description: "Dedicated support throughout your solar journey",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="inline-block p-3 bg-gray-50 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your solar journey? Contact us today!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+234 (809) 502-5600</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Send className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">contact@deptronics.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <Button className="w-full bg-[#FFE5B4] hover:bg-[#FFD700] text-black">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <Sun className="h-8 w-8 text-yellow-500" /> */}
                <Image
                  src="/logo123.jpeg" // Update this path to your logo's location
                  alt="DE-PTRONICS HUB Logo"
                  width={40} // Adjust the width as needed
                  height={40} // Adjust the height as needed
                  className="rounded-full" // Optional: Add rounded corners if your logo is circular
                />
                <span className="text-xl font-bold">DE-PTRONICS HUB</span>
              </div>
              <p className="text-gray-400">
                Powering the future with sustainable solar solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solar"
                    className="text-gray-400 hover:text-white"
                  >
                    Solar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#project"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="text-gray-400 hover:text-white"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Solar Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>2, Adekunle Adelani Street</li>
                <li>Lagos, NIGERIA</li>
                <li>+234 (809) 502-5600</li>
                <li>contact@deptronics.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} DE-PTRONICS HUB. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
