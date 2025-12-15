import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ArrowLeft,
  Gamepad2,
  Monitor,
  Download,
  Zap,
} from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const gamesCategories = [
  {
    icon: Monitor,
    title: "Browser Play",
    count: "8 platforms",
    links: [
      { name: "GamesFrog", url: "https://gamesfrog.com/" },
      { name: "Poki", url: "https://poki.com/" },
      { name: "Addicting Games", url: "https://www.addictinggames.com/" },
      { name: "Arkadium Games", url: "https://www.arkadium.com/" },
      { name: "Cool Math Games", url: "https://www.coolmathgames.com/" },
      { name: "CrazyGames", url: "https://www.crazygames.com/" },
      { name: "Free Games Max", url: "https://www.freegamesmax.com/" },
      { name: "io Games", url: "https://iogames.space/" },
    ],
  },
  {
    icon: Download,
    title: "Direct Downloads",
    count: "50+ resources",
    links: [
      { name: "AnkerGames", url: "https://ankergames.net/" },
      { name: "Abandonware Games", url: "https://abandonwaregames.net/" },
      { name: "AtopGames", url: "https://atopgames.com/" },
      { name: "AstralGames", url: "https://astral-games.xyz/" },
      { name: "CG-gamesPC", url: "https://www.cg-gamespc.com/" },
      { name: "CS.RIN.RU: Steam Underground", url: "https://cs.rin.ru/forum/" },
      { name: "ElAmigos", url: "https://elamigos.site/" },
      { name: "ElEnemigos", url: "https://elenemigos.com/" },
      { name: "Erai-raws", url: "https://www.erai-raws.info/" },
      { name: "Fluxy Repacks", url: "https://fluxyrepacks.xyz/" },
      { name: "Game Bounty", url: "https://gamebounty.world/" },
      { name: "Gamedie", url: "https://gamdie.com/" },
      { name: "GamesDrive", url: "https://gamesdrive.net/" },
      { name: "GamePCFull", url: "https://gamepcfull.com/" },
      { name: "GAMESPACK", url: "https://gamespack.net/" },
      { name: "Games4U", url: "https://games4u.org/" },
      { name: "games 4 u", url: "https://g4u.to/" },
      { name: "gamezdl", url: "https://gamezdl.cc/" },
      { name: "Get Free Games", url: "https://getfreegames.net/" },
      { name: "GLOAD", url: "https://gload.to/" },
      { name: "Gnarly Repacks", url: "https://rentry.org/gnarly_repacks" },
      { name: "GOG Games", url: "https://gog-games.to/" },
      { name: "GoMorGames", url: "https://gomorgames.com" },
      { name: "KaranPC", url: "https://karanpc.com/" },
      { name: "M4CKD0GE Repacks", url: "https://m4ckd0ge-repacks.site/" },
      { name: "My Abandonware", url: "https://www.myabandonware.com/" },
      { name: "Old Games Download", url: "https://oldgamesdownload.com/" },
      { name: "Old-Games.RU", url: "https://www.old-games.ru/" },
      { name: "Ova Games", url: "https://www.ovagames.com/" },
      { name: "PiviGames", url: "https://pivigames.blog/" },
      { name: "Reloaded Steam", url: "https://reloadedsteam.com/" },
      { name: "Repack-Games", url: "https://repack-games.com/" },
      { name: "Repacklab", url: "https://repacklab.com/" },
      { name: "Rexa Games", url: "https://rexagames.com/" },
      { name: "STEAMRIP", url: "https://steamrip.com/" },
      { name: "Steam-Cracked", url: "https://steam-cracked.com/" },
      { name: "SteamGG", url: "https://steamgg.net/" },
      { name: "SteamOra", url: "https://steamora.net/" },
      { name: "SteamUnderground", url: "https://steamunderground.net/" },
      { name: "Stevv Game", url: "https://www.stevvgame.com/" },
      {
        name: "The Collection Chamber",
        url: "https://collectionchamber.blogspot.com/",
      },
      { name: "Torrminatorr", url: "https://torrminatorr.com/" },
      { name: "Triah Games", url: "https://triahgames.com/" },
      { name: "UnderGround Games", url: "https://undergroundgames.net/" },
      { name: "UnionCrax", url: "https://union-crax.xyz/" },
      { name: "Windows 7 Games", url: "https://win7games.com/" },
      { name: "WorldofPCGames", url: "https://worldofpcgames.com/" },
    ],
  },
  {
    icon: Gamepad2,
    title: "Game Managers & Launchers",
    count: "8 tools",
    links: [
      { name: "Ascendara", url: "https://ascendara.app/" },
      {
        name: "Heroic Games Launcher",
        url: "https://heroicgameslauncher.com/",
      },
      { name: "Playnite", url: "https://playnite.link/" },
      {
        name: "Fit Launcher",
        url: "https://github.com/CarrotRub/Fit-Launcher/",
      },
      { name: "GameVault", url: "https://gamevau.lt/" },
      { name: "GOG GALAXY 2.0", url: "https://www.gog.com/galaxy" },
      { name: "LaunchBox", url: "https://www.launchbox-app.com/" },
      { name: "Project GLD", url: "https://y0urd34th.github.io/Project-GLD/" },
    ],
  },
];

export default function Games() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title:
        "Free Games & Gaming Resources - Gateway Links 2K25 | Download PC Games Online",
      description:
        "Browse gaming links and resources for all types of games. Gateway Links 2K25 provides curated gaming platforms, free game downloads, PC games, browser games, game launchers, and gaming site links.",
      url: "https://gatewaylinks2k25.com/games",
      keywords:
        "game links, gaming platforms, video games, game downloads, free games, PC games, game resources, gaming sites, free game download, online games, browser games, game launchers, gaming resources",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Gaming Resources",
        "description": "Curated collection of gaming platforms and game download resources",
        "url": "https://gatewaylinks2k25.com/games"
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
            Gaming Resources
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of gaming platforms and download sites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {gamesCategories.map((category, index) => {
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
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
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
                Games
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access the most comprehensive collection of gaming platform and
                game download resource links.
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
