import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ArrowLeft,
  BookOpen,
  Download,
  Image,
  Headphones,
} from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const booksCategories = [
  {
    icon: BookOpen,
    title: "Read Online",
    count: "3 resources",
    links: [
      {
        name: "Novel Buddy",
        url: "https://novelbuddy.com/",
        description:
          "Read light novels updated daily from Japan, Korea, and China",
      },
      {
        name: "Project Gutenberg",
        url: "https://www.gutenberg.org/",
        description: "Founded in 1971 with Kindle ebooks and digital reading",
      },
      {
        name: "ReadComicOnline",
        url: "https://readcomiconline.li/",
        description: "Free comic books with quick daily updates and styles",
      },
    ],
  },
  {
    icon: Download,
    title: "Download Books Directly",
    count: "8 resources",
    links: [
      { name: "Anna's Archive", url: "https://annas-archive.li/" },
      { name: "Liber3", url: "https://liber3.eth.limo/" },
      { name: "Library Genesis", url: "https://libgen.li/" },
      { name: "PDFDrive", url: "https://pdfdrive.to/" },
      { name: "Z-Library", url: "https://z-library.sk/" },
      { name: "GetComics", url: "https://getcomics.org/" },
      { name: "ebook-hunter", url: "https://ebook-hunter.org/" },
      { name: "Ocean of PDF", url: "https://oceanofpdf.com/" },
    ],
  },
  {
    icon: Image,
    title: "Manga",
    count: "6 resources",
    links: [
      { name: "MangaDex", url: "https://mangadex.org/" },
      { name: "Manga Fox", url: "https://fanfox.net/" },
      { name: "Weeb Central", url: "https://weebcentral.com/" },
      { name: "MangaFire", url: "https://mangafire.to/" },
      { name: "MangaPill", url: "https://mangapill.com/" },
      { name: "Hakuneko", url: "https://hakuneko.download/" },
    ],
  },
  {
    icon: Headphones,
    title: "Audio Books",
    count: "6 resources",
    links: [
      { name: "TokyBook", url: "https://tokybook.com/" },
      { name: "Audio books 4soul", url: "https://audiobooks4soul.com/home/" },
      { name: "Book Audiobooks", url: "https://bookaudiobooks.com/" },
      { name: "Digitalbook", url: "https://www.digitalbook.io/" },
      { name: "GoldenAudiobook", url: "https://goldenaudiobook.com/" },
      { name: "Storynory", url: "https://www.storynory.com/" },
    ],
  },
];

export default function Books() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title:
        "Books & Novels Download - Gateway Links 2K25 | Free Reading Resources",
      description:
        "Access a vast collection of e-books, novels, manga, and audiobooks. Gateway Links 2K25 provides curated links to digital reading resources and book download sites.",
      url: "https://gatewaylinks2k25.com/books",
      keywords:
        "e-books, novels, digital books, manga, audiobooks, reading resources, book downloads, literature links",
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
            Books & Novels
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of reading platforms and download sites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {booksCategories.map((category, index) => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 px-3 py-3 rounded-md text-sm font-medium text-[hsl(var(--text-secondary))] transition-all duration-300 hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg leading-none">•</span>
                        <span>{link.name}</span>
                      </div>
                      {link.description && (
                        <span className="text-xs text-[hsl(var(--text-muted))]">
                          {link.description}
                        </span>
                      )}
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
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
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
                Books & Novels
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access the most extensive collection of reading resources
                including e-books, novels, manga, and audiobooks.
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
