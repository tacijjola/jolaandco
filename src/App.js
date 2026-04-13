import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-lightStone text-navySlate font-sans">

      {/* HEADER */}
      <header className="bg-lightStone border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#top" className="no-underline">
            <img
              src="/logo.png"
              alt="Jola & Co. logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <nav className="space-x-5">
            <a href="#work-with-me" className="text-navySlate hover:text-goldenWheat">Work with Me</a>
            <a href="#projects" className="text-navySlate hover:text-goldenWheat">Projects</a>
            <a href="#certifications" className="text-navySlate hover:text-goldenWheat">Certifications</a>
            <a href="#about" className="text-navySlate hover:text-goldenWheat">About</a>
            <a href="#contact" className="text-navySlate hover:text-goldenWheat">Contact</a>
            <a href="/Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer"
               className="bg-goldenWheat text-white px-4 py-2 rounded-lg hover:bg-sage transition">
              View CV
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="py-16 px-4 bg-lightStone text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4">
            Practical operations, clear data, real momentum.
          </h2>
          <p className="text-lg text-navySlate mb-6">
            Business operations and BI specialist with a 20-year career spanning office coordination,
            project delivery, and 5+ years of hands-on data analysis and Power BI development.
            I bring the operational depth most data analysts don't have — and the technical rigour
            most coordinators can't match.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#work-with-me" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">Let's Work Together</a>
            <a href="#projects" className="border border-goldenWheat text-goldenWheat px-6 py-3 rounded-xl hover:bg-goldenWheat hover:text-lightStone transition">See Projects</a>
          </div>
        </div>
      </section>

      {/* WORK WITH ME */}
      <section id="work-with-me" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Work with Me</h2>
          <p className="text-center text-navySlate max-w-xl mx-auto mb-12">
            Clear data. Structured process. Results in days — not months.
            Two fixed-price services for startups and scale-ups that need
            analytical clarity fast.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">

            {/* BA Sprint */}
            <div className="border-2 border-goldenWheat p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <span className="inline-block bg-goldenWheat text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                ⭐ Most Popular
              </span>
              <h3 className="text-xl font-semibold mb-1">The BA Sprint</h3>
              <p className="text-sm italic text-goldenWheat mb-4">3 days. One messy process. Total clarity.</p>
              <p className="text-navySlate mb-4">
                Your team is making decisions without clean requirements or defined KPIs.
                I fix that in 3 working days — fully remote, fixed price.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ Requirements document</li>
                <li>✓ Workflow / data flow diagram</li>
                <li>✓ KPI definitions with measurement logic</li>
                <li>✓ Kick-off + walkthrough calls included</li>
                <li>✓ 7 days async follow-up</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-bold text-navySlate">€900</span>
                <span className="text-sm text-gray-400">3 working days</span>
              </div>
              <a href="#contact" className="mt-4 block text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Book a Discovery Call
              </a>
            </div>

            {/* Power BI Rescue */}
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <span className="inline-block bg-navySlate text-lightStone text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Power BI
              </span>
              <h3 className="text-xl font-semibold mb-1">The Power BI Rescue</h3>
              <p className="text-sm italic text-goldenWheat mb-4">5 days. One live dashboard. No more Excel chaos.</p>
              <p className="text-navySlate mb-4">
                I build one clean, live Power BI dashboard — connected to your data source,
                built properly, delivered in 5 working days.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ 1 data source connected</li>
                <li>✓ 5–8 KPI tiles / visuals</li>
                <li>✓ DAX measures & clean data model</li>
                <li>✓ Published & accessible to your team</li>
                <li>✓ 7 days async support post-delivery</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-bold text-navySlate">€750</span>
                <span className="text-sm text-gray-400">5 working days</span>
              </div>
              <a href="#contact" className="mt-4 block text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Book a Discovery Call
              </a>
            </div>

          </div>

          {/* How it works */}
          <div className="bg-lightStone rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-center mb-6">Simple process. No surprises.</h3>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">1</div>
                <p className="font-semibold mb-1">Book a 20-min call</p>
                <p className="text-sm text-navySlate">We talk through where you are. No pitch, no pressure.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">2</div>
                <p className="font-semibold mb-1">I send a one-page brief</p>
                <p className="text-sm text-navySlate">Exact deliverables, timeline, and fixed price within 24 hours.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">3</div>
                <p className="font-semibold mb-1">I deliver, you decide</p>
                <p className="text-sm text-navySlate">On-time delivery. Continue if you want — or walk away with something useful.</p>
              </div>
            </div>
          </div>

          <div className="border border-goldenWheat rounded-xl p-6 text-center">
            <p className="font-bold text-navySlate mb-2">Not sure which one fits?</p>
            <p className="text-sm text-navySlate mb-4">
              If your biggest problem is <em>"we don't know what we need"</em> — start with the BA Sprint.<br />
              If it's <em>"we have data but can't see it"</em> — start with the Power BI Rescue.
            </p>
            <a href="#contact" className="inline-block bg-navySlate text-lightStone px-6 py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
              → Send me a message
            </a>
          </div>

        </div>
      </section>

      {/* PROJECTS — top 3 */}
      <section id="projects" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Highlighted Projects</h2>
          <p className="text-center text-navySlate mb-10">A selection of recent work — full case studies available on request.</p>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">E.ON Drive</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">EV Utilization Model</h3>
              <p className="text-sm text-navySlate">
                Rebuilt a 10-country utilization model from scratch — single dynamic data layer,
                zero hardcoded formulas, deployed to Azure Databricks as a live analytical asset.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">E.ON Drive</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">Site Strategy Mapping</h3>
              <p className="text-sm text-navySlate">
                Power BI dashboard with geospatial integration to score 890 potential EV charging
                sites across Italy — now scaling to all 10 EDRI countries.
              </p>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">SWARCO</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">PoGo EV Investment Dept.</h3>
              <p className="text-sm text-navySlate">
                Built data infrastructure and evaluation framework for a new EV Investment Department
                from the ground up — unifying fragmented data for Azure migration.
              </p>
            </div>

          </div>

          <p className="text-center mt-8 text-sm text-navySlate">
            Also: E.ON Competitor Intelligence Platform · DNO Process Standardisation · SWARCO Scotland Operations · Virtual Jola
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Professional Development</h2>

          <div className="grid gap-10 md:grid-cols-3 mb-12">

            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img src="/cert-agilepm.png" alt="AgilePM v3 Practitioner" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">AgilePM® v3 Practitioner</h3>
              <p className="text-sm text-navySlate mb-3">
                Proven methodology for managing iterative delivery, cross-functional teams,
                and complex stakeholder environments.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">APMG International</p>
            </div>

            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img src="/cert-PL-300-Power-BI-Data-Analyst.png" alt="Power BI PL-300" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">Power BI Data Analyst (PL-300)</h3>
              <p className="text-sm text-navySlate mb-3">
                Microsoft certified. Data modeling, visualization, and BI — core to every
                dashboard and reporting engagement.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Microsoft Certified</p>
            </div>

            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img src="/cert-ai-mastermind.png" alt="Generative AI Mastermind" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">Generative AI Mastermind</h3>
              <p className="text-sm text-navySlate mb-3">
                AI applications, prompt engineering, and automation — directly shaping
                how I deliver faster and smarter on every project.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Outskill</p>
            </div>

          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Technical Training & Specialized Skills</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-goldenWheat pl-4">
                <p className="font-semibold text-navySlate">15 Days of SQL: The Complete SQL Masterclass 2024</p>
                <p className="text-sm text-navySlate opacity-70">Udemy · Nikolai Schuler · Jan 2024</p>
              </div>
              <div className="border-l-4 border-goldenWheat pl-4">
                <p className="font-semibold text-navySlate">SQL - MySQL for Data Analytics & BI</p>
                <p className="text-sm text-navySlate opacity-70">Udemy · 365 Careers · Aug 2023</p>
              </div>
              <div className="border-l-4 border-goldenWheat pl-4">
                <p className="font-semibold text-navySlate">Mastering SQL Server 2016 SSIS - Part 1</p>
                <p className="text-sm text-navySlate opacity-70">Udemy · Kameswara Sarma Uppuluri · Mar 2024</p>
              </div>
              <div className="border-l-4 border-goldenWheat pl-4">
                <p className="font-semibold text-navySlate">Business Analysis Fundamentals - IIBA Endorsed</p>
                <p className="text-sm text-navySlate opacity-70">Udemy · The BA Guide · May 2025</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4 bg-lightStone">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-navySlate leading-relaxed mb-4">
            I bring passion, precision, and intuition to every project. I listen first, ask the right questions,
            and deliver solutions that work in practice — not just in theory. I don't hide behind jargon —
            I translate complexity into clarity.
          </p>
          <p className="text-navySlate leading-relaxed mb-4">
            Remote-first, deadline-driven, and invested in the success of every organisation I work with.
            Whether you need a one-off analysis, a complete operations overhaul, or ongoing support —
            I show up ready to deliver.
          </p>
          <p className="text-navySlate leading-relaxed text-sm opacity-80">
            Based in Abruzzo with my family and two beautiful Maremma Sheepdogs. Always learning. Always improving. Always ready.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-lightStone">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="mb-8 text-navySlate">
            Consulting, project collaboration, or remote support. If you're looking to streamline, grow, or automate — let's talk.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:jola.tacij@outlook.com" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">Email Me</a>
            <a href="/Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-goldenWheat text-goldenWheat px-6 py-3 rounded-xl hover:bg-goldenWheat hover:text-lightStone transition">View CV (PDF)</a>
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
