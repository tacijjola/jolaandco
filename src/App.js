import React from "react";
import "./App.css";

// Expandable Box Component
function ExpandableBox({ title, short, full }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brightGray mb-3">
        {expanded ? full : short}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-driftwood font-semibold hover:opacity-80 transition"
      >
        {expanded ? "Show less ↑" : "Learn more →"}
      </button>
    </div>
  );
}

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
            <ExpandableBox 
              title="Business Support & Operations"
              short="Strategic project coordination and team alignment that drives execution."
              full="End meetings with clarity and action. I coordinate complex projects across teams, ensuring stakeholders stay aligned and deliverables ship on time. Managing 50+ concurrent projects? I track dependencies, flag risks, and keep everyone moving forward."
            />

            <ExpandableBox 
              title="Process & Systems Optimization"
              short="Operational systems and workflows that scale with your business."
              full="Turn chaos into workflow. I design the systems that let your team work smarter — automating manual tasks, reducing bottlenecks, and freeing up 20-30% of admin time. The result? Your team focuses on strategy, not spreadsheets."
            />

            <ExpandableBox 
              title="Data Management & Analysis"
              short="Transform raw data into actionable insights and informed decisions."
              full="Data without insight is just noise. I clean, organize, and analyze your information to reveal what actually matters — identifying trends, spotting inefficiencies, and uncovering growth opportunities your team might miss."
            />

            <ExpandableBox 
              title="New Business Setup & Back Office"
              short="Build the operational foundation for growth from day one."
              full="Building something new? I create the operational backbone from day one — from documentation and compliance to invoicing and governance systems. Strong foundations scale; weak ones collapse."
            />

            <ExpandableBox 
              title="Power BI, SQL, & Automation"
              short="Dashboards, queries, and workflows that save time and surface insights."
              full="Stop copying data between systems. I build dashboards that answer your questions automatically, write queries that surface hidden patterns, and automate workflows that save hours every week. Your data works for you."
            />

            <ExpandableBox 
              title="Strategic Reporting"
              short="Clear, compelling reports and dashboards that matter to leadership."
              full="Data tells a story — if you know how to tell it. I create reports and dashboards that matter to leadership: investment ROI, department performance, market trends. Clear, compelling, actionable."
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & PROFESSIONAL DEVELOPMENT */}
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

          <div className="grid gap-6 md:grid-cols-2">
            <ExpandableBox 
              title="E.ON – Deployment Coordination"
              short="Led multiple EV infrastructure projects, managed DNO workflows, Sitetracker setup, and invoice governance with Business Central."
              full="Coordinated the full lifecycle of electric vehicle charging infrastructure projects across the UK. Managed complex workflows with Distribution Network Operators (DNOs) to secure grid connections and approvals. Implemented and configured Sitetracker as the central project management platform, ensuring real-time visibility across engineering, operations, and leadership teams. Established invoice governance processes in Microsoft Business Central, streamlining payment workflows and improving vendor relationships. Created standardized documentation and compliance tracking systems that scaled with rapid business growth. The result was improved project delivery timelines and enhanced cross-team coordination."
            />

            <ExpandableBox 
              title="SWARCO – BI & Reporting"
              short="Built Power BI dashboards and reporting that supported leadership decisions and aligned cross-team planning."
              full="Designed and deployed comprehensive Power BI reporting suite for a leading traffic management company. Integrated data from multiple sources including CRM, project management tools, and financial systems to create unified executive dashboards. Developed automated weekly performance reports tracking project profitability, resource utilization, and pipeline health. Created custom visualizations that identified bottlenecks in the sales-to-delivery process, enabling targeted process improvements. Collaborated with department heads to define KPIs that aligned with their strategic goals. Delivered training sessions to ensure teams could interpret and act on insights independently. The result was enhanced visibility into business performance and more informed strategic decision-making across the organization."
            />

            <ExpandableBox 
              title="PoGo – Investment Feasibility"
              short="Performed site feasibility and investment analysis for EV rollout using traffic and grid data."
              full="Led comprehensive site feasibility and ROI analysis for electric vehicle charging infrastructure expansion across high-traffic urban locations. Analyzed traffic patterns, demographic data, grid capacity, and competitive landscape to identify optimal deployment sites. Built financial models projecting multi-year revenue scenarios under various utilization rates and pricing strategies. Conducted risk assessment evaluating planning permissions, grid upgrade costs, and market timing. Collaborated with engineering teams to validate technical feasibility and installation costs. Created executive presentations that translated complex data into clear, actionable investment recommendations. The analysis identified priority sites and supported strategic decision-making for infrastructure investment allocation."
            />

            <ExpandableBox 
              title="Virtual Jola – Remote Executive Support"
              short="Project coordination, workflows, stakeholder engagement, and compliance tracking for small businesses."
              full="Provided strategic remote executive support to small businesses and growing consultancies, acting as operational backbone during critical growth phases. Coordinated cross-functional projects from initiation to delivery, ensuring stakeholder alignment and on-time completion. Designed and implemented workflow automation using tools like Zapier, Airtable, and Microsoft Power Automate, reducing administrative overhead and manual processes. Established compliance tracking systems for client contracts, certifications, and regulatory requirements. Managed client communications and stakeholder engagement, maintaining professional relationships across time zones. Created templates, SOPs, and documentation that enabled teams to scale without adding administrative headcount. The result was streamlined operations that allowed leadership to focus on strategic priorities and business development rather than day-to-day administrative tasks."
            />
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-brightGray">
            <p className="text-lg leading-relaxed">
              I bring passion, precision, and intuition to every project. I listen first, ask the right questions, and deliver solutions that actually work — not just theoretically, but in practice.
            </p>

            <p className="text-lg leading-relaxed">
              What sets me apart: I'm forthcoming about challenges, transparent about timelines, and relentless about quality. I don't hide behind jargon or complexity — I translate it into clarity. My clients know exactly what they're getting and why it matters.
            </p>

            <p className="text-lg leading-relaxed">
              I'm remote-first, deadline-driven, and genuinely invested in the success of the organizations I work with. Whether you need a one-off analysis, a complete operations overhaul, or ongoing support, I show up ready to make a difference.
            </p>

            <p className="text-lg leading-relaxed italic text-center mt-8">
              Based in Abruzzo with my family and two beautiful Maremma Sheepdogs. Always learning. Always improving. Always ready.
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