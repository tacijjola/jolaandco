import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-bigStone font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-brightGray/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2 text-bigStone no-underline">
            <img
              src="/logo.png"
              alt="Jola & Co. logo"
              className="h-16 w-auto object-contain"
              style={{filter: 'drop-shadow(0 2px 6px rgba(212, 165, 116, 0.25))'}}
            />
            <span style={{
              fontWeight: '600',
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              textShadow: '2px 2px 4px rgba(153, 153, 153, 0.25)'
            }}>Jola & Co</span>
          </a>

          <nav className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#certifications" className="hover:opacity-80">Certifications</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="text-white bg-d4a574 px-4 py-2 rounded-md hover:opacity-90" style={{backgroundColor: '#d4a574'}}>
              Contact
            </a>
            <a
              href="/Jola_Tacij_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-brightGray/30 hover:bg-lightStone"
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
            <span style={{color: '#2563eb'}}>real momentum</span>.
          </h1>
          <p className="mt-4 text-lg text-brightGray">
            I help businesses structure smarter, report clearly, and move faster.
            20+ years across operations, BI, and project delivery — from
            back-office setup to dashboards and automation.
          </p>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href="#contact" className="text-white px-6 py-3 rounded-md hover:opacity-90" style={{backgroundColor: '#2563eb'}}>
              Let's Work Together
            </a>
            <a href="#projects" className="px-6 py-3 rounded-md border border-brightGray/30 hover:bg-lightStone">
              See Projects
            </a>
          </div>
        </div>
      </section>

      {/* WHAT I OFFER */}
      <section id="about" className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Offer</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Business Support & Operations</h3>
              <p className="text-brightGray">
                Strategic support for project coordination, stakeholder engagement, and cross-functional alignment that drives execution.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Process & Systems Optimization</h3>
              <p className="text-brightGray">
                Design and implement operational systems, workflows, and automation that scale with your business.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Data Management & Analysis</h3>
              <p className="text-brightGray">
                Transform raw data into actionable insights. Clean, organize, and analyze data for strategic decision-making.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">New Business Setup & Back Office</h3>
              <p className="text-brightGray">
                Build the operational foundation for growth. From documentation systems to governance workflows, I create what scales.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Power BI, SQL, & Automation</h3>
              <p className="text-brightGray">
                Create dashboards, build queries, and automate workflows. Data infrastructure that drives decisions and frees up time.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Strategic Reporting</h3>
              <p className="text-brightGray">
                Present data that matters. Board presentations, KPI dashboards, investment analysis—data that tells your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & LEARNING */}
      <section id="certifications" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Professional Development</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {/* AgilePM v3 Foundation */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-4 border-blue-400 shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-bold text-blue-600">AgilePM</p>
                    <p className="text-xs font-semibold text-blue-700">v3</p>
                    <p className="text-xs text-blue-600 mt-1">FOUNDATION</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AgilePM® v3 Foundation</h3>
              <p className="text-brightGray text-sm">
                Certified in Agile Project Management. Currently studying for Practitioner level. Brings structured, flexible methodology to project delivery and cross-team coordination.
              </p>
              <p className="text-sm text-driftwood font-medium mt-3">APMG International</p>
            </div>

            {/* Power BI Data Analyst */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-4 border-blue-500 shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-bold text-blue-700">Power BI</p>
                    <p className="text-xs font-semibold text-blue-600">Data Analyst</p>
                    <p className="text-xs text-blue-600 mt-1">ASSOCIATE</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Power BI Data Analyst (PL-300)</h3>
              <p className="text-brightGray text-sm">
                Microsoft certified. Demonstrates expertise in data modeling, visualization, and business intelligence. Core to dashboard delivery and reporting strategy.
              </p>
              <p className="text-sm text-driftwood font-medium mt-3">Microsoft Certified</p>
            </div>

            {/* Generative AI Mastermind */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-green-100 to-green-50 rounded-full flex items-center justify-center border-4 border-green-500 shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-bold text-green-700">Generative</p>
                    <p className="text-xs font-semibold text-green-600">AI</p>
                    <p className="text-xs text-green-600 mt-1">MASTERMIND</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Generative AI Mastermind</h3>
              <p className="text-brightGray text-sm">
                Comprehensive training in AI applications, prompt engineering, and automation strategies. Directly shaped approach to process optimization and business solutions.
              </p>
              <p className="text-sm text-driftwood font-medium mt-3">Outskill</p>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Training & Specialized Skills</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">15 Days of SQL: The Complete SQL Masterclass 2024</p>
                <p className="text-sm text-brightGray">Udemy • Nikolai Schuler • Jan 2024</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">SQL - MySQL for Data Analytics & BI</p>
                <p className="text-sm text-brightGray">Udemy • 365 Careers • Aug 2023</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">Mastering SQL Server 2016 SSIS - Part 1</p>
                <p className="text-sm text-brightGray">Udemy • Kameswara Sarma Uppuluri • Mar 2024</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">Business Analysis Fundamentals - IIBA Endorsed</p>
                <p className="text-sm text-brightGray">Udemy • The BA Guide • May 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4 bg-lightStone/40">
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

      {/* ABOUT ME */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-brightGray">
            <p className="text-lg leading-relaxed">
              I bring <strong>passion, precision, and intuition</strong> to every project. I listen first, ask the right questions, and deliver solutions that actually work — not just theoretically, but in practice.
            </p>

            <p className="text-lg leading-relaxed">
              What sets me apart: I'm <strong>forthcoming</strong> about challenges, transparent about timelines, and relentless about quality. I don't hide behind jargon or complexity — I translate it into clarity. My clients know exactly what they're getting and why it matters.
            </p>

            <p className="text-lg leading-relaxed">
              I'm <strong>remote-first, deadline-driven, and genuinely invested</strong> in the success of the organizations I work with. Whether you need a one-off analysis, a complete operations overhaul, or ongoing support, I show up ready to make a difference.
            </p>

            <p className="text-lg leading-relaxed italic text-center mt-8">
              Based in Abruzzo with my family and two beautiful Maremma Sheep Dogs. Always learning. Always improving. Always ready.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="mb-6 text-brightGray">
            Consulting, project collaboration, or remote support. If you're looking to streamline, grow, 
            or automate — let's talk.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:jola.tacij@outlook.com" className="text-white px-6 py-3 rounded-md hover:opacity-90" style={{backgroundColor: '#d4a574'}}>
              Email Me
            </a>
            <a
              href="/Jola_Tacij_CV.pdf"
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

