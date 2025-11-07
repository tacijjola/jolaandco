import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-bigStone font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-brightGray/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-3 text-bigStone no-underline">
            <img
              src="/logo.png"
              alt="Jola & Co. logo"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#certifications" className="hover:opacity-80">Certifications</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <a
              href="/Jola-Tacij-CV.pdf"
              className="bg-driftwood text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              View CV
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="py-12 sm:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Practical operations, clear data,{" "}
            <span className="text-driftwood">real momentum</span>.
          </h1>
          <p className="mt-4 text-lg text-brightGray">
            I help businesses structure smarter, report clearly, and move faster.
            20+ years across operations, BI, and project delivery — from
            back-office setup to dashboards and automation.
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href="#contact" className="bg-driftwood text-white px-6 py-3 rounded-md hover:opacity-90">
              Let's Work Together
            </a>
            <a href="#projects" className="px-6 py-3 rounded-md border border-brightGray/30 hover:bg-lightStone">
              See Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
          <ul className="text-lg text-brightGray space-y-2">
            <li>✓ Business Support & Operations</li>
            <li>✓ Process & Systems Optimization</li>
            <li>✓ Data Management & Analysis</li>
            <li>✓ New Business Setup & Back Office</li>
            <li>✓ Power BI, SQL, & Automation</li>
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Learning</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* AgilePM v3 Foundation */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <img
                src="/cert-agilepm.png"
                alt="AgilePM v3 Foundation Badge"
                className="h-32 w-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">AgilePM® v3 Foundation</h3>
              <p className="text-brightGray mb-3">
                Certified in Agile Project Management. Currently studying for Practitioner level. Brings structured, flexible methodology to project delivery and cross-team coordination.
              </p>
              <p className="text-sm text-driftwood font-medium">APMG International</p>
            </div>

            {/* Power BI Data Analyst */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <img
                src="/cert-PL-300-Power-BI-Data-Analyst.png"
                alt="Microsoft Power BI Data Analyst Certification"
                className="h-32 w-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Power BI Data Analyst (PL-300)</h3>
              <p className="text-brightGray mb-3">
                Microsoft certified. Demonstrates expertise in data modeling, visualization, and business intelligence. Core to dashboard delivery and reporting strategy.
              </p>
              <p className="text-sm text-driftwood font-medium">Microsoft</p>
            </div>
          </div>

          {/* Generative AI Mastermind */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <img
                src="/cert-ai-mastermind.png"
                alt="Generative AI Mastermind Certificate"
                className="h-32 w-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Generative AI Mastermind</h3>
              <p className="text-brightGray mb-3">
                Completed comprehensive training in AI applications, prompt engineering, and automation strategies. This learning directly shaped how I approach process optimization and new business solutions.
              </p>
              <p className="text-sm text-driftwood font-medium">Outskill</p>
            </div>

          <p className="text-center text-brightGray text-sm mt-8">
            Committed to continuous learning and industry-recognized standards for operations, project management, and emerging technologies.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">E.ON – Deployment Coordination</h3>
              <p className="text-brightGray">
                Led 50+ EV infrastructure projects, managed DNO workflows, Sitetracker setup, 
                and invoice governance with Business Central.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">SWARCO – BI & Reporting</h3>
              <p className="text-brightGray">
                Built Power BI dashboards and reporting that supported leadership decisions and 
                aligned cross-team planning.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">PoGo – Investment Feasibility</h3>
              <p className="text-brightGray">
                Performed site feasibility and investment analysis for EV rollout using traffic and grid data.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Virtual Jola – Remote Executive Support</h3>
              <p className="text-brightGray">
                Project coordination, workflows, stakeholder engagement, and compliance tracking for small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="mb-6 text-brightGray">
            Consulting, project collaboration, or remote support. If you're looking to streamline, grow, 
            or automate — let's talk.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:jola.tacij@outlook.com" className="bg-driftwood text-white px-6 py-3 rounded-md hover:opacity-90">
              Email Me
            </a>
            <a
              href="/Jola-Tacij-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-brightGray/30 hover:bg-lightStone"
            >
              View CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm py-6 text-brightGray">
        © {new Date().getFullYear()} Jola & Co. ·{" "}
        <a href="https://www.linkedin.com/in/jola-tacij/" target="_blank" rel="noopener noreferrer" className="underline">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

