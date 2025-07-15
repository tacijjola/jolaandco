import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Jola & Co.</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Hi, I'm Jola</h2>
          <p className="text-lg text-gray-700">
            I’m a Business & Innovation Strategist with a passion for eMobility, AI, and creating impact through data. From coordinating EV infrastructure projects to diving into Generative AI, I blend insight, energy, and creativity.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">EV Charger Deployment Mapping</h3>
              <p className="text-gray-600">
                Identified strategic high-traffic locations for EV chargers across Italy using traffic and grid data, feeding into a national rollout strategy.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Generative AI Masterclass</h3>
              <p className="text-gray-600">
                Completed a hands-on masterclass on leveraging AI for business efficiency, content creation, and product innovation.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Sitetracker + Power BI Integration</h3>
              <p className="text-gray-600">
                Built a dashboard to track deployment milestones and grid applications in real-time, improving operational visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="mb-4 text-gray-700">
            Whether you're looking to collaborate, hire, or just say hello – I'm one click away.
          </p>
          <a
            href="mailto:jola@example.com"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Jola & Co. All rights reserved.
      </footer>
    </div>
  );
}
