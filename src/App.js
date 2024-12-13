import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import Tools from "./pages/tools";
import profile from "./assets/profileImage.png";

function App() {
  document.title = "Portfolio | Amusa Oluwatobi"
  return (
    <div className="bg-[#262626] min-h-screen text-white">
      <div className="px-4 md:px-10 lg:px-20 py-10 grid gap-10">
        <div className="grid md:flex md:justify-between gap-4 items-end">
          <div className="flex gap-2 items-center">
            <div className="h-20 w-20 rounded-md overflow-hidden">
             <img alt="" src={profile} className="scale-125 object-cover"/>
            </div>
            <div>
              <p className="font-bold ubuntu-font">
                Amusa Oluwatobi<span className="text-greenBrand">.</span>
              </p>
              <p className="text-xs">Product design</p>
              <div className="flex items-center gap-1 animate-pulse mt-2">
                <div className="h-[6px] w-[6px] rounded-full bg-greenBrand"></div>
                <div className="text-xs text-greenBrand">
                  Available for work
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xs bg-gray-200 text-[#262626] px-4 py-3 rounded divide-x divide-[#26262632] w-fit">
            <div className="pr-4">LinkedIn</div>
            <div className="px-4">Email</div>
            <div className="pl-4">Download resume</div>
          </div>
        </div>
        <Home />
        <Projects />
        <Tools />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
