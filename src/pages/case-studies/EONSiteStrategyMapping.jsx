import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";

export default function EONSiteStrategyMapping() {
  return (
    <CaseStudyLayout
      title="Site Strategy Mapping"
      subtitle="Power BI Dashboard & Geospatial Data Integration"
      industry="Energy / EV Infrastructure"
      duration="Multi-month development"
      scope="890 sites across 20 Italian regions"
      role="End-to-end: data engineering, analysis, visualisation, documentation"
    >
      {/* THE CHALLENGE */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-bigStone">The Challenge</h2>
        <p className="text-brightGray mb-4">
          The business needed a way to evaluate and prioritise hundreds of potential site locations 
          for infrastructure deployment. However, several technical constraints made this complex:
        </p>
        <ul className="space-y-2 text-brightGray">
          <li><strong>Data Silos:</strong> Site data lived in Sitetracker (company's semantic model), but lacked geographical region classification</li>
          <li><strong>Policy Constraints:</strong> Company policy prohibited mixing external data directly with the semantic model</li>
          <li><strong>Missing Coordinates:</strong> Existing sites lacked latitude/longitude data needed for mapping</li>
          <li><strong>New Data Integration:</strong> Proposed sites from traffic analysis (Localiser) needed to merge with existing pipeline data</li>
        </ul>
      </section>

      {/* MY SOLUTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-bigStone">My Solution</h2>
        <p className="text-brightGray mb-6">
          I designed a multi-stage data pipeline that worked around the constraints while delivering 
          a fully interactive Power BI dashboard.
        </p>

        {/* Stage 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-driftwood">Stage 1: Geospatial Data Engineering</h3>
          <ul className="space-y-2 text-brightGray">
            <li><strong>QGIS Processing:</strong> Used QGIS with Italian administrative boundary data to create a comprehensive coordinate reference system</li>
            <li><strong>Python Scripting:</strong> Developed Python scripts to generate virtual latitude/longitude coordinates for all Sitetracker records</li>
            <li><strong>Databricks Testing:</strong> Used Databricks environment for code testing and validation before deployment</li>
            <li><strong>Calculated Tables:</strong> Created DAX calculated tables in Visual Studio to add region classification without modifying the semantic model</li>
          </ul>
        </div>

        {/* Stage 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-driftwood">Stage 2: Site Scouting & Scoring</h3>
          <ul className="space-y-2 text-brightGray">
            <li><strong>Traffic Analysis:</strong> Used Localiser to identify high-traffic locations suitable for driver convenience stops</li>
            <li><strong>Virtual Site Inspection:</strong> Evaluated each location using satellite imagery and street view for accessibility, amenities, and competition</li>
            <li><strong>Weighted Scoring System:</strong> Designed a 5-criteria scoring methodology:</li>
          </ul>
          <div className="mt-4 ml-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-lightStone/60 p-3 rounded text-center">
              <p className="font-semibold text-bigStone">Traffic</p>
              <p className="text-driftwood text-lg font-bold">30%</p>
            </div>
            <div className="bg-lightStone/60 p-3 rounded text-center">
              <p className="font-semibold text-bigStone">Accessibility</p>
              <p className="text-driftwood text-lg font-bold">25%</p>
            </div>
            <div className="bg-lightStone/60 p-3 rounded text-center">
              <p className="font-semibold text-bigStone">Facilities</p>
              <p className="text-driftwood text-lg font-bold">20%</p>
            </div>
            <div className="bg-lightStone/60 p-3 rounded text-center">
              <p className="font-semibold text-bigStone">Amenities</p>
              <p className="text-driftwood text-lg font-bold">15%</p>
            </div>
            <div className="bg-lightStone/60 p-3 rounded text-center">
              <p className="font-semibold text-bigStone">Competition</p>
              <p className="text-driftwood text-lg font-bold">10%</p>
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-driftwood">Stage 3: Power BI Dashboard</h3>
          <ul className="space-y-2 text-brightGray">
            <li><strong>Interactive Mapping:</strong> Built map visualisations showing all 890 sites with colour-coded status and grades</li>
            <li><strong>Cross-Filtering:</strong> Implemented bi-directional filtering between map, charts, and data tables</li>
            <li><strong>Multi-View Design:</strong> Created multiple report pages for different analytical perspectives (by region, by project status, scoring reference)</li>
            <li><strong>User Documentation:</strong> Produced comprehensive user guide explaining methodology and navigation</li>
          </ul>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-bigStone">Technical Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Data Visualisation</p>
            <p className="text-sm text-brightGray">Power BI (DirectQuery & Import modes)</p>
          </div>
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Data Modelling</p>
            <p className="text-sm text-brightGray">DAX, Semantic Model, Calculated Tables</p>
          </div>
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Programming</p>
            <p className="text-sm text-brightGray">Python, Command Prompt / Terminal</p>
          </div>
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Development Environment</p>
            <p className="text-sm text-brightGray">Visual Studio, Databricks</p>
          </div>
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Geospatial</p>
            <p className="text-sm text-brightGray">QGIS, Italian administrative boundary datasets</p>
          </div>
          <div className="border-l-4 border-driftwood p-4 bg-lightStone/40 rounded">
            <p className="font-semibold">Data Sources</p>
            <p className="text-sm text-brightGray">Sitetracker, Localiser, SharePoint, Excel</p>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-bigStone">Outcomes & Impact</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-driftwood font-bold text-xl">✓</span>
            <p className="text-brightGray"><strong>689 proposed sites</strong> evaluated and scored using consistent methodology</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-driftwood font-bold text-xl">✓</span>
            <p className="text-brightGray"><strong>Unified view</strong> of 890 total sites across the entire Italian project pipeline</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-driftwood font-bold text-xl">✓</span>
            <p className="text-brightGray"><strong>Self-service analytics</strong> enabling stakeholders to filter and explore data independently</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-driftwood font-bold text-xl">✓</span>
            <p className="text-brightGray"><strong>Reusable framework</strong> for scoring methodology applicable to future market expansions</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-driftwood font-bold text-xl">✓</span>
            <p className="text-brightGray"><strong>Workaround solution</strong> that respected data governance policies while delivering business value</p>
          </div>
        </div>
      </section>

      {/* KEY SKILLS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-bigStone">Key Skills Demonstrated</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-driftwood">Technical Skills</h3>
            <ul className="space-y-1 text-brightGray text-sm">
              <li>• Power BI development (multi-page dashboards)</li>
              <li>• DAX & calculated tables</li>
              <li>• Python scripting for data transformation</li>
              <li>• Geospatial data processing (QGIS)</li>
              <li>• Working with semantic models</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-driftwood">Business Skills</h3>
            <ul className="space-y-1 text-brightGray text-sm">
              <li>• Stakeholder requirements gathering</li>
              <li>• Scoring methodology design</li>
              <li>• Problem-solving within constraints</li>
              <li>• Documentation & user enablement</li>
              <li>• End-to-end project ownership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY NOTE */}
      <section className="border-t pt-8">
        <p className="text-sm text-brightGray italic">
          Note: Due to confidentiality, specific data, site names, and company details have been omitted 
          from this case study. The methodology, technical approach, and skills demonstrated are accurately represented.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
