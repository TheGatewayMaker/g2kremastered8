import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowLeft, DownloadCloud } from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const torrentsCategories = [
  {
    icon: DownloadCloud,
    title: "Torrent Sites",
    count: "6 resources",
    links: [
      { name: "ABC Torrent", url: "https://abctorrents.xyz/" },
      { name: "Cloud Torrent", url: "https://cloudtorrents.com/" },
      { name: "Lime Torrent", url: "https://www.limetorrents.lol/" },
      { name: "Torrent Quest", url: "https://torrentquest.com/" },
      { name: "BT4gpr", url: "https://bt4gprx.com/" },
      { name: "1337x", url: "https://www.1337x.tw/" },
    ],
  },
];

export default function Torrents() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title: "Torrent Sites & Resources - Gateway Links 2K25 | P2P Sharing Platforms",
      description:
        "Access organized torrent resources and links for content sharing. Gateway Links 2K25 curates the best torrent platforms, torrent sites, and P2P sharing resources for downloading content.",
      url: "https://gatewaylinks2k25.com/torrents",
      keywords:
        "torrent links, torrent sites, torrent resources, p2p sharing, torrent platforms, download torrents, best torrent sites, torrent downloads, p2p platforms, content sharing",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Torrents Resources",
        "description": "Curated collection of torrent sites and P2P sharing platforms",
        "url": "https://gatewaylinks2k25.com/torrents"
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
            Torrents Resources
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of torrent sites and platforms
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {torrentsCategories.map((category, index) => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-[hsl(var(--text-secondary))] transition-all duration-300 hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))]"
                    >
                      <span className="text-lg leading-none">•</span>
                      <span>{link.name}</span>
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
                    className="hover:text-[hsl(var(--accent))] transition-colors"
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
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
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
                Torrents
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access organized torrent resources and curated platform links
                for P2P sharing and content distribution.
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
