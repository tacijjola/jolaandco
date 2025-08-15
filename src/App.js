import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-lightStone text-navySlate font-sans">
      {/* HEADER */}
      <header className="bg-navySlate p-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3 text-lightStone no-underline">
            <img
              src="/logo.png"
              alt="Jola & Co. logo"
              className="h-9 w-9 rounded-md shadow-sm"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="text-2xl sm:text-3xl font-bold">Jola & Co.</span>
          </a>

          <nav className="space-x-4">
            <a href="#about" className="hover:text-goldenWheat text-lightStone">About</a>
            <a href="#projects" className="hover:text-goldenWheat text-lightStone">Projects</a>
            <a href="/Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-goldenWheat text-lightStone">
              CV
            </a>
            <a href="#contact" className="hover:text-goldenWheat text-lightStone">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="py-16 px-4 bg-sandBeige text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4">
            Helping businesses thrive through smart operations, data clarity, and practical strategy.
          </h2>
          <p className="text-lg text-navySlate mb-6">
            20+ years in business operations, systems and reporting. I help teams structure smarter, work smoother,
            and make decisions with reliable data.
          </p>
          <a href="#contact" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">Let’s Work Together</a>
        </div>
      </section>

      {/* ABOUT / WHAT I OFFER */}
      <section id="about" className="py-16 px-4 bg-lightStone">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
          <ul className="text-lg text-navySlate space-y-2">
            <li>✓ Business Support & Operations</li>
            <li>✓ Process & Systems Optimization</li>
            <li>✓ Data Management & Analysis</li>
            <li>✓ New Business Setup & Back Office</li>
            <li>✓ Power BI, SQL, & Automation</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4 bg-sandBeige">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">E.ON – Deployment Coordination</h3>
              <p className="text-navySlate">
                Led 50+ EV infrastructure projects, managed DNO workflows, Sitetracker setup, and invoice governance
                with Business Central.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">SWARCO – BI & Reporting</h3>
              <p className="text-navySlate">
                Built Power BI dashboards and reporting that supported leadership decisions and aligned cross-team planning.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">PoGo – Investment Feasibility</h3>
              <p className="text-navySlate">
                Performed site feasibility and investment analysis for EV rollout using traffic and grid data.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Virtual Jola – Remote Executive Support</h3>
              <p className="text-navySlate">
                Project coordination, workflows, stakeholder engagement, and compliance tracking for small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-lightStone">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Collaborate</h2>
          <p className="mb-6 text-navySlate">
            Consulting, project collaboration, or remote support. If you’re looking to streamline, grow, or automate — let’s talk.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:jola.tacij@outlook.com" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">Email Me</a>

            <a
              href="/Jola-Tacij-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-goldenWheat text-goldenWheat px-6 py-3 rounded-xl hover:bg-goldenWheat hover:text-lightStone transition"
            >
              View CV (PDF)
            </a>

            <a href="/Jola-Tacij-CV.pdf" download className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm py-6 text-sage">
        © {new Date().getFullYear()} Jola & Co. ·{" "}
        <a href="https://www.linkedin.com/in/jola-tacij/" target="_blank" rel="noopener noreferrer" className="underline">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
