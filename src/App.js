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
              title="PMO & Project Coordination"
              short="Strategic project coordination and team alignment that drives execution."
              full="End meetings with clarity and action. I coordinate complex projects across teams, ensuring stakeholders stay aligned and deliverables ship on time. Managing 50+ concurrent projects? I track dependencies, flag risks, and keep everyone moving forward. Currently supporting E.ON Drive Infrastructure with Sitetracker-based project tracking and cross-functional delivery."
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

      {/* PROJECTS & CASE STUDIES */}
      <section id="projects" className="py-16 px-4 bg-lightStone/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlighted Projects & Case Studies</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ExpandableBox 
              title="E.ON Drive Infrastructure – Case Study"
              short="Standardized DNO application process, eliminating bottlenecks and keeping 50+ concurrent EV infrastructure projects on schedule."
              full="THE CHALLENGE: No standardized process for DNO (Distribution Network Operator) applications. Delays and misunderstandings causing project bottlenecks. Multiple stakeholders (DNOs, IDNOs, finance, engineering) with no clear coordination. 50+ concurrent projects at risk of timeline slippage. || MY ROLE: Single point of contact for all pre-work involving DNOs and IDNOs across the UK deployment portfolio. Acted as liaison between external network operators, internal engineering teams, and finance. || THE SOLUTION: (1) Process Design - Analyzed existing workflows, identified pain points, and designed a simplified, standardized DNO application process. (2) Cross-Functional Collaboration - Worked closely with finance team to align payment tracking with application milestones. (3) Sitetracker Implementation - Created milestone tracker providing real-time visibility of project progress and key deliverables. (4) Business Central Integration - Streamlined payment tracking system, liaising between accounts and project teams for clear visibility of payments and outstanding balances. || THE RESULTS: Eliminated bottlenecks in DNO application process. Projects kept on schedule despite complex regulatory environment. Clear visibility across stakeholders on timelines and dependencies. Simplified tracking method adopted across entire UK deployment team. Reduced administrative overhead and manual follow-ups. || TOOLS USED: Sitetracker, Business Central, Excel, stakeholder coordination across Engineering, Finance, and external DNO/IDNO partners. || KEY TAKEAWAY: By standardizing what was previously an ad-hoc process, we turned a major bottleneck into a competitive advantage. Projects that previously stalled for weeks waiting on DNO approvals now moved through a clear, tracked pipeline."
            />

            <ExpandableBox 
              title="SWARCO – PoGo EV Investment Department (Case Study)"
              short="Built data infrastructure and evaluation framework for new EV Investment Department from ground up. Unified fragmented data for Azure migration and created systems that shaped £millions in infrastructure investment decisions."
              full="THE CHALLENGE: SWARCO was operating in manual mode with fragmented data across dozens of sources - different files, apps, and back-office systems with no unified view. The company was preparing to establish a new EV Investment Department to expand ultra-fast charging infrastructure across Scotland and the UK, but lacked the data infrastructure to make informed investment decisions. Without a clear evaluation system, there was no way to assess which sites were viable for multi-million pound infrastructure investments. || MY ROLE: Initially hired on a 3-6 month contract to consolidate and clean data for Azure migration. Due to successful delivery, role expanded to become founding member of new EV Investment Department (team of 3: department director, engineer, and myself). Responsible for all back-office operations, data management, and business intelligence systems. || THE SOLUTION: (1) Data Consolidation & Azure Migration - Successfully unified fragmented data sources across the organization in preparation for Azure platform migration, creating single source of truth for business operations. (2) Project Evaluation Framework - Designed and implemented tracking/evaluation system for scoping investment-grade EV charging sites. Created comprehensive tracking of all incoming projects with dates, evaluation scores, and decision commentary. (3) Self-Directed Power BI Upskilling - Independently studied for and achieved Microsoft PL-300 Power BI Data Analyst certification to meet emerging business intelligence needs. (4) KPI Dashboard Development - Built first-ever EV charging KPIs dashboard for SWARCO using Power BI with DAX and M-language. Created custom visualizations tracking project profitability, resource utilization, and pipeline health. (5) Training & Documentation - Created user manuals and delivered training sessions ensuring teams could interpret and act on insights independently. || THE RESULTS: Successfully unified fragmented data sources across entire organization, enabling data-driven decision-making. Established project evaluation system that assessed hundreds of potential investment sites. Created BI infrastructure that directly supported formation of PoGo Charge brand. Delivered executive dashboards providing real-time visibility into investment pipeline. Achieved Microsoft PL-300 certification while delivering production systems. Enabled department to scale from 3 people to full investment operation supporting £multi-million infrastructure decisions. || TOOLS USED: Power BI, DAX, M-language, Excel, Azure data platform, multiple CRM and project management systems || KEY TAKEAWAY: Starting with messy, fragmented data across dozens of sources, I built the data infrastructure and BI systems that enabled SWARCO to launch their EV Investment Department. The evaluation framework and dashboards I created became the foundation for their investment strategy and the formation of the PoGo Charge brand."
            />

            <ExpandableBox 
              title="SWARCO Smart Charging – Scotland Operations (Case Study)"
              short="Created Operations Dashboard in Power BI for project tracking and Finance/Accounting dashboard. Consolidated Scotland team data onto master spreadsheet, streamlining reporting workflows."
              full="THE CHALLENGE: SWARCO's Scottish operations team (Smart Charging division) was managing EV charging projects across Scotland without unified tracking systems. Project data was scattered, financial reporting was manual and time-consuming, and there was no real-time visibility into operational performance. Leadership needed clear oversight of project pipeline, resource allocation, and financial health but lacked the tools to get it. || MY ROLE: Brought in to consolidate data and create operational visibility for the Scotland-based team. Responsible for designing dashboards, streamlining data workflows, and enabling self-service reporting. || THE SOLUTION: (1) Operations Dashboard - Created comprehensive Power BI dashboard for tracking all Scottish projects from pipeline through delivery. Provided real-time visibility into project status, timelines, and resource allocation. (2) Finance/Accounting Dashboard - Built dedicated financial tracking dashboard enabling finance team to monitor budgets, expenditures, and project profitability without manual data compilation. (3) Master Data Consolidation - Consolidated fragmented Scotland team data onto meaningful master spreadsheet that became the single source feeding all reporting systems. Eliminated duplicate data entry and manual reconciliation. (4) Automated Reporting Workflows - Transformed manual monthly reporting into automated dashboards that updated in real-time, saving hours of administrative work. || THE RESULTS: Operations team gained real-time visibility into project pipeline and resource allocation. Finance team reduced monthly reporting time by approximately 60% through automated dashboards. Eliminated data inconsistencies through single master data source. Leadership could make faster decisions based on current data rather than week-old reports. Team adopted dashboards as primary operational tools, checking them daily for project status. || TOOLS USED: Power BI, DAX, Power Query, Excel, data consolidation and cleansing workflows || KEY TAKEAWAY: By consolidating scattered data and creating purpose-built dashboards for operations and finance, I transformed how the Scotland team managed their growing EV charging portfolio. What was once a manual, time-consuming reporting process became an automated system providing real-time operational intelligence."
            />

Summary - Best Practice Going Forward:
✅ DO: Copy/paste code directly into VS Code
✅ DO: Work directly in your project files
✅ DO: Save in VS Code, then commit and push
❌ DON'T: Download files unless it's something like a CV, image, or document
❌ DON'T: Create a library folder for code files
Does this make sense? Copy those two boxes above into your VS Code now! 🎯RetryJwhy dos it say it changed the cv?
I don't see changes in localhost :(
C:\Users\Admin\jolaandco>git add src/App.js
C:\Users\Admin\jolaandco>git commit -m "Split SWARCO into two case studies - PoGo Investment Dept and Scotland Operations"
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)     
        modified:   public/Jola_Tacij_CV.docx
no changes added to commit (use "git add" and/or "git commit -a")
C:\Users\Admin\jolaandco>git push origin main
Everything up-to-date
C:\Users\Admin\jolaandco>Show moreThe issue is that your src/App.js file wasn't actually modified on your local machine. Here's what's happening:
The Problem:

❌ Your src/App.js in VS Code doesn't have the new changes yet
⚠️ Your public/Jola_Tacij_CV.docx was modified (maybe you opened it?)
✅ Git is correctly saying "nothing to commit" because App.js wasn't changed


The Solution - 3 Steps:
Step 1: Check if you actually made the changes
Open your src/App.js in VS Code and search for "SWARCO – PoGo EV Investment Department".
Do you see it?

✅ YES → Go to Step 2
❌ NO → You need to copy/paste the code I gave you above


Step 2: If you made the changes, check git status
bashgit status
Does it show modified: src/App.js?

✅ YES → Go to Step 3
❌ NO → The file wasn't saved. Save it in VS Code (Ctrl+S) then try again


Step 3: Stage and commit
bash# Stage ONLY App.js (ignore the CV for now)
git add src/App.js

# Check what's staged
git status

# Commit
git commit -m "Split SWARCO into two case studies - PoGo Investment Dept and Scotland Operations"

# Push
git push origin main

About the CV change:
The CV probably got modified when you opened it. You have two options:
Option A: Ignore it for now
bash# Discard the CV changes
git restore public/Jola_Tacij_CV.docx
Option B: Commit it too
bash# Stage both files
git add src/App.js public/Jola_Tacij_CV.docx

# Commit both
git commit -m "Update website case studies and CV"

# Push
git push origin main

Quick Check:
Did you actually copy/paste those two SWARCO boxes into your VS Code and SAVE the file?
If not, that's why nothing is committing! 😊Retry<div className="grid gap-6 md:grid-cols-2">
            <ExpandableBox 
              title="E.ON Drive Infrastructure – Case Study"
              short="Standardized DNO application process, eliminating bottlenecks and keeping 50+ concurrent EV infrastructure projects on schedule."
            pastedJlook this is what is now in my App.js:
it looks updated. Then I followed your guide and in the terminal: git add src/App.js
and git status
C:\Users\Admin\jolaandco>git add src/App.js
C:\Users\Admin\jolaandco>git status
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)     
        modified:   public/Jola_Tacij_CV.docx
no changes added to commit (use "git add" and/or "git commit -a")
C:\Users\Admin\jolaandco>Show moreAh! I see the issue now!
Your App.js IS updated (I can see all 4 case studies in the code you shared), BUT Git is saying it hasn't changed. This means:
The Problem: Git thinks the file is unchanged
This can happen when:

The file has the same content as what's already committed, OR
There's a file encoding/line ending issue

Let's check what Git thinks:
bashgit diff src/App.js
This will show you what Git sees as different. If it shows nothing, then the changes are already committed!

Try This:
Option 1: Check if changes are already on GitHub
Maybe you already pushed these changes earlier? Check your live website - are the two SWARCO case studies already there?
Option 2: Force Git to see the changes
bash# Check the file status specifically
git status src/App.js

# If nothing shows, try:
git diff HEAD src/App.js

# Still nothing? The changes might already be committed. Check:
git log --oneline -5
Option 3: Make a tiny change to trigger Git

Open src/App.js in VS Code
Add a space somewhere (like at the end of a line)
Save (Ctrl+S)
Try again:

bashgit add src/App.js
git status

About the CV:
Let's ignore that for now:
bashgit restore public/Jola_Tacij_CV.docx
This will discard the CV changes so it stops showing up.

Try git diff src/App.js first and tell me what it shows! That will tell us what's going on. 🔍RetryJgit diff src/App.js shows me nothing.
AN i checked localhost and - still no change.Okay! Now I understand the issue. The changes you made in VS Code were NOT saved properly, OR you edited the wrong file.
Let's troubleshoot:
Step 1: Verify which file you're editing
In VS Code, look at the top of the tab where you have App.js open. Does it say:

src/App.js ✅ (correct)
App.js somewhere else ❌ (wrong location)

Step 2: Check if VS Code shows unsaved changes
Look at the tab name in VS Code:

White dot next to filename = unsaved changes
X button only = saved

If there's a white dot, press Ctrl+S to save!
Step 3: Verify the actual file content
Run this command to see what's actually in your project's App.js:
bashtype src\App.js | findstr "SWARCO"
Does it show:

"SWARCO – PoGo EV Investment Department (Case Study)" ✅ Changes are there
"SWARCO – BI & Reporting" ❌ Changes are NOT there


Step 4: If changes are NOT there, let's do it manually

Open C:\Users\Admin\jolaandco\src\App.js in VS Code
Find the line that says title="SWARCO – BI & Reporting"
Select and delete both the SWARCO and PoGo <ExpandableBox> sections
Paste the 3 new boxes I gave you earlier (E.ON, SWARCO PoGo, SWARCO Scotland)
SAVE the file (Ctrl+S)
Check localhost - refresh the page (Ctrl+Shift+R)


What does this command show you:
bashtype src\App.js | findstr "SWARCO"
Tell me the output! 🔍RetryClaude can make mistakes. Please double-check responses.

            <ExpandableBox 
              title="SWARCO Smart Charging – Scotland Operations (Case Study)"
              short="Created Operations Dashboard in Power BI for project tracking and Finance/Accounting dashboard. Consolidated Scotland team data onto master spreadsheet, streamlining reporting workflows."
              full="THE CHALLENGE: SWARCO's Scottish operations team (Smart Charging division) was managing EV charging projects across Scotland without unified tracking systems. Project data was scattered, financial reporting was manual and time-consuming, and there was no real-time visibility into operational performance. Leadership needed clear oversight of project pipeline, resource allocation, and financial health but lacked the tools to get it. || MY ROLE: Brought in to consolidate data and create operational visibility for the Scotland-based team. Responsible for designing dashboards, streamlining data workflows, and enabling self-service reporting. || THE SOLUTION: (1) Operations Dashboard - Created comprehensive Power BI dashboard for tracking all Scottish projects from pipeline through delivery. Provided real-time visibility into project status, timelines, and resource allocation. (2) Finance/Accounting Dashboard - Built dedicated financial tracking dashboard enabling finance team to monitor budgets, expenditures, and project profitability without manual data compilation. (3) Master Data Consolidation - Consolidated fragmented Scotland team data onto meaningful master spreadsheet that became the single source feeding all reporting systems. Eliminated duplicate data entry and manual reconciliation. (4) Automated Reporting Workflows - Transformed manual monthly reporting into automated dashboards that updated in real-time, saving hours of administrative work. || THE RESULTS: Operations team gained real-time visibility into project pipeline and resource allocation. Finance team reduced monthly reporting time by approximately 60% through automated dashboards. Eliminated data inconsistencies through single master data source. Leadership could make faster decisions based on current data rather than week-old reports. Team adopted dashboards as primary operational tools, checking them daily for project status. || TOOLS USED: Power BI, DAX, Power Query, Excel, data consolidation and cleansing workflows || KEY TAKEAWAY: By consolidating scattered data and creating purpose-built dashboards for operations and finance, I transformed how the Scotland team managed their growing EV charging portfolio. What was once a manual, time-consuming reporting process became an automated system providing real-time operational intelligence."
            />

Summary - Best Practice Going Forward:
✅ DO: Copy/paste code directly into VS Code
✅ DO: Work directly in your project files
✅ DO: Save in VS Code, then commit and push
❌ DON'T: Download files unless it's something like a CV, image, or document
❌ DON'T: Create a library folder for code files
Does this make sense? Copy those two boxes above into your VS Code now! 🎯RetryJwhy dos it say it changed the cv?
I don't see changes in localhost :(
C:\Users\Admin\jolaandco>git add src/App.js
C:\Users\Admin\jolaandco>git commit -m "Split SWARCO into two case studies - PoGo Investment Dept and Scotland Operations"
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)     
        modified:   public/Jola_Tacij_CV.docx
no changes added to commit (use "git add" and/or "git commit -a")
C:\Users\Admin\jolaandco>git push origin main
Everything up-to-date
C:\Users\Admin\jolaandco>Show moreThe issue is that your src/App.js file wasn't actually modified on your local machine. Here's what's happening:
The Problem:

❌ Your src/App.js in VS Code doesn't have the new changes yet
⚠️ Your public/Jola_Tacij_CV.docx was modified (maybe you opened it?)
✅ Git is correctly saying "nothing to commit" because App.js wasn't changed


The Solution - 3 Steps:
Step 1: Check if you actually made the changes
Open your src/App.js in VS Code and search for "SWARCO – PoGo EV Investment Department".
Do you see it?

✅ YES → Go to Step 2
❌ NO → You need to copy/paste the code I gave you above


Step 2: If you made the changes, check git status
bashgit status
Does it show modified: src/App.js?

✅ YES → Go to Step 3
❌ NO → The file wasn't saved. Save it in VS Code (Ctrl+S) then try again


Step 3: Stage and commit
bash# Stage ONLY App.js (ignore the CV for now)
git add src/App.js

# Check what's staged
git status

# Commit
git commit -m "Split SWARCO into two case studies - PoGo Investment Dept and Scotland Operations"

# Push
git push origin main

About the CV change:
The CV probably got modified when you opened it. You have two options:
Option A: Ignore it for now
bash# Discard the CV changes
git restore public/Jola_Tacij_CV.docx
Option B: Commit it too
bash# Stage both files
git add src/App.js public/Jola_Tacij_CV.docx

# Commit both
git commit -m "Update website case studies and CV"

# Push
git push origin main

Quick Check:
Did you actually copy/paste those two SWARCO boxes into your VS Code and SAVE the file?
If not, that's why nothing is committing! 😊Retry<div className="grid gap-6 md:grid-cols-2">
            <ExpandableBox 
              title="E.ON Drive Infrastructure – Case Study"
              short="Standardized DNO application process, eliminating bottlenecks and keeping 50+ concurrent EV infrastructure projects on schedule."
            pastedJlook this is what is now in my App.js:
it looks updated. Then I followed your guide and in the terminal: git add src/App.js
and git status
C:\Users\Admin\jolaandco>git add src/App.js
C:\Users\Admin\jolaandco>git status
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)     
        modified:   public/Jola_Tacij_CV.docx
no changes added to commit (use "git add" and/or "git commit -a")
C:\Users\Admin\jolaandco>Show moreAh! I see the issue now!
Your App.js IS updated (I can see all 4 case studies in the code you shared), BUT Git is saying it hasn't changed. This means:
The Problem: Git thinks the file is unchanged
This can happen when:

The file has the same content as what's already committed, OR
There's a file encoding/line ending issue

Let's check what Git thinks:
bashgit diff src/App.js
This will show you what Git sees as different. If it shows nothing, then the changes are already committed!

Try This:
Option 1: Check if changes are already on GitHub
Maybe you already pushed these changes earlier? Check your live website - are the two SWARCO case studies already there?
Option 2: Force Git to see the changes
bash# Check the file status specifically
git status src/App.js

# If nothing shows, try:
git diff HEAD src/App.js

# Still nothing? The changes might already be committed. Check:
git log --oneline -5
Option 3: Make a tiny change to trigger Git

Open src/App.js in VS Code
Add a space somewhere (like at the end of a line)
Save (Ctrl+S)
Try again:

bashgit add src/App.js
git status

About the CV:
Let's ignore that for now:
bashgit restore public/Jola_Tacij_CV.docx
This will discard the CV changes so it stops showing up.

Try git diff src/App.js first and tell me what it shows! That will tell us what's going on. 🔍RetryJgit diff src/App.js shows me nothing.
AN i checked localhost and - still no change.Okay! Now I understand the issue. The changes you made in VS Code were NOT saved properly, OR you edited the wrong file.
Let's troubleshoot:
Step 1: Verify which file you're editing
In VS Code, look at the top of the tab where you have App.js open. Does it say:

src/App.js ✅ (correct)
App.js somewhere else ❌ (wrong location)

Step 2: Check if VS Code shows unsaved changes
Look at the tab name in VS Code:

White dot next to filename = unsaved changes
X button only = saved

If there's a white dot, press Ctrl+S to save!
Step 3: Verify the actual file content
Run this command to see what's actually in your project's App.js:
bashtype src\App.js | findstr "SWARCO"
Does it show:

"SWARCO – PoGo EV Investment Department (Case Study)" ✅ Changes are there
"SWARCO – BI & Reporting" ❌ Changes are NOT there


Step 4: If changes are NOT there, let's do it manually

Open C:\Users\Admin\jolaandco\src\App.js in VS Code
Find the line that says title="SWARCO – BI & Reporting"
Select and delete both the SWARCO and PoGo <ExpandableBox> sections
Paste the 3 new boxes I gave you earlier (E.ON, SWARCO PoGo, SWARCO Scotland)
SAVE the file (Ctrl+S)
Check localhost - refresh the page (Ctrl+Shift+R)


What does this command show you:
bashtype src\App.js | findstr "SWARCO"
Tell me the output! 🔍RetryClaude can make mistakes. Please double-check responses.

            <ExpandableBox 
              title="PoGo – Investment Feasibility"
              short="Performed site feasibility and investment analysis for EV rollout using traffic and grid data."
              full="Led comprehensive site feasibility and ROI analysis for electric vehicle charging infrastructure expansion across high-traffic urban locations. Analyzed traffic patterns, demographic data, grid capacity, and competitive landscape to identify optimal deployment sites. Built financial models projecting multi-year revenue scenarios under various utilization rates and pricing strategies. Conducted risk assessment evaluating planning permissions, grid upgrade costs, and market timing. Collaborated with engineering teams to validate technical feasibility and installation costs. Created executive presentations that translated complex data into clear, actionable investment recommendations. The analysis identified priority sites and supported strategic decision-making for infrastructure investment allocation."
            />

            <ExpandableBox 
              title="Virtual Jola – Remote Executive Support"
              short="Project coordination, workflows, stakeholder engagement, and compliance tracking for small businesses and water utilities."
              full="Provided strategic remote executive support to CEOs and small business owners across multiple sectors, acting as operational backbone during critical growth phases. Coordinated cross-functional projects from initiation to delivery, ensuring stakeholder alignment and on-time completion. Designed custom workflows and process improvements tailored to client needs, enhancing operational efficiency. Water Utilities Experience (WCS Group): Tracked engineer visits, managed back-office enquiries, and coordinated project administration for water infrastructure projects. Maintained project documentation and compliance tracking across field operations. Multi-Client Project Management: Managed executive schedules, coordinated meetings, and tracked project milestones across multiple concurrent client engagements. Recorded meeting minutes, distributed action items, and liaised with stakeholders to streamline project execution and communication. Created templates and documentation that enabled teams to scale efficiently."
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
