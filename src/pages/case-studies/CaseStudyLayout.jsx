import React from "react";
import { Link } from "react-router-dom";

export default function CaseStudyLayout({ children, title, subtitle, industry, duration, scope, role }) {
  return (
    <div className="min-h-screen bg-white text-bigStone font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-brightGray/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3 text-bigStone no-underline">
            <img
              src="/logo.png"
              alt="Jola & Co. logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            <Link to="/#about" className="hover:opacity-80">About</Link>
            <Link to="/#certifications" className="hover:opacity-80">Certifications</Link>
            <Link to="/#projects" className="hover:opacity-80">Projects</Link>
            <Link to="/#contact" className="hover:opacity-80">Contact</Link>
            <a
              href="/Jola_Tacij_CV.pdf"
              className="bg-driftwood text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              View CV
            </a>
          </nav>
        </div>
      </header>

      {/* CASE STUDY HEADER */}
      <section className="py-12 px-4 bg-lightStone/40">
        <div className="max-w-4xl mx-auto">
          <Link to="/#projects" className="text-driftwood hover:opacity-80 mb-4 inline-block">
            ← Back to Projects
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mt-4">{title}</h1>
          <p className="text-xl text-driftwood mt-2">{subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div>
              <p className="text-sm text-brightGray">Industry</p>
              <p className="font-semibold">{industry}</p>
            </div>
            <div>
              <p className="text-sm text-brightGray">Duration</p>
              <p className="font-semibold">{duration}</p>
            </div>
            <div>
              <p className="text-sm text-brightGray">Scope</p>
              <p className="font-semibold">{scope}</p>
            </div>
            <div>
              <p className="text-sm text-brightGray">My Role</p>
              <p className="font-semibold">{role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm py-6 text-brightGray border-t">
        © {new Date().getFullYear()} Jola & Co. ·{" "}
        <a href="https://www.linkedin.com/in/jola-tacij/" target="_blank" rel="noopener noreferrer" className="underline">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
