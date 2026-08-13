import axios from 'axios';
import { removeUser } from './Userslice';
import { useDispatch, useSelector } from 'react-redux';
import { Baseurl } from './constants';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector((store) => store.user); // comp re renders once we get the data in user, redux take care of it
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post(Baseurl + "/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    navigate("/");
  };

  return (
    /* ADDED: mb-8 lg:mb-10 to push page content down on initial load without breaking sticky scroll */
    <header className="sticky top-4 z-50 mx-auto mb-8 w-full max-w-7xl px-3 select-none sm:px-6 lg:mb-10">
      <nav className="flex flex-col gap-3">
        
        {/* UNIFIED TACTICAL HUD DECK (Single continuous bar on desktop) */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-indigo-500/30 bg-[#0f1015]/85 px-4 py-2.5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),_0_0_25px_rgba(99,102,241,0.35)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.9),_0_0_40px_rgba(99,102,241,0.5)] sm:px-5">
          
          {/* 1. LEFT SECTION: Brand Logo & Title */}
          <div className="group flex min-w-0 cursor-pointer items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur" />
              <img
                alt="logo"
                src="/myimg.webp"
                className="relative h-10 w-10 shrink-0 rounded-xl bg-slate-950 p-0.5 object-cover ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
              />
            </div>
            <div className="flex flex-col">
              <span className="truncate bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-lg font-extrabold tracking-tight text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 group-hover:to-indigo-300 sm:text-xl">
                Dev Tinder
              </span>
            </div>
          </div>

          {/* Sci-Fi Vertical Instrument Divider */}
          <div className="hidden h-7 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent md:block" />

          {/* 2. CENTER SECTION: Nav Links + Premium Block (Desktop Only) */}
          <div className="hidden items-center justify-center gap-1.5 md:flex">
            <div>
              <a
                href="/main"
                className="group relative inline-flex items-center justify-center rounded-xl px-4 py-1.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-indigo-500/15 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:scale-105 active:scale-95 focus-visible:outline-none"
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="/main/connections"
                className="group relative inline-flex items-center justify-center rounded-xl px-4 py-1.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-indigo-500/15 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:scale-105 active:scale-95 focus-visible:outline-none"
              >
                Connections
              </a>
            </div>
            <div>
              <a
                href="/main/requests"
                className="group relative inline-flex items-center justify-center rounded-xl px-4 py-1.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-indigo-500/15 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:scale-105 active:scale-95 focus-visible:outline-none"
              >
                Requests
              </a>
            </div>

            {/* Cyberpunk Premium Button (Grouped with nav links, blinking circle removed) */}
            <button
              onClick={() => navigate('/main/premium')}
              className="group relative ml-1 inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] hover:scale-105 active:scale-95 focus-visible:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 animate-pulse" />
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-[#0f1015]/95 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-200 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
                Premium
              </span>
            </button>
          </div>

          {/* Sci-Fi Vertical Instrument Divider */}
          <div className="hidden h-7 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent md:block" />

          {/* 3. RIGHT SECTION: Tactical Status & User Control (Desktop Only) */}
          <div className="hidden items-center gap-3.5 md:flex">
            
            {/* Profile Status Readout */}
            <div className="flex flex-col text-right">
              <div className="flex items-center justify-end gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300">
                  Online
                </span>
              </div>
              <p className="max-w-[120px] truncate text-sm font-bold text-slate-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                {user?.first_name}
              </p>
            </div>

            {/* Avatar Image */}
            <Link to={"/main/profile"} className="group relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 blur transition duration-300 group-hover:opacity-100" />
              {user && (
                <img
                  src={user?.photourl}
                  alt="user"
                  className="relative h-10 w-10 rounded-xl object-cover ring-2 ring-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:ring-indigo-300"
                />
              )}
            </Link>

            {/* Logout Button */}
            <button
              type="button"
              onClick={logout}
              className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/15 hover:text-red-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] active:scale-95 focus-visible:outline-none"
            >
              Log Out
            </button>
          </div>

          {/* MOBILE RIGHT SECTION: Profile & Logout (Mobile Only) */}
          <div className="flex shrink-0 items-center gap-2.5 md:hidden">
            <Link to={"/main/profile"}>
              {user && (
                <img
                  src={user?.photourl}
                  alt="user"
                  className="h-9 w-9 rounded-xl object-cover ring-1 ring-indigo-400/50 shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-transform active:scale-95"
                />
              )}
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex h-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 px-3 text-xs font-semibold text-red-200 shadow-sm transition-all hover:border-red-500 hover:bg-red-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95 focus-visible:outline-none"
            >
              Log Out
            </button>
          </div>

        </div>


        {/* MOBILE LOWER TACTICAL HUD CONSOLE (Nav Links & Premium - Mobile Only) */}
        <div className="flex w-full items-center justify-between gap-1 rounded-2xl border border-indigo-500/30 bg-[#0f1015]/85 p-1.5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),_0_0_25px_rgba(99,102,241,0.35)] backdrop-blur-2xl md:hidden">
          <div className="grid w-full grid-cols-4 gap-1">
            <a
              href="/main"
              className="flex h-9 items-center justify-center rounded-xl text-xs font-semibold text-slate-300 transition-all hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] active:scale-95"
            >
              Home
            </a>
            <a
              href="/main/connections"
              className="flex h-9 items-center justify-center rounded-xl text-xs font-semibold text-slate-300 transition-all hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] active:scale-95"
            >
              Connect
            </a>
            <a
              href="/main/requests"
              className="flex h-9 items-center justify-center rounded-xl text-xs font-semibold text-slate-300 transition-all hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] active:scale-95"
            >
              Requests
            </a>
            <button
              onClick={() => navigate('/main/premium')}
              className="group relative flex h-9 items-center justify-center overflow-hidden rounded-xl p-[1px] shadow-[0_0_15px_rgba(99,102,241,0.4)] active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 animate-pulse" />
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-[#0f1015]/95 px-2 text-[11px] font-bold uppercase tracking-wider text-indigo-200 transition-colors group-hover:bg-transparent group-hover:text-white">
                VIP
              </span>
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;