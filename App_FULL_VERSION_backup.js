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
            <a href="#certifications" className="hover:text-goldenWheat text-lightStone">Certifications</a>
            <a href="#projects" className="hover:text-goldenWheat text-lightStone">Projects</a>
            <a href="#technology" className="hover:text-goldenWheat text-lightStone">Technology</a>
            <a href="#work-with-me" className="hover:text-goldenWheat text-lightStone">Work with Me</a>
            <a href="#contact" className="hover:text-goldenWheat text-lightStone">Contact</a>
            <a href="/Jola-Tacij-CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-goldenWheat text-lightStone">
              View CV
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="py-16 px-4 bg-sandBeige text-center">
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

      {/* WHAT I OFFER */}
      <section id="about" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Offer</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">PMO & Project Coordination</h3>
              <p className="text-navySlate mb-4">
                Strategic project coordination and cross-functional alignment across multi-country teams.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Process & Systems Optimization</h3>
              <p className="text-navySlate mb-4">
                Operational systems and workflows that actually scale — designed from the ground up or rebuilt from scratch.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Data Management & Analysis</h3>
              <p className="text-navySlate mb-4">
                From raw data to actionable insight — I make your information work for you.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Ground-Up Business Building</h3>
              <p className="text-navySlate mb-4">
                From zero to fully operational — I build the infrastructure new ventures need to launch and scale.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Power BI, SQL & Dashboards</h3>
              <p className="text-navySlate mb-4">
                Interactive dashboards, robust queries, and reporting that leadership actually uses.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">AI-Augmented Delivery</h3>
              <p className="text-navySlate mb-4">
                Using AI as a daily working tool — for research, analysis, problem-solving, and accelerating delivery.
              </p>
              <a href="#projects" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-16 px-4 bg-sandBeige">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Professional Development</h2>

          <div className="grid gap-10 md:grid-cols-3 mb-12">

            {/* AgilePM badge */}
            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/AgilePM.png"
                  alt="AgilePM v3 Practitioner certification badge"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">AgilePM® v3 Practitioner</h3>
              <p className="text-sm text-navySlate mb-3">
                Fully certified at Practitioner level in Agile Project Management. Proven methodology for managing
                iterative delivery, cross-functional teams, and complex stakeholder environments.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">APMG International</p>
            </div>

            {/* Power BI badge */}
            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/PowerBI.png"
                  alt="Power BI Data Analyst PL-300 certification badge"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Power BI Data Analyst (PL-300)</h3>
              <p className="text-sm text-navySlate mb-3">
                Microsoft certified. Expertise in data modeling, visualization, and business intelligence.
                Core to dashboard delivery and reporting strategy across every engagement.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Microsoft Certified</p>
            </div>

            {/* Generative AI badge */}
            <div className="text-center">
              <div className="h-40 w-40 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/Gen AI.png"
                  alt="Generative AI Mastermind certification badge"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Generative AI Mastermind</h3>
              <p className="text-sm text-navySlate mb-3">
                Comprehensive training in AI applications, prompt engineering, and automation strategies.
                Directly shaped my approach to process optimization and modern business solutions.
              </p>
              <p className="text-sm font-semibold text-goldenWheat">Outskill</p>
            </div>

          </div>

          {/* Training list — 2-col with gold border */}
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

      {/* HIGHLIGHTED PROJECTS */}
      <section id="projects" className="py-16 px-4 bg-lightStone">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects & Case Studies</h2>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">E.ON Drive – EV Utilization Model</h3>
              <p className="text-navySlate mb-4">
                Fully restructured E.ON Drive's 10-country utilization model — rebuilding the architecture
                around a single dynamic data layer and deploying it to Azure Databricks as a live analytical asset.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">E.ON Drive – Competitor Intelligence Platform</h3>
              <p className="text-navySlate mb-4">
                Designing and building a 10-country competitive intelligence system — integrating multiple APIs
                and public data sources, with structured requirements gathered directly from country-level commercial teams.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">E.ON Drive – DNO Process Standardisation</h3>
              <p className="text-navySlate mb-4">
                Standardized DNO application process, eliminating bottlenecks and keeping 50+ concurrent
                EV infrastructure projects on schedule.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">E.ON Drive – Site Strategy Mapping</h3>
              <p className="text-navySlate mb-4">
                Built Power BI dashboard with geospatial data integration to evaluate and score 890 potential
                EV charging sites across Italy — now expanding to all 10 EDRI countries with tailored requirements per market.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">
                Learn more → <span className="text-sm font-normal">View Full Case Study →</span>
              </a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">SWARCO – PoGo EV Investment Department</h3>
              <p className="text-navySlate mb-4">
                Built data infrastructure and evaluation framework for new EV Investment Department from ground up.
                Unified fragmented data for Azure migration and created systems for evaluating large-scale EV infrastructure sites.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">SWARCO Smart Charging – Scotland Operations</h3>
              <p className="text-navySlate mb-4">
                Built Power BI dashboards and PMO reporting that supported leadership decisions and aligned
                cross-team planning.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Virtual Jola – Remote Executive Support</h3>
              <p className="text-navySlate mb-4">
                Project coordination, workflows, stakeholder engagement, and compliance tracking for small
                businesses and water utilities.
              </p>
              <a href="#contact" className="text-goldenWheat font-semibold hover:underline">Learn more →</a>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY & APPROACH */}
      <section id="technology" className="py-16 px-4 bg-sandBeige">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Technology & Approach</h2>
          <p className="text-center text-navySlate max-w-2xl mx-auto mb-10">
            I pair deep operational experience with modern tools — including AI — to work faster, think more clearly,
            and deliver solutions that are built to last. The technology serves the outcome, not the other way around.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Business Intelligence & Reporting</h3>
              <p className="text-sm text-navySlate mb-4">
                Interactive dashboards, semantic data modelling, and executive reporting that drives decisions —
                not just decorates slide decks. Experienced with Microsoft Fabric as a modern analytics platform.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "DAX", "M-language", "SQL", "Azure Databricks", "Microsoft Fabric", "Star schema"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Analytics Engineering & Data Quality</h3>
              <p className="text-sm text-navySlate mb-4">
                Designing and maintaining data pipelines, automated integrity checks, and scalable data architectures —
                ensuring the numbers leadership acts on are numbers they can trust.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ETL / ELT", "Delta Lake", "Data validation", "Power Query", "Data modelling", "Azure"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">AI-Augmented Workflows</h3>
              <p className="text-sm text-navySlate mb-4">
                I use AI daily as a thinking partner — for research, analysis, problem-solving, and accelerating delivery.
                Actively exploring AI-enabled analytics, including natural language querying and embedded analytics use cases.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Claude", "Generative AI (certified)", "Prompt engineering", "AI-enabled analytics"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Project & Operations Platforms</h3>
              <p className="text-sm text-navySlate mb-4">
                Hands-on experience with the systems that run large-scale infrastructure programmes —
                from milestone tracking to financial coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Sitetracker", "Business Central", "Excel (advanced)", "AgilePM® certified"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Geospatial & Data Processing</h3>
              <p className="text-sm text-navySlate mb-4">
                Spatial analysis, scripted data pipelines, and semantic modelling for location-based decision-making —
                proven on EV charging site evaluation across Italy, now scaling to 10 countries.
              </p>
              <div className="flex flex-wrap gap-2">
                {["QGIS", "Python", "Power BI mapping", "Databricks"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-2">Web Development & Deployment</h3>
              <p className="text-sm text-navySlate mb-4">
                Building and maintaining production websites with modern frameworks. This site was built and
                deployed by me — design, code, and infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Git", "Vercel", "VS Code"].map(tag => (
                  <span key={tag} className="bg-sandBeige text-navySlate text-xs px-2 py-1 rounded-full border">{tag}</span>
                ))}
              </div>
            </div>

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

          {/* Service Cards */}
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
          <div className="bg-sandBeige rounded-xl p-8 mb-8">
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

          {/* Not sure */}
          <div className="border border-goldenWheat rounded-xl p-6 text-center">
            <p className="font-bold text-navySlate mb-2">Not sure which one fits?</p>
            <p className="text-sm text-navySlate mb-4">
              If your biggest problem is <em>"we don't know what we need"</em> — start with the BA Sprint.<br />
              If it's <em>"we have data but can't see it"</em> — start with the Power BI Rescue.<br />
              If it's both, let's talk about an ongoing retainer.
            </p>
            <a href="#contact" className="inline-block bg-navySlate text-lightStone px-6 py-2 rounded-lg hover:bg-goldenWheat transition font-semibold">
              → Send me a message
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about-me" className="py-16 px-4 bg-sandBeige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="bg-white border rounded-xl p-8 text-navySlate leading-relaxed space-y-4">
            <p>
              I bring passion, precision, and intuition to every project. I listen first, ask the right questions,
              and deliver solutions that work in practice — not just in theory.
            </p>
            <p>
              What sets me apart: I'm forthcoming about challenges, transparent about timelines, and relentless about
              quality. I don't hide behind jargon or complexity — I translate it into clarity. Whether I'm redesigning
              a utilization model for a pan-European team or building a competitor analysis framework across 10 markets,
              my clients know exactly what they're getting and why it matters.
            </p>
            <p>
              I'm remote-first, deadline-driven, and invested in the success of every organization I work with.
              Whether you need a one-off analysis, a complete operations overhaul, or ongoing support — I show up
              ready to deliver.
            </p>
            <p>
              Based in Abruzzo with my family and two beautiful Maremma Sheepdogs. Always learning. Always improving. Always ready.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-lightStone">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="mb-6 text-navySlate">
            Consulting, project collaboration, or remote support. If you're looking to streamline, grow, or automate — let's talk.
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
