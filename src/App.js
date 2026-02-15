import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import Case Study Pages
import EONSiteStrategyMapping from "./pages/case-studies/EONSiteStrategyMapping";

// Expandable Box Component
function ExpandableBox({ title, short, full, caseStudyLink }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brightGray mb-3">
        {expanded ? full : short}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-driftwood font-semibold hover:opacity-80 transition cursor-pointer"
        >
          {expanded ? "Show less ↑" : "Learn more →"}
        </button>
        {caseStudyLink && (
          <Link 
            to={caseStudyLink} 
            className="text-bigStone font-semibold hover:text-driftwood transition"
          >
            View Full Case Study →
          </Link>
        )}
      </div>
    </div>
  );
}

// Homepage Component
function HomePage() {
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
            <a href="#ai-tools" className="hover:opacity-80">AI & Automation</a>
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
            Forward-thinking operations specialist with 20+ years of experience across BI, project delivery, and business transformation. I combine deep operational expertise with AI-powered tools and Power BI reporting to find, design, and implement the right solutions — fast. Flexible, hands-on, and built to adapt to whatever your business needs next.
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
              title="PMO & Project Coordination"
              short="Strategic project coordination and cross-functional alignment across multi-country teams."
              full="I keep complex programmes moving. From managing 50+ concurrent infrastructure projects to coordinating across 10 countries at E.ON Drive Infrastructure, I bring structure to chaos. That means clear milestones, tracked dependencies, flagged risks, and stakeholders who always know where things stand. I've redesigned meeting structures, standardized agenda formats, and introduced cadences that keep cross-functional teams aligned — not just informed. Currently embedded in E.ON Drive's Central Team supporting pan-European EV infrastructure delivery."
            />

            <ExpandableBox 
              title="Process & Systems Optimization"
              short="Operational systems and workflows that actually scale — designed from the ground up or rebuilt from scratch."
              full="I design the systems that let teams work smarter. Whether it's restructuring a broken utilization model, streamlining how meetings are run across departments, or automating manual admin tasks — I find the bottleneck and fix it. The result? Less time on spreadsheets, more time on strategy. I've built entire operational frameworks from zero and redesigned existing ones that weren't delivering."
            />

            <ExpandableBox 
              title="Data Management & Analysis"
              short="From raw data to actionable insight — I make your information work for you."
              full="Data without insight is noise. I clean, organize, and analyze information to surface what actually matters — trends, inefficiencies, growth opportunities. Whether it's competitor analysis across 10 international markets or investment-grade site evaluations, I turn fragmented data into clear direction."
            />

            <ExpandableBox 
              title="Ground-Up Business Building"
              short="From zero to fully operational — I build the infrastructure new ventures need to launch and scale."
              full="I've launched departments and businesses from scratch — not just paperwork, but the full operational ecosystem. IT setup and connectivity, department structures, back-office systems, compliance frameworks, reporting infrastructure, and the day-to-day processes that make everything run. When you're building something new, I make sure you're not just open for business — you're built to scale."
            />

            <ExpandableBox 
              title="Power BI, SQL & Dashboards"
              short="Interactive dashboards, robust queries, and reporting that leadership actually uses."
              full="I build dashboards that answer real business questions — not vanity metrics. From Power BI with DAX and M-language to SQL-driven data pipelines, I create reporting systems that save hours every week. Geospatial mapping, cross-filtering, weighted scoring models — if the data exists, I'll make it talk."
            />

            <ExpandableBox 
              title="AI Tools & Workflow Automation"
              short="Leveraging AI platforms and no-code automation to accelerate delivery and reduce manual overhead."
              full="I integrate AI tools into real business workflows — not as novelties, but as force multipliers. From automating repetitive processes with Make to using Claude and ChatGPT for content generation, research synthesis, and data analysis. I work with Gamma for rapid presentation builds, NotebookLM for research structuring, Descript for content production, and ElevenLabs for voice applications. These aren't experiments — they're part of how I deliver faster, smarter, and with less overhead."
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & PROFESSIONAL DEVELOPMENT */}
      <section id="certifications" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Professional Development</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {/* AgilePM v3 Practitioner */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 flex items-center justify-center">
                <img
                  src="/agilepm-practitioner-badge.png"
                  alt="AgilePM v3 Practitioner certification badge"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-full items-center justify-center border-4 border-blue-400 shadow-lg" style={{display: 'none'}}>
                  <div className="text-center">
                    <p className="text-sm font-bold text-blue-600">AgilePM</p>
                    <p className="text-xs font-semibold text-blue-700">v3</p>
                    <p className="text-xs text-blue-600 mt-1">PRACTITIONER</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AgilePM® v3 Practitioner</h3>
              <p className="text-brightGray text-sm">
                Fully certified at Practitioner level in Agile Project Management. Proven methodology for managing iterative delivery, cross-functional teams, and complex stakeholder environments.
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
                Microsoft certified. Expertise in data modeling, visualization, and business intelligence. Core to dashboard delivery and reporting strategy across every engagement.
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
                Comprehensive training in AI applications, prompt engineering, and automation strategies. Directly shaped my approach to process optimization and modern business solutions.
              </p>
              <p className="text-sm text-driftwood font-medium mt-3">Outskill</p>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Training & Specialized Skills</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">15 Days of SQL: The Complete SQL Masterclass 2024</p>
                <p className="text-sm text-brightGray">Udemy · Nikolai Schuler · Jan 2024</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">SQL - MySQL for Data Analytics & BI</p>
                <p className="text-sm text-brightGray">Udemy · 365 Careers · Aug 2023</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">Mastering SQL Server 2016 SSIS - Part 1</p>
                <p className="text-sm text-brightGray">Udemy · Kameswara Sarma Uppuluri · Mar 2024</p>
              </div>
              <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
                <p className="font-semibold text-bigStone">Business Analysis Fundamentals - IIBA Endorsed</p>
                <p className="text-sm text-brightGray">Udemy · The BA Guide · May 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS & CASE STUDIES */}
      <section id="projects" className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects & Case Studies</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ExpandableBox 
              title="E.ON Drive – Central Team Operations"
              short="Embedded in E.ON Drive Infrastructure's Central Team supporting pan-European EV operations across 10 countries. Redesigned the Utilization Model, led multi-country Competitor Analysis, and restructured cross-functional meeting frameworks."
              full="THE CHALLENGE: E.ON Drive Infrastructure operates across 10 countries, each with distinct market conditions, regulatory environments, and competitive landscapes. The Central Team needed standardized frameworks and reliable data models to support strategic decisions at scale — but existing tools and processes weren't keeping pace. || MY ROLE: Operations and data specialist within the Central Team, responsible for driving process improvements, analytical frameworks, and meeting governance across the pan-European portfolio. || THE SOLUTION: (1) Utilization Model Redesign — Identified critical gaps in the existing utilization model that was underpinning infrastructure planning. Redesigned the methodology and data structure to deliver more accurate, actionable utilization insights across all markets. (2) Multi-Country Competitor Analysis — Currently designing and developing a comprehensive competitor analysis framework based on requirements gathered from all 10 EDRI countries. Each market has different competitive dynamics, so the framework accommodates country-specific parameters while maintaining a unified reporting structure. (3) Meeting Governance & Structure — Restructured the meeting setup across workstreams. Designed standardized agenda formats, created templates for recurring meetings, and introduced clear cadences that improved cross-functional alignment and reduced time wasted in unstructured sessions. || THE RESULTS: Utilization model now delivers more reliable data for infrastructure planning decisions. Competitor analysis framework progressing through development with buy-in from all 10 country teams. Meeting restructuring adopted across workstreams, improving alignment and accountability. Standardized formats reduced preparation time and ensured consistent outputs. || TOOLS USED: Power BI, Excel, Sitetracker, cross-functional coordination across 10 international markets. || KEY TAKEAWAY: Working at the Central Team level means designing for scale. Every framework, every model, every process needs to work across 10 different markets with different needs — and still deliver consistent, reliable insight. That's where operational discipline meets analytical thinking."
            />

            <ExpandableBox 
              title="E.ON Drive – DNO Process Standardisation"
              short="Standardized DNO application process, eliminating bottlenecks and keeping 50+ concurrent EV infrastructure projects on schedule."
              full="THE CHALLENGE: No standardized process for DNO (Distribution Network Operator) applications. Delays and misunderstandings causing project bottlenecks. Multiple stakeholders (DNOs, IDNOs, finance, engineering) with no clear coordination. 50+ concurrent projects at risk of timeline slippage. || MY ROLE: Single point of contact for all pre-work involving DNOs and IDNOs across the UK deployment portfolio. Acted as liaison between external network operators, internal engineering teams, and finance. || THE SOLUTION: (1) Process Design — Analyzed existing workflows, identified pain points, and designed a simplified, standardized DNO application process. (2) Cross-Functional Collaboration — Worked closely with finance team to align payment tracking with application milestones. (3) Sitetracker Implementation — Created milestone tracker providing real-time visibility of project progress and key deliverables. (4) Business Central Integration — Streamlined payment tracking system, liaising between accounts and project teams for clear visibility of payments and outstanding balances. || THE RESULTS: Eliminated bottlenecks in DNO application process. Projects kept on schedule despite complex regulatory environment. Clear visibility across stakeholders on timelines and dependencies. Simplified tracking method adopted across entire UK deployment team. Reduced administrative overhead and manual follow-ups. || TOOLS USED: Sitetracker, Business Central, Excel, stakeholder coordination across Engineering, Finance, and external DNO/IDNO partners. || KEY TAKEAWAY: By standardizing what was previously an ad-hoc process, we turned a major bottleneck into a competitive advantage. Projects that previously stalled for weeks waiting on DNO approvals now moved through a clear, tracked pipeline."
            />

            <ExpandableBox 
              title="E.ON Drive – Site Strategy Mapping"
              short="Built Power BI dashboard with geospatial data integration to evaluate and score 890 potential EV charging sites across Italy — now expanding to all 10 EDRI countries with tailored requirements per market."
              full="Originally delivered as a multi-month project integrating QGIS geospatial processing, Python scripting, and Power BI to create a comprehensive site evaluation system for Italy. Designed weighted scoring methodology covering traffic, accessibility, facilities, amenities, and competition. Delivered interactive mapping with cross-filtering capabilities and full user documentation. Now scaling this framework across all 10 EDRI countries, each with distinct market requirements and data landscapes. Working closely with the IT department to facilitate technical integration, data access, and infrastructure needs across every market. The goal: a unified, scalable site strategy tool that adapts to local conditions while maintaining consistent evaluation standards."
              caseStudyLink="/case-study/eon-site-strategy-mapping"
            />

            <ExpandableBox 
              title="SWARCO – PoGo EV Investment Department"
              short="Built data infrastructure and evaluation framework for new EV Investment Department from ground up. Unified fragmented data for Azure migration and created systems for evaluating large-scale EV infrastructure sites."
              full="THE CHALLENGE: SWARCO was operating in manual mode with fragmented data across dozens of sources — different files, apps, and back-office systems with no unified view. The company was preparing to establish a new EV Investment Department to expand ultra-fast charging infrastructure across Scotland and the UK, but lacked the data infrastructure to make informed investment decisions. || MY ROLE: Initially hired on a 3–6 month contract to consolidate and clean data for Azure migration. Due to successful delivery, role expanded to become founding member of new EV Investment Department (team of 3: department director, engineer, and myself). Responsible for all back-office operations, data management, and business intelligence systems. || THE SOLUTION: (1) Data Consolidation & Azure Migration — Successfully unified fragmented data sources across the organization in preparation for Azure platform migration, creating single source of truth for business operations. (2) Project Evaluation Framework — Designed and implemented tracking/evaluation system for scoping investment-grade EV charging sites. Created comprehensive tracking of all incoming projects with dates, evaluation scores, and decision commentary. (3) Self-Directed Power BI Upskilling — Independently studied for and achieved Microsoft PL-300 Power BI Data Analyst certification to meet emerging business intelligence needs. (4) KPI Dashboard Development — Built first-ever EV charging KPIs dashboard for SWARCO using Power BI with DAX and M-language. Created custom visualizations tracking project profitability, resource utilization, and pipeline health. (5) Training & Documentation — Created user manuals and delivered training sessions ensuring teams could interpret and act on insights independently. || THE RESULTS: Successfully unified fragmented data sources across entire organization, enabling data-driven decision-making. Established project evaluation system that assessed hundreds of potential investment sites. Created BI infrastructure that directly supported formation of PoGo Charge brand. Delivered executive dashboards providing real-time visibility into investment pipeline. Achieved Microsoft PL-300 certification while delivering production systems. Enabled department to scale from 3 people to full investment operation evaluating large-scale EV infrastructure sites. || TOOLS USED: Power BI, DAX, M-language, Excel, Azure data platform, multiple CRM and project management systems. || KEY TAKEAWAY: Starting with messy, fragmented data across dozens of sources, I built the data infrastructure and BI systems that enabled SWARCO to launch their EV Investment Department. The evaluation framework and dashboards I created became the foundation for their investment strategy and the formation of the PoGo Charge brand."
            />

            <ExpandableBox 
              title="SWARCO Smart Charging – Scotland Operations"
              short="Built Power BI dashboards and PMO reporting that supported leadership decisions and aligned cross-team planning."
              full="Designed and deployed comprehensive Power BI reporting suite for a leading traffic management company. Integrated data from multiple sources including CRM, project management tools, and financial systems to create unified executive dashboards. Developed automated weekly performance reports tracking project profitability, resource utilization, and pipeline health. Created custom visualizations that identified bottlenecks in the sales-to-delivery process, enabling targeted process improvements. Collaborated with department heads to define KPIs that aligned with their strategic goals. Delivered training sessions to ensure teams could interpret and act on insights independently. The result was enhanced visibility into business performance and more informed strategic decision-making across the organization."
            />

            <ExpandableBox 
              title="Virtual Jola – Remote Executive Support"
              short="Project coordination, workflows, stakeholder engagement, and compliance tracking for small businesses and water utilities."
              full="Provided strategic remote executive support to CEOs and small business owners across multiple sectors, acting as operational backbone during critical growth phases. Coordinated cross-functional projects from initiation to delivery, ensuring stakeholder alignment and on-time completion. Designed custom workflows and process improvements tailored to client needs, enhancing operational efficiency. Water Utilities Experience (WCS Group): Tracked engineer visits, managed back-office enquiries, and coordinated project administration for water infrastructure projects. Maintained project documentation and compliance tracking across field operations. Multi-Client Project Management: Managed executive schedules, coordinated meetings, and tracked project milestones across multiple concurrent client engagements. Recorded meeting minutes, distributed action items, and liaised with stakeholders to streamline project execution and communication. Created templates and documentation that enabled teams to scale efficiently."
            />
          </div>
        </div>
      </section>

      {/* AI TOOLS & MODERN WORKFLOW */}
      <section id="ai-tools" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI-Powered Delivery</h2>
          <p className="text-brightGray text-center mb-10 max-w-3xl mx-auto">
            I don't just know these tools — I use them daily to deliver faster, sharper, and with less overhead. 
            These platforms are integrated into how I work, not bolted on as afterthoughts.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Research & Analysis</h3>
              <p className="text-brightGray text-sm mb-3">
                Deep research synthesis, data analysis, and structured insight generation using AI-powered platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Claude</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">ChatGPT</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">NotebookLM</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Manus</span>
              </div>
            </div>

            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Automation & Workflows</h3>
              <p className="text-brightGray text-sm mb-3">
                Process automation, system integrations, and no-code workflow design that eliminates manual tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Make</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Lovable</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Precision</span>
              </div>
            </div>

            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Content & Presentations</h3>
              <p className="text-brightGray text-sm mb-3">
                Rapid deck creation, video editing, voice generation, and professional content production.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Gamma</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Descript</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">ElevenLabs</span>
              </div>
            </div>

            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Social & Outreach</h3>
              <p className="text-brightGray text-sm mb-3">
                Social media management, scheduling, and AI-assisted engagement strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">SocialSweep</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">ChatAid</span>
              </div>
            </div>

            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Finance & Operations</h3>
              <p className="text-brightGray text-sm mb-3">
                Financial tracking, hiring workflows, and membership platform management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Hiro Finance</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">HireAlli</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Membership.io</span>
              </div>
            </div>

            <div className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Client & Revenue Tools</h3>
              <p className="text-brightGray text-sm mb-3">
                Client onboarding, revenue management, and collaborative review platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">BuddyPro</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Revio</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">Revaly</span>
                <span className="text-xs bg-lightStone px-3 py-1 rounded-full">YourAtlas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-brightGray">
            <p className="text-lg leading-relaxed">
              I bring passion, precision, and intuition to every project. I listen first, ask the right questions, and deliver solutions that work in practice — not just in theory.
            </p>

            <p className="text-lg leading-relaxed">
              What sets me apart: I'm forthcoming about challenges, transparent about timelines, and relentless about quality. I don't hide behind jargon or complexity — I translate it into clarity. Whether I'm redesigning a utilization model for a pan-European team or building a competitor analysis framework across 10 markets, my clients know exactly what they're getting and why it matters.
            </p>

            <p className="text-lg leading-relaxed">
              I'm remote-first, deadline-driven, and invested in the success of every organization I work with. Whether you need a one-off analysis, a complete operations overhaul, or ongoing support — I show up ready to deliver.
            </p>

            <p className="text-lg leading-relaxed italic text-center mt-8">
              Based in Abruzzo with my family and two beautiful Maremma Sheepdogs. Always learning. Always improving. Always ready.
            </p>
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

// Main App with Routes
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/eon-site-strategy-mapping" element={<EONSiteStrategyMapping />} />
    </Routes>
  );
}