import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const categories = [
  {
    name: "Streaming",
    path: "/streaming",
    description:
      "Discover curated links to popular streaming platforms for movies, TV shows, and online content",
    keywords:
      "streaming links, movies, TV shows, online streaming, video platforms",
  },
  {
    name: "Apps & Softwares",
    path: "/apps",
    description:
      "Find comprehensive links to essential applications and software tools for productivity and development",
    keywords:
      "app links, software downloads, applications, productivity tools, development software",
  },
  {
    name: "Books & Novels",
    path: "/books",
    description:
      "Access a vast collection of curated links to e-books, novels, and digital reading resources",
    keywords: "e-books, novels, reading, digital books, literature links",
  },
  {
    name: "Artificial Intelligence",
    path: "/ai",
    description:
      "Explore cutting-edge AI tools, machine learning resources, and intelligent applications in one place",
    keywords:
      "AI tools, artificial intelligence, machine learning, AI resources, AI platforms",
  },
  {
    name: "Games",
    path: "/games",
    description:
      "Browse curated gaming links and resources for all types of games and gaming enthusiasts",
    keywords:
      "game links, gaming platforms, video games, game resources, gaming sites",
  },
  {
    name: "Torrents",
    path: "/torrents",
    description:
      "Access organized torrent resources and links for various types of content",
    keywords: "torrent links, torrent sites, torrent resources, p2p sharing",
  },
  {
    name: "Dark Web",
    path: "/darkweb",
    description: "Coming soon",
    disabled: true,
  },
  {
    name: "Breach & Leaks",
    path: "/breaches",
    description: "Coming soon",
    disabled: true,
  },
];

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title: "Gateway Links 2K25 - g2k Ultimate Link Directory",
      description:
        "Gateway Links 2K25 - Your ultimate gateway to discover streaming platforms, applications, books, AI tools, games, torrents, and more. All curated links in one place.",
      url: "https://gatewaylinks2k25.com/",
      keywords:
        "g2k, gateway links, gateway links 2k25, link aggregator, streaming, apps, books, AI tools, games, torrents",
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

  const handleCategoryClick = (e: React.MouseEvent, disabled: boolean) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* Schema markup for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Gateway Links 2K25",
          description:
            "Link aggregator directory for streaming, apps, books, AI tools, games, and torrents",
          url: "https://gatewaylinks2k25.com",
          sameAs: ["https://www.g2k.co", "https://www.g2kgames.net"],
        })}
      </script>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-primary))] backdrop-blur-[20px] bg-opacity-80">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="text-sm font-black text-[hsl(var(--text-primary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
          >
            GATEWAY LINKS 2K25
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
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20 lg:mb-24 relative">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h1 className="heading-xl text-[hsl(var(--text-primary))] leading-tight">
                Gateway Links
              </h1>
              <h2 className="heading-lg text-[hsl(var(--text-primary))] leading-tight opacity-80">
                2K25
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))] max-w-2xl leading-relaxed">
              Your gateway to an extensive collection of streaming platforms,
              applications, books, AI tools, games, and more. Discover
              everything in one place with a clean, modern interface.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-16" aria-label="Gateway Links Categories">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {categories.map((category) => (
              <article
                key={category.name}
                className={`group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-card))] p-6 sm:p-7 lg:p-8 transition-all duration-300 ${
                  category.disabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:border-[hsl(var(--text-secondary))] hover:shadow-[0_4px_12px_var(--shadow-hover)]"
                }`}
              >
                <Link
                  to={category.path}
                  onClick={(e) => handleCategoryClick(e, category.disabled)}
                  className="block"
                >
                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--text-primary))] leading-snug transition-colors duration-300">
                        {category.name}
                      </h3>
                      {!category.disabled && (
                        <ArrowUpRight
                          size={18}
                          className="text-[hsl(var(--text-secondary))] opacity-0 transition-all duration-300 group-hover:opacity-100"
                        />
                      )}
                    </div>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        category.disabled
                          ? "text-[hsl(var(--text-muted))]"
                          : "text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))]"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[hsl(var(--border))]"
            aria-label="Footer navigation"
          >
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                Main Categories
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <Link
                    to="/streaming"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Streaming Platforms
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
                    AI Tools & Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                More Resources
              </h3>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                <li>
                  <Link
                    to="/games"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Gaming Links
                  </Link>
                </li>
                <li>
                  <Link
                    to="/torrents"
                    className="hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    Torrent Resources
                  </Link>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Dark Web (Coming Soon)
                  </span>
                </li>
                <li>
                  <span className="text-[hsl(var(--text-muted))] cursor-not-allowed">
                    Breach & Leaks (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-4">
                About Gateway Links 2K25
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Your ultimate gateway to discover and explore curated links for
                streaming, applications, books, AI tools, games, torrents, and
                more. Access everything in one place with our clean, modern
                interface. Also known as G2K - Your comprehensive link
                aggregator and directory.
              </p>
            </div>
          </nav>
          <div className="text-center">
            <p className="text-sm text-[hsl(var(--text-muted))]">
              © 2025 Gateway Links 2K25 (G2K). All rights reserved. | A
              comprehensive link directory and aggregator platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
