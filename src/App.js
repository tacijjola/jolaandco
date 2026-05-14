import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-lightStone text-navySlate font-sans">

      {/* HEADER */}
      <header className="bg-lightStone border-b border-gray-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#top" className="no-underline flex-shrink-0">
            <img
              src="logo.png"
              alt="Jola & Co. logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-5">
            <a href="#work-with-me" className="text-navySlate hover:text-goldenWheat text-sm">Work with Me</a>
            <a href="#projects" className="text-navySlate hover:text-goldenWheat text-sm">Projects</a>
            <a href="#certifications" className="text-navySlate hover:text-goldenWheat text-sm">Certifications</a>
            <a href="#about" className="text-navySlate hover:text-goldenWheat text-sm">About</a>
            <a href="#contact" className="text-navySlate hover:text-goldenWheat text-sm">Contact</a>
            <a href="Jola_Tacij_FINAL_CV.pdf" target="_blank" rel="noopener noreferrer"
               className="bg-goldenWheat text-white px-4 py-2 rounded-lg hover:bg-sage transition text-sm">
              View CV
            </a>
          </nav>
          {/* Mobile: just show CV button */}
          <a href="Jola_Tacij_FINAL_CV.pdf" target="_blank" rel="noopener noreferrer"
             className="md:hidden bg-goldenWheat text-white px-3 py-2 rounded-lg text-sm font-semibold">
            View CV
          </a>
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
          <p className="text-center text-navySlate max-w-2xl mx-auto mb-12">
            Four fixed-price packages — from quick wins to full-scope transformations.
            Fully async, fully transparent. Buy, scope by email, delivered on time.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">

            {/* Data Model Restructuring */}
            <div className="border-2 border-sage p-6 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col">
              <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Complex · Transformation
              </span>
              <h3 className="text-xl font-semibold mb-1">Data Model Restructuring</h3>
              <p className="text-sm italic text-sage mb-4">4–5 weeks. Your data layer, rebuilt. Built to scale.</p>
              <p className="text-navySlate mb-4">
                Your Power BI model is slow, fragile, or unfinished. I architect and rebuild it
                from scratch — optimized for performance, future-proofed for growth, fully documented.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ Diagnostic audit of current model</li>
                <li>✓ Clean, star-schema architecture</li>
                <li>✓ Optimized DAX, partitioning &amp; refresh strategy</li>
                <li>✓ Full documentation &amp; handover</li>
                <li>✓ 4 weeks async support post-delivery</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4 mt-auto">
                <span className="text-2xl font-bold text-navySlate">€2,500–4,500</span>
                <span className="text-sm text-gray-400">4–5 weeks</span>
              </div>
              {/* TODO: replace with Stripe payment link */}
              <button className="mt-4 w-full text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Buy now
              </button>
            </div>

            {/* Dashboard Rebuild */}
            <div className="border-2 border-goldenWheat p-6 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col">
              <span className="inline-block bg-goldenWheat text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                ⭐ Most Popular
              </span>
              <h3 className="text-xl font-semibold mb-1">Dashboard Rebuild</h3>
              <p className="text-sm italic text-goldenWheat mb-4">5 days. One clean, live dashboard. No chaos, no Excel.</p>
              <p className="text-navySlate mb-4">
                I build one production-ready Power BI dashboard — connected to your data source,
                clean model, proper visuals, delivered in 5 working days. Fully async.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ 1 data source connected &amp; shaped</li>
                <li>✓ 5–8 KPI tiles / visuals</li>
                <li>✓ Clean data model &amp; DAX measures</li>
                <li>✓ Published to Power BI Service &amp; shared</li>
                <li>✓ 7 days async support post-delivery</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4 mt-auto">
                <span className="text-2xl font-bold text-navySlate">€1,800</span>
                <span className="text-sm text-gray-400">5 working days</span>
              </div>
              {/* TODO: replace with Stripe payment link */}
              <button className="mt-4 w-full text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Buy now
              </button>
            </div>

            {/* Business Question Sprint */}
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col">
              <span className="inline-block bg-navySlate text-lightStone text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Business Analysis
              </span>
              <h3 className="text-xl font-semibold mb-1">Business Question Sprint</h3>
              <p className="text-sm italic text-goldenWheat mb-4">3 days. One tough question. Clear answer.</p>
              <p className="text-navySlate mb-4">
                Your team is stuck on a business decision. I take the question, dive into your data,
                deliver a clear analysis — in 3 working days, fully async.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ Analysis brief within 2 hours of purchase</li>
                <li>✓ Data extraction &amp; investigation</li>
                <li>✓ Executive summary + detailed findings</li>
                <li>✓ Recommendations &amp; next steps</li>
                <li>✓ 5 days async follow-up</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4 mt-auto">
                <span className="text-2xl font-bold text-navySlate">€900</span>
                <span className="text-sm text-gray-400">3 working days</span>
              </div>
              {/* TODO: replace with Stripe payment link */}
              <button className="mt-4 w-full text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Buy now
              </button>
            </div>

            {/* Fractional BI Lead */}
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col">
              <span className="inline-block bg-navySlate text-lightStone text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Ongoing · Flexible
              </span>
              <h3 className="text-xl font-semibold mb-1">Fractional BI Lead</h3>
              <p className="text-sm italic text-goldenWheat mb-4">1–3 days/week. Your BI layer, managed. Strategic &amp; hands-on.</p>
              <p className="text-navySlate mb-4">
                Hire me as your part-time BI lead — I own your dashboards, mentor your team,
                respond to ad-hoc questions, and build new reports. Strategic guidance + delivery.
              </p>
              <ul className="text-sm text-navySlate space-y-1 mb-6 border-t pt-4">
                <li>✓ Ongoing dashboard &amp; report ownership</li>
                <li>✓ Strategic BI roadmap &amp; advice</li>
                <li>✓ Team mentoring &amp; upskilling</li>
                <li>✓ Ad-hoc analysis &amp; troubleshooting</li>
                <li>✓ 1–3 days/week commitment (flexible)</li>
              </ul>
              <div className="flex justify-between items-center border-t pt-4 mt-auto">
                <span className="text-2xl font-bold text-navySlate">€1,200–1,500</span>
                <span className="text-sm text-gray-400">/day</span>
              </div>
              {/* TODO: replace with Stripe payment link */}
              <button className="mt-4 w-full text-center bg-navySlate text-lightStone py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
                → Get started
              </button>
            </div>

          </div>

          {/* How it works — async flow, no calls */}
          <div className="bg-lightStone rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-center mb-6">Simple process. Fully async. No surprises.</h3>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">1</div>
                <p className="font-semibold mb-1">You buy here</p>
                <p className="text-sm text-navySlate">Stripe checkout. Instant receipt. No call required, ever.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">2</div>
                <p className="font-semibold mb-1">I send a brief</p>
                <p className="text-sm text-navySlate">Within 2 hours of purchase. You reply with the details I need to scope properly.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-navySlate text-lightStone font-bold text-lg flex items-center justify-center mx-auto mb-3">3</div>
                <p className="font-semibold mb-1">I deliver on time</p>
                <p className="text-sm text-navySlate">Fixed price. Fixed timeline. Plus days of async support afterwards.</p>
              </div>
            </div>
          </div>

          <div className="border border-goldenWheat rounded-xl p-6 text-center">
            <p className="font-bold text-navySlate mb-2">Not sure where to start?</p>
            <p className="text-sm text-navySlate mb-4">
              If you need clarity on a business question — start with the <strong>Business Question Sprint</strong>.<br />
              If it's "we have data but no dashboard" — go straight to <strong>Dashboard Rebuild</strong>.<br />
              If you need ongoing BI leadership — let's talk <strong>Fractional BI Lead</strong>.
            </p>
            <a href="mailto:jola.tacij@outlook.com" className="inline-block bg-navySlate text-lightStone px-6 py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
              → Email me — no pressure, no call
            </a>
          </div>

        </div>
      </section>

      {/* PROJECTS — Case Studies */}
      <section id="projects" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Case Studies</h2>
          <p className="text-center text-navySlate mb-10">How I've solved real problems for energy, infrastructure, and operations teams.</p>

          <div className="space-y-12 mb-12">

            {/* Case Study 1 */}
            <div className="border-l-4 border-goldenWheat p-8 rounded-xl shadow hover:shadow-lg transition bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">E.ON Drive · Energy Infrastructure</span>
                  <h3 className="text-2xl font-semibold mt-2 mb-1">EV Utilization Model — 10 Countries, Zero Hardcoding</h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Problem</p>
                  <p className="text-sm text-navySlate">
                    E.ON's EV charging fleet utilization was trapped in a fragile Excel model. It had hardcoded formulas, manual calculation steps, and couldn't scale beyond two countries. Leadership needed daily reporting for 10 EDRI countries.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Solution</p>
                  <p className="text-sm text-navySlate">
                    Built a single, dynamic data layer in Azure Databricks. No hardcoded values. Every metric flows from raw transaction data → aggregated dimensions → executive dashboard. Real-time, auditable, scalable.
                  </p>
                </div>
              </div>

              <div className="bg-lightStone rounded-lg p-4 mb-6">
                <p className="text-xs uppercase font-bold text-navySlate mb-3">Results</p>
                <ul className="text-sm text-navySlate space-y-1">
                  <li>✓ 10-country reporting ready in 6 weeks</li>
                  <li>✓ Reduced manual data prep from 4 hours/day to 0</li>
                  <li>✓ Zero calculation errors in daily P&amp;L reporting</li>
                  <li>✓ Model now handles ad-hoc questions without engineering support</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">Data modeling · SQL · Azure Databricks · Power BI</p>
            </div>

            {/* Case Study 2 */}
            <div className="border-l-4 border-goldenWheat p-8 rounded-xl shadow hover:shadow-lg transition bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">E.ON Drive · Site Selection</span>
                  <h3 className="text-2xl font-semibold mt-2 mb-1">Geospatial Site Scoring Dashboard — 890 Sites Evaluated</h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Problem</p>
                  <p className="text-sm text-navySlate">
                    E.ON needed to evaluate 890 potential EV charging locations across Italy. Spreadsheets couldn't handle the scale, complexity, or geographic context. Site teams were making decisions on incomplete data.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Solution</p>
                  <p className="text-sm text-navySlate">
                    Designed a Power BI dashboard with geospatial mapping, multi-factor scoring (grid demand, land availability, permitting risk), and drill-down analysis. Integrated competitive landscape and financial feasibility into one view.
                  </p>
                </div>
              </div>

              <div className="bg-lightStone rounded-lg p-4 mb-6">
                <p className="text-xs uppercase font-bold text-navySlate mb-3">Results</p>
                <ul className="text-sm text-navySlate space-y-1">
                  <li>✓ Site prioritization model deployed in 4 weeks</li>
                  <li>✓ Evaluation time per site cut from 2 hours to 5 minutes</li>
                  <li>✓ Now scaling to all 10 EDRI countries</li>
                  <li>✓ Site teams using the tool daily for investment decisions</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">Power BI · Geospatial analysis · Business logic · Stakeholder alignment</p>
            </div>

            {/* Case Study 3 */}
            <div className="border-l-4 border-goldenWheat p-8 rounded-xl shadow hover:shadow-lg transition bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-goldenWheat uppercase tracking-wide">SWARCO · Infrastructure</span>
                  <h3 className="text-2xl font-semibold mt-2 mb-1">EV Investment Department — Data Foundation from Zero</h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Problem</p>
                  <p className="text-sm text-navySlate">
                    SWARCO created a new EV Investment Department with no data infrastructure. Existing systems were siloed, data quality was poor, and teams couldn't answer basic questions about portfolio health, deal flow, or risk.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Solution</p>
                  <p className="text-sm text-navySlate">
                    Built the data foundation from scratch: unified schemas, ETL pipelines, KPI definitions, and governance framework. Prepared infrastructure for Azure Databricks migration and ongoing scaling.
                  </p>
                </div>
              </div>

              <div className="bg-lightStone rounded-lg p-4 mb-6">
                <p className="text-xs uppercase font-bold text-navySlate mb-3">Results</p>
                <ul className="text-sm text-navySlate space-y-1">
                  <li>✓ Data infrastructure documented and handed over in 8 weeks</li>
                  <li>✓ Deal flow reporting now accessible to leadership</li>
                  <li>✓ Foundation ready for Azure migration (scheduled 2026)</li>
                  <li>✓ Team onboarded on data governance &amp; best practices</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">Data strategy · ETL · Schema design · Team enablement</p>
            </div>

          </div>

          <div className="border border-goldenWheat rounded-xl p-6 text-center">
            <p className="font-semibold text-navySlate mb-2">Ongoing Engagement</p>
            <p className="text-sm text-navySlate mb-4">
              Beyond one-off projects, I've also delivered: E.ON Competitor Intelligence Platform · DNO Process Standardisation · SWARCO Scotland Operations Analysis
            </p>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Professional Development</h2>

          <div className="grid gap-10 md:grid-cols-3 mb-12">

            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img src="cert-agilepm.png" alt="AgilePM v3 Practitioner" className="h-full w-full object-contain" />
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
                <img src="cert-PL-300-Power-BI-Data-Analyst.png" alt="Power BI PL-300" className="h-full w-full object-contain" />
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
                <img src="cert-ai-mastermind.png" alt="Generative AI Mastermind" className="h-full w-full object-contain" />
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
      <footer className="bg-navySlate text-lightStone text-center py-6 px-4 text-sm">
        <p>© {new Date().getFullYear()} Jola Tacij · <a href="mailto:jola.tacij@outlook.com" className="underline hover:text-goldenWheat">jola.tacij@outlook.com</a></p>
        <p className="mt-1 text-gray-400">Business Analysis · Power BI · Project Delivery · Remote</p>
      </footer>

    </div>
  );
}
