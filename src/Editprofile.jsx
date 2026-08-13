import { useEffect, useState } from 'react';
import { Baseurl } from './utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/Userslice';
import Cardprofile from './utils/Cardprofile';
import SelectSkills from './SelectSkills';

const Editprofile = ({ select }) => {
  const dispatch = useDispatch();

  const [firstname, setfirstname] = useState(select.first_name);
  const [lastname, setlastname] = useState(select.last_name);
  const [ageno, setageno] = useState(select.age);
  const [About, setAbout] = useState(select.about);
  const [photo, setphoto] = useState(select.photourl);

  const [selectedoptions, setselectedoptions] = useState([]);
  const [errmsg, seterrmsg] = useState("");

  const saveprofile = async (e) => {
    try {
      e.preventDefault();
      const edit = await axios.patch(
        Baseurl + '/profile/edit',
        {
          first_name: firstname,
          last_name: lastname,
          age: ageno,
          about: About,
          photourl: photo,
          skills: selectedoptions.map((elem) => elem.value), // its an object of label and value, so pass as array string
        },
        { withCredentials: true }
      );

      dispatch(addUser(edit?.data));
    } catch (err) {
      seterrmsg(err?.response?.data);
    }
  };

  // display current skills from DB
  const profile = async () => {
    const res = await axios.get(Baseurl + "/profile/view", {
      withCredentials: true,
    });
    setselectedoptions(
      res?.data?.skills?.map((val) => {
        return { value: val, label: val };
      })
    );
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <section className="mx-auto mt-6 w-full max-w-7xl px-4 py-8 select-none sm:px-6 lg:px-8">
      {/* 2-Column Responsive Grid: Form on Left (7 cols), Live Preview Card on Right (5 cols) */}
      <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-12">
        
        {/* LEFT COLUMN: Clean Form Deck */}
        <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0f1015]/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.8),_0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-2xl transition-all duration-300 hover:border-indigo-500/30 sm:p-8 lg:col-span-7 xl:col-span-8 lg:p-10">
          
          {/* Form Header (Cleaned up: Removed tactical command and blinking dot) */}
          <div className="mb-6 border-b border-white/[0.08] pb-5 sm:mb-8">
            <h1 className="bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
              Edit Profile
            </h1>
          </div>

          {/* Form Fields */}
          <form className="space-y-6 w-full" action="#">
            
            {/* ROW 1: First Name & Last Name Side-by-Side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all duration-200 focus:border-indigo-500/80 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all duration-200 focus:border-indigo-500/80 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* ROW 2: Compact Age (120px) & Photo URL Side-by-Side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[120px_1fr]">
              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                  Age
                </label>
                <input
                  min="1"
                  max="99"
                  type="number"
                  value={ageno}
                  onChange={(e) => setageno(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all duration-200 focus:border-indigo-500/80 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={photo}
                  onChange={(e) => setphoto(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all duration-200 focus:border-indigo-500/80 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* ROW 3: About Textarea */}
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                About Bio
              </label>
              <textarea
                rows={4}
                value={About}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner transition-all duration-200 focus:border-indigo-500/80 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* ROW 4: Skills Selector (ADDED: relative z-50 to fix dropdown overlap bug!) */}
            <div className="relative z-50">
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">
                Technical Skills
              </label>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-1.5 transition-all focus-within:border-indigo-500/80 focus-within:ring-2 focus-within:ring-indigo-500/20">
                <SelectSkills
                  selectedoptions={selectedoptions}
                  setselectedoptions={setselectedoptions}
                />
              </div>
            </div>

            {/* Error Message Display (If any error occurs) */}
            {errmsg && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-center text-xs font-semibold text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                {errmsg}
              </div>
            )}

            {/* Simplified Solid Save Button (Clean indigo background, no rainbow hover animations) */}
            <div className="pt-2">
              <button
                onClick={(e) => saveprofile(e)}
                className="w-full cursor-pointer rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition-all duration-200 hover:bg-indigo-500 hover:shadow-[0_6px_25px_rgba(99,102,241,0.5)] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Save Profile
              </button>
            </div>

          </form>
        </div>

        {/* RIGHT COLUMN: Sticky Live Preview Dock */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-white/[0.08] bg-[#0f1015]/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.8),_0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-2xl transition-all duration-300 hover:border-indigo-500/30 sm:p-8 lg:sticky lg:top-28 lg:col-span-5 xl:col-span-4">
          
          <div className="flex w-full items-center justify-between border-b border-white/[0.08] pb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>Live Card Preview</span>
            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active
            </span>
          </div>

          {/* Your Original Side Card Component */}
          <div className="w-full flex justify-center py-2 transition-transform duration-300 hover:scale-[1.02]">
            <Cardprofile photo={photo} />
          </div>

          <p className="text-center text-[11px] text-slate-500">
            This card updates in real-time as you modify your photo URL and parameters above.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Editprofile;