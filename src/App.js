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
            <a href="#what-i-do" className="text-navySlate hover:text-goldenWheat text-sm">What I do</a>
            <a href="#projects" className="text-navySlate hover:text-goldenWheat text-sm">Projects</a>
            <a href="/portfolio.html" className="text-navySlate hover:text-goldenWheat text-sm">Portfolio</a>
            <a href="#certifications" className="text-navySlate hover:text-goldenWheat text-sm">Certifications</a>
            <a href="#about" className="text-navySlate hover:text-goldenWheat text-sm">About</a>
            <a href="#contact" className="text-navySlate hover:text-goldenWheat text-sm">Contact</a>
            <a href="Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer"
               className="bg-goldenWheat text-white px-4 py-2 rounded-lg hover:bg-sage transition text-sm">
              View CV
            </a>
          </nav>
          {/* Mobile: just show CV button */}
          <a href="Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer"
             className="md:hidden bg-goldenWheat text-white px-3 py-2 rounded-lg text-sm font-semibold">
            View CV
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="py-16 px-4 bg-lightStone text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-goldenWheat text-sm font-semibold tracking-widest uppercase mb-3">Business Analyst · Agile Delivery</p>
          <h2 className="text-4xl font-semibold mb-4">
            I specify solutions that can actually be built — because I'm the one who builds them.
          </h2>
          <p className="text-lg font-medium text-goldenWheat mb-6">
            Requirements &amp; traceability · BPMN 2.0 · UML · Jira · Confluence · Power BI · SQL
          </p>
          <p className="text-lg text-navySlate mb-6">
            Six years in energy and EV infrastructure across 8+ European markets, in operations and BI
            roles where I ran the requirements sessions, mapped the processes and built the reporting
            behind them — the business analysis, whatever the job title said. Over the last two years
            I've formalised that practice: AgilePM® Practitioner, BPMN 2.0 and UML.
          </p>
          <p className="text-lg text-navySlate mb-6">
            <strong>Transition Monitor</strong> is the whole method in one place — 20 business requirements
            traced through 43 functional requirements to a Jira backlog, AS-IS and TO-BE process models,
            a governed star schema and a decision log. The documentation is public, so you don't have to
            take my word for any of it.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/transition-monitor.html" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">See the work</a>
            <a href="Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-goldenWheat text-goldenWheat px-6 py-3 rounded-xl hover:bg-goldenWheat hover:text-lightStone transition">Download CV</a>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="what-i-do" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What I do</h2>
          <p className="text-center text-navySlate max-w-2xl mx-auto mb-12">
            The analysis that happens before anyone writes code — and the reporting that comes after it.
            Most people do one or the other.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Requirements &amp; traceability</h3>
              <p className="text-navySlate text-sm leading-relaxed">Gather and reconcile conflicting requirements across teams and markets. Numbered business, functional and non-functional requirements, each traceable to a design, a backlog story and a test — so a year later someone can ask why the system does what it does, and get an answer.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Process &amp; systems analysis</h3>
              <p className="text-navySlate text-sm leading-relaxed">AS-IS and TO-BE process design in BPMN 2.0, system behaviour in UML, modelled in Enterprise Architect — so a process map becomes a specification a delivery team can actually build from.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Agile delivery</h3>
              <p className="text-navySlate text-sm leading-relaxed">AgilePM® Practitioner. In the AgilePM/DSDM team model the Business Analyst is a defined role, bridging business and technical interests. Epics and stories in Jira, documentation and decision logs in Confluence, delivery across multi-country programmes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">BI, data modelling &amp; quality</h3>
              <p className="text-navySlate text-sm leading-relaxed">Advanced SQL, DAX and Power Query. Power BI built backwards from the decision, dimensional / star-schema modelling on Azure Databricks, with automated integrity checks built in so the numbers hold up. Currently extending this into Python (pandas), with daily practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Case Studies</h2>
          <p className="text-center text-navySlate mb-8">How I've solved real problems for energy, infrastructure, and operations teams.</p>

          {/* Featured case study — links to the full portfolio */}
          <a href="/transition-monitor.html"
             className="block border border-goldenWheat bg-sandBeige rounded-xl p-6 mb-12 hover:shadow-lg transition">
            <span className="text-xs font-bold text-goldenWheat uppercase tracking-widest">Featured case study</span>
            <h3 className="text-xl font-semibold mt-2 mb-2">
              Transition Monitor — a 15-day manual scorecard, redesigned as a governed process
            </h3>
            <p className="text-sm text-navySlate opacity-80 mb-3">
              Business analysis end to end: AS-IS and TO-BE process models in BPMN 2.0, a star schema that
              makes every published number traceable, and wireframes annotated with their requirement IDs.
            </p>
            <span className="text-sm font-semibold text-sage">Read the full case study →</span>
          </a>

          <p className="text-center mb-10">
            <a href="/portfolio.html" className="text-sm font-semibold text-goldenWheat hover:text-sage underline">
              See the full portfolio →
            </a>
          </p>

          <div className="space-y-12 mb-12">

            {/* Case Study — The Chaos Inbox (newest) */}
            <div className="border-l-4 border-sage p-8 rounded-xl shadow hover:shadow-lg transition bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-sage uppercase tracking-wide">AI-Assisted Development · Claude Code</span>
                  <h3 className="text-2xl font-semibold mt-2 mb-1">The Chaos Inbox — from 6 hours of Friday admin to seconds</h3>
                  <p className="text-sm italic text-navySlate opacity-70 mt-1">
                    Demo case study built on fully synthetic data. "Bottega Nord S.r.l." is a fictional
                    client — every document was generated for the demo. The pipeline, and the problems
                    it solves, are entirely real.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Pain</p>
                  <p className="text-sm text-navySlate">
                    Bottega Nord, a specialty food distributor in Lombardy, receives ~800 supplier order
                    confirmations a month — PDF invoices in three different layouts, Excel exports that
                    never match, semicolon CSVs with Italian decimal commas, and orders typed straight
                    into emails. Every Friday, ~6 hours disappeared into manual reconciliation. Duplicate
                    invoices still got paid. Price increases still went unnoticed.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-navySlate mb-2">The Build</p>
                  <p className="text-sm text-navySlate">
                    A five-stage Python pipeline, built with AI-assisted development (Claude Code):
                    ingestion → extraction → normalization → anomaly detection → reporting. One command.
                    No manual steps.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 mb-6">
                <img src="chaos-inbox-report.png" alt="Chaos Inbox weekly report — KPI summary" className="rounded-lg border w-full object-cover" />
                <img src="chaos-inbox-anomalies.png" alt="Chaos Inbox weekly report — anomaly highlights" className="rounded-lg border w-full object-cover" />
              </div>

              <div className="bg-lightStone rounded-lg p-4 mb-6">
                <p className="text-xs uppercase font-bold text-navySlate mb-3">The Numbers</p>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 text-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-navySlate">149 → 938</p>
                    <p className="text-xs text-gray-400">documents in · clean order lines out</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navySlate">Seconds</p>
                    <p className="text-xs text-gray-400">not hours — full pipeline runtime</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navySlate">105</p>
                    <p className="text-xs text-gray-400">problems caught automatically</p>
                  </div>
                </div>
                <p className="text-sm text-navySlate border-t pt-3">
                  <strong>€259,272</strong> flagged at risk · biggest single catch: a <strong>€90,941</strong> mis-keyed
                  order (793 units instead of ~27)
                </p>
              </div>

              <div className="border border-sage rounded-lg p-4 mb-4 text-center">
                <p className="text-sm text-navySlate">
                  The data is synthetic. The pipeline isn't. If your team runs on supplier paperwork,
                  spreadsheets nobody trusts, or an inbox that eats a day a week — this same architecture
                  drops onto your data.
                </p>
                <a href="#contact" className="inline-block mt-3 text-sm font-semibold text-sage hover:text-goldenWheat">→ Let's talk</a>
              </div>

              <p className="text-xs text-gray-400">
                Python · pandas · pdfplumber · rapidfuzz · Claude Code · <a href="https://github.com/tacijjola/chaos-inbox" target="_blank" rel="noopener noreferrer" className="underline hover:text-goldenWheat">GitHub</a>
              </p>
            </div>

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
                <img src="agilepm-practitioner-badge.png" alt="AgilePM v3 Practitioner" className="h-full w-full object-contain" />
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
                Microsoft exam passed 2023. Data modelling, visualisation and BI — core to every
                dashboard and reporting engagement. Currently studying for DP-600, Fabric Analytics Engineer.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Microsoft · 2023–2024</p>
            </div>

            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img src="cert-ai-mastermind.png" alt="Claude & AI Mastermind INTL" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">Claude & AI Mastermind INTL</h3>
              <p className="text-sm text-navySlate mb-3">
                Prompt engineering, context engineering, AI agent creation, and workflow
                automation — directly shaping how I deliver faster and smarter on every project.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Outskill, 2026</p>
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
              <div className="border-l-4 border-sage bg-sandBeige rounded-r-lg pl-4 pr-4 py-3">
                <span className="inline-block bg-sage text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 uppercase tracking-wide">★ Latest</span>
                <p className="font-semibold text-navySlate">Make — from Beginner to Pro: AI Automations &amp; AI Agents</p>
                <p className="text-sm text-navySlate opacity-70">Udemy · Thalita Milan · 2026</p>
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
          <img
            src="jola-and-dogs.png"
            alt="Jola with her two rescue dogs in Abruzzo"
            className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full object-cover shadow-md"
          />
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
            Based in Abruzzo with my family and our two rescue dogs. Always learning. Always improving. Always ready.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-lightStone">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="mb-8 text-navySlate">
            Open to Business Analyst and BA/BI roles across Europe — remote or hybrid — and to project work through Jola &amp; Co. Email is the fastest route.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="mailto:jola@jolaandco.com" className="bg-goldenWheat text-lightStone px-6 py-3 rounded-xl shadow hover:bg-sage transition">Email Me</a>
            <a href="Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer" className="border border-goldenWheat text-goldenWheat px-6 py-3 rounded-xl hover:bg-goldenWheat hover:text-lightStone transition">View CV (PDF)</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navySlate text-lightStone text-center py-6 px-4 text-sm">
        <p className="text-goldenWheat tracking-widest uppercase text-xs mb-2">Business Analysis · Agile Delivery · BI</p>
        <p>© {new Date().getFullYear()} Jola Tacij · <a href="mailto:jola@jolaandco.com" className="underline hover:text-goldenWheat">jola@jolaandco.com</a></p>
        <p className="mt-1 text-gray-400">Requirements &amp; Traceability · BPMN 2.0 · UML · Jira · Confluence · Power BI · SQL · Python (pandas) · Remote</p>
        <p className="mt-3 text-xs text-gray-400"><a href="/services.html" className="hover:text-goldenWheat">Consulting services</a></p>
      </footer>

    </div>
  );
}
