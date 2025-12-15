import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowLeft, MessageCircle, Image, Code } from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const aiCategories = [
  {
    icon: MessageCircle,
    title: "Chat AI Tools",
    count: "6 resources",
    links: [
      { name: "Hotbot AI", url: "https://www.hotbot.com/" },
      { name: "Amabay AI", url: "https://www.amabay.ai/" },
      { name: "DorkGPT", url: "https://dorkgpt.com" },
      { name: "Voice Bot AI", url: "https://voice-bot-lemon.vercel.app/" },
      { name: "Lora Weights AI", url: "https://stuff.serp.ai/" },
      { name: "TalkTo AI", url: "https://talkto.ai/" },
    ],
  },
  {
    icon: Image,
    title: "Image Generating AI Tools",
    count: "7 resources",
    links: [
      { name: "Snapfiddle AI", url: "https://snapfiddle.ai/" },
      { name: "Pic Lumen AI", url: "https://www.piclumen.com" },
      {
        name: "Perchance AI",
        url: "https://perchance.org/ai-character-generator",
      },
      { name: "Diffusion Art", url: "https://diffusionart.co/" },
      { name: "Sinkin AI", url: "https://sinkin.ai/" },
      { name: "Stable AI", url: "https://stablediffusion.vercel.app/" },
      { name: "Paint By Text AI", url: "https://paintbytext.chat/" },
    ],
  },
  {
    icon: Code,
    title: "AI Coding Tools",
    count: "6 resources",
    links: [
      {
        name: "Aircodum AI",
        url: "https://www.aircodum.com/?ref=taaft_feat&utm_source=taaft_feat&utm_medium=referral",
      },
      {
        name: "FixThisBug AI",
        url: "https://fixthisbug.de/en?ref=taaft&utm_source=taaft&utm_medium=referral",
      },
      {
        name: "Regexer AI",
        url: "https://regexer.dev/?ref=taaft&utm_source=taaft&utm_medium=referral",
      },
      {
        name: "Smart AI Coder",
        url: "https://marketplace.visualstudio.com/items?itemName=Ainity.SmartAICoder&ref=taaft&utm_source=taaft&utm_medium=referral",
      },
      {
        name: "AIT Codex",
        url: "https://flowgpt.com/p/ait-codex?ref=taaft&utm_source=taaft&utm_medium=referral",
      },
      { name: "JIT Dev AI", url: "https://jit.dev/" },
    ],
  },
];

export default function AI() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title:
        "Best AI Tools & Resources - Gateway Links 2K25 | Free Artificial Intelligence Platforms",
      description:
        "Discover curated AI tools, machine learning resources, and intelligent applications. Gateway Links 2K25 provides the best collection of AI platforms for chatbots, AI image generation, coding assistance, and more.",
      url: "https://gatewaylinks2k25.com/ai",
      keywords:
        "AI tools, artificial intelligence, machine learning, AI resources, AI platforms, chatbots, image generation AI, coding AI, AI software, free AI tools, generative AI, AI resources, intelligence platforms, machine learning tools",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "AI Tools & Resources",
        "description": "Curated collection of artificial intelligence tools and platforms",
        "url": "https://gatewaylinks2k25.com/ai"
      }
    });
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-primary))] backdrop-blur-[20px] bg-opacity-80">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-all duration-200 hover:bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h1 className="heading-lg text-[hsl(var(--text-primary))] mb-3 font-black">
            AI Tools & Resources
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of artificial intelligence tools and platforms
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {aiCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <section
                key={category.title}
                className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-card))] p-6 sm:p-8 transition-all duration-300 hover:border-[hsl(var(--text-secondary))] hover:shadow-[0_4px_12px_var(--shadow-hover)]"
                style={{
                  animation: `slideInFade 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <IconComponent
                    size={24}
                    className="text-[hsl(var(--text-secondary))] transition-colors duration-300 group-hover:text-[hsl(var(--text-primary))]"
                  />
                  <h2 className="heading-md text-[hsl(var(--text-primary))] font-black">
                    {category.title}
                  </h2>
                </div>
                <p className="text-sm text-[hsl(var(--text-muted))] mb-6 font-medium">
                  {category.count}
                </p>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-[hsl(var(--text-secondary))] transition-all duration-300 hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))]"
                    >
                      <span>{link.name}</span>
                      <svg
                        className="w-4 h-4 opacity-40 transition-all duration-300 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[hsl(var(--border))]">
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <Link
                    to="/streaming"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Apps & Softwares
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Books & Novels
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai"
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
                  >
                    AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                More
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <Link
                    to="/games"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/torrents"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Torrents
                  </Link>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Dark Web
                  </span>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Breach & Leaks
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                AI Tools
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access the most comprehensive collection of artificial
                intelligence tools, machine learning platforms, and AI
                resources.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-[hsl(var(--text-muted))]">
              © 2025 Gateway Links 2K25. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
