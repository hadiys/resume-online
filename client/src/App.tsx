import React, { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { portfolioData } from "./data/portfolioData";

type Section = "home" | "portfolio" | "blog" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const { personal } = portfolioData;

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "portfolio":
        return <PortfolioPage />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          
          {/* Main Container */}
          <div className="min-h-screen bg-zinc-950 text-zinc-300 relative selection:bg-blue-500/30 selection:text-blue-200">
            
            {/* Dubai Soft Faded Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0"
              style={{ 
                backgroundImage: `url(${personal.bgUrl})`,
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
              }}
            />

            {/* Top Navigation Bar - Centered, branding removed, Lato font, Uppercase, hover-only highlights */}
            <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
                
                {/* Nav Links - Centered, Uppercase, hover-only styles */}
                <nav className="flex items-center gap-1 sm:gap-2">
                  {(["home", "portfolio", "blog", "contact"] as const).map((sec) => {
                    const label = sec === "home" ? "HOME (CV)" : sec.toUpperCase();
                    const isActive = activeSection === sec;
                    return (
                      <button
                        key={sec}
                        onClick={() => setActiveSection(sec)}
                        className={`px-6 py-2.5 text-xs font-sans font-extrabold tracking-widest rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "text-zinc-100" 
                            : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                        }`}
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </nav>

              </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
              {renderSection()}
            </main>

            {/* Global Footer - Simplified custom footer text */}
            <footer className="mt-20 py-12 border-t border-white/5 bg-zinc-950 relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs text-zinc-500 font-sans font-medium">
                  Hadi Yaser 2026. Powered by React, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </footer>

          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
