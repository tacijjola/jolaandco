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
              href="/Jola_Tacij_CV.pdf"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Professional Development</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* AgilePM v3 Foundation */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-2">AgilePM® v3 Foundation</h3>
              <p className="text-brightGray mb-3">
                Certified in Agile Project Management. Currently studying for Practitioner level. Brings structured, flexible methodology to project delivery and cross-team coordination.
              </p>
              <p className="text-sm text-driftwood font-medium">APMG International, 2025</p>
            </div>

            {/* Generative AI Mastermind */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-2">Generative AI Mastermind</h3>
              <p className="text-brightGray mb-3">
                Comprehensive training in AI applications, prompt engineering, and automation strategies. Directly shaped approach to process optimization and business solutions.
              </p>
              <p className="text-sm text-driftwood font-medium">Outskill, 2025</p>
            </div>

            {/* Power BI Data Analyst */}
            <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-2">Power BI Data Analyst (PL-300)</h3>
              <p className="text-brightGray mb-3">
                Microsoft certified. Demonstrates expertise in data modeling, visualization, and business intelligence. Core to dashboard delivery and reporting strategy.
              </p>
              <p className="text-sm text-driftwood font-medium">Microsoft Certified, 2022</p>
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
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-brightGray italic mb-4">
              "Things get done only if the data we gather can inform and inspire those in a position to make a difference."
            </p>
            <p className="text-sm text-driftwood">– Towards Data Science</p>
          </div>

          <div className="space-y-6 text-brightGray">
            <p>
              I'm a <strong>Business Operations Specialist</strong> focused on transforming complex operations through data-driven systems and strategic project management. With <strong>5+ years of remote-first experience</strong> across energy, EV infrastructure, and technology sectors, I've built dashboards, optimized workflows, and led teams to deliver measurable results.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-bigStone">What I Bring</h3>
              <ul className="space-y-2">
                <li>✓ <strong>Data-driven operations</strong> — Transforming chaos into strategic clarity</li>
                <li>✓ <strong>Portfolio management</strong> — Managing 50+ projects with precision</li>
                <li>✓ <strong>Systems design</strong> — Building infrastructure that scales</li>
                <li>✓ <strong>Strategic insights</strong> — Data that informs board-level decisions</li>
              </ul>
            </div>

            <p>
              I believe operations should be <strong>clear, measurable, and impactful</strong>. Not guesswork. Not assumptions. I work at the heart of what matters—ensuring data informs decisions, and decisions drive results.
            </p>

            <p>
              Based in Abruzzo with my family and two beautiful Maremma Sheep Dogs, I bring passion, precision, and 5+ years of proven remote expertise to every project.
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
            <a href="mailto:jola.tacij@outlook.com" className="bg-driftwood text-white px-6 py-3 rounded-md hover:opacity-90">
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