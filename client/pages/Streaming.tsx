import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  ArrowLeft,
  Monitor,
  PlayCircle,
  Tv,
  Download,
  Globe,
  Radio,
} from "lucide-react";
import { updateMetaTags } from "@/lib/meta-tags";

const streamingCategories = [
  {
    icon: Radio,
    title: "Live TV & Sports",
    count: "4 platforms",
    links: [
      { name: "TheTVApp", url: "https://thetvapp.to/" },
      { name: "Pluto TV", url: "https://pluto.tv/" },
      { name: "Tubi", url: "https://tubitv.com/" },
      { name: "StreamEast", url: "https://v1.gostreameast.link/" },
    ],
  },
  {
    icon: Monitor,
    title: "Streaming Services",
    count: "45+ platforms",
    links: [
      { name: "1Shows", url: "https://www.1shows.live/" },
      { name: "1Movies", url: "https://1movies.bz/" },
      { name: "7Xcinema", url: "https://7xcinema.com/" },
      { name: "ABFlix", url: "https://abflix.app/" },
      { name: "Autoembed", url: "https://watch.autoembed.cc/" },
      { name: "Beech.Watch", url: "https://beech.watch/" },
      { name: "Bingeflix", url: "https://bingeflix.tv/" },
      { name: "BrocoFlix", url: "https://brocoflix.xyz/" },
      { name: "Cataz", url: "https://cataz.to/" },
      { name: "Cineby", url: "https://www.cineby.ru/" },
      { name: "CineBolt", url: "https://cinebolt.net/" },
      { name: "Cinema.bz", url: "https://cinema.bz/" },
      { name: "CinemaDeck", url: "https://cinemadeck.com/" },
      { name: "Cinezo", url: "https://cinezo.net/" },
      { name: "CornClick", url: "https://cornclick.com/" },
      { name: "CucuFlix", url: "https://cucuflix.xyz/" },
      { name: "Dashflix", url: "https://dashflix.top/" },
      { name: "Donkey", url: "https://donkey.to/" },
      { name: "DopeBox", url: "https://dopebox.to/" },
      { name: "F-TV", url: "https://f-tv.watch/" },
      { name: "Filmex", url: "https://filmex.to/" },
      { name: "Flicker", url: "https://flickermini.pages.dev/" },
      { name: "FlickyStream", url: "https://flickystream.ru/" },
      { name: "FshareTV", url: "https://fsharetv.co/" },
      { name: "GOKU", url: "https://goku.sx/" },
      { name: "Heartive", url: "https://heartive.pages.dev/" },
      { name: "HiMovies", url: "https://himovies.sx/" },
      { name: "HydraHD", url: "https://hydrahd.io/" },
      { name: "Hurawatch", url: "https://hurawatchz.to/" },
      { name: "KipFlix", url: "https://kipflix.xyz/" },
      { name: "KipStream", url: "https://kipstream.lol/" },
      { name: "LetStream", url: "https://www.letstream.site/" },
      { name: "LookMovie", url: "https://lookmovie2.to/" },
      { name: "M-Zone", url: "https://m-zone.org/" },
      { name: "Mapple", url: "https://mapple.tv/" },
      { name: "MovieMaze", url: "https://moviemaze.cc/" },
      {
        name: "movie-web",
        url: "https://erynith.github.io/movie-web-instances/",
      },
      { name: "NEPU", url: "https://nepu.to/" },
      { name: "Nunflix", url: "https://nunflix-ey9.pages.dev/" },
      { name: "PopcornMovies", url: "https://popcornmovies.org/" },
      { name: "Popcorn Time", url: "https://popcorn-time.site/" },
      { name: "PressPlay", url: "https://www.pressplay.top/" },
      { name: "Putlocker", url: "https://putlocker.pe/" },
      { name: "Rive", url: "https://rivestream.xyz/" },
      { name: "SFlix", url: "https://sflix.fi/" },
      { name: "ShowboxMovies", url: "https://www.showboxmovies.net/" },
      { name: "Smashystream", url: "https://smashystream.xyz/" },
      { name: "SpenFlix", url: "https://watch.spencerdevs.xyz/" },
      { name: "Streamflix", url: "https://watch.streamflix.one/" },
      { name: "Tmovie", url: "https://tmovie.tv/" },
      { name: "UniqueStream", url: "https://uniquestream.net/" },
      { name: "VidBox", url: "https://vidbox.to/" },
      { name: "VidOra", url: "https://watch.vidora.su/" },
      { name: "VidPlay", url: "https://vidplay.top/" },
      { name: "VidSrc", url: "https://vidsrc.cx/" },
      { name: "xpWatch", url: "https://xpwatch-v2.pages.dev/" },
      { name: "XPrime", url: "https://xprime.tv/" },
      { name: "yFlix", url: "https://yflix.to/" },
      { name: "YesMovies", url: "https://yesmovies.ag/" },
      { name: "YoYoMovies", url: "https://yoyomovies.net/" },
      { name: "yuPPow", url: "https://yuppow.com/" },
    ],
  },
  {
    icon: Download,
    title: "Direct Downloads & Anime",
    count: "17 sites",
    links: [
      { name: "AnimeOut", url: "https://www.animeout.xyz/" },
      { name: "Cinema of the World", url: "https://worldscinema.org/" },
      { name: "Hi10 Anime", url: "https://hi10anime.com/" },
      { name: "Light Downloads", url: "https://lightdl.xyz/" },
      { name: "Mkv Cinemas", url: "https://mkvcinemas.kim/" },
      { name: "Movie Channel", url: "https://free-movies.to/" },
      { name: "NoobSubs", url: "https://www.noobsubs.com/" },
      { name: "Pahe", url: "https://pahe.ink/" },
      { name: "PSArips", url: "https://psa.wf/" },
      { name: "rarefilmm", url: "https://rarefilmm.com/" },
      { name: "UHDMovies", url: "https://uhdmovies.bet/" },
      { name: "Vadapav", url: "https://vadapav.mov/" },
      { name: "Vegamovies", url: "https://vegamovies.ms/" },
      { name: "Vidnaija", url: "https://vidnaija.com.ng/" },
      { name: "mkvCinemas", url: "https://mkvcinemas.how/" },
      { name: "UHDMovies (Fans)", url: "https://uhdmovies.fans/" },
    ],
  },
  {
    icon: Globe,
    title: "East / South Asian Drama",
    count: "6 platforms",
    links: [
      { name: "AsiaFlix", url: "https://asiaflix.net/" },
      { name: "DramaDay", url: "https://dramaday.me/" },
      { name: "DramaHood", url: "https://kdramahood.com/" },
      { name: "Dramanice", url: "https://ww3.dramanice.video/" },
      { name: "Einthusan", url: "https://einthusan.tv/" },
      { name: "kisskh", url: "https://kisskh.co/" },
      { name: "MkvDrama", url: "https://mkvdrama.org/" },
      { name: "MyAsianTv", url: "https://myasiantv.ac/" },
    ],
  },
];

export default function Streaming() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags({
      title:
        "Streaming Resources - Gateway Links 2K25 | Free Movies & TV Shows",
      description:
        "Discover curated streaming platforms and download sites for movies, TV shows, and online content. Gateway Links 2K25 provides the ultimate collection of streaming resources.",
      url: "https://gatewaylinks2k25.com/streaming",
      keywords:
        "streaming sites, movie streaming, TV shows, free movies, watch online, streaming links, cinema streaming",
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
            Streaming Resources
          </h1>
          <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))]">
            Curated collection of streaming platforms and download sites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10">
          {streamingCategories.map((category, index) => {
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
                    className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
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
                Streaming
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Access the most comprehensive collection of streaming platforms
                and download resources.
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
