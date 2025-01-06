import rapidStylers from "../assets/rapidStylers.svg";
import cloudvantage from "../assets/cloudvantage.svg";
import mosquepay from "../assets/mosquepay.svg";
import clickICon from "../assets/Click.svg";

const Projects = () => {
  return (
    <div className="">
      <p className="ubuntu-font font-bold mb-2">Featured projects:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://cloudvantage.com.ng/" className="relative rounded-md border border-[#262626] overflow-hidden">
          <img src={cloudvantage} alt="" className="h-42 w-full object-cover" />
          <div className="p-4 absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0 flex items-end">
            <div className="flex justify-between w-full items-end">
              <div className=" grid gap-1">
                <div className="ubuntu-font font-bold">
                  CloudVantage
                </div>
                <div className="text-sm">Cloud services | Web</div>
              </div>
              <img src={clickICon} alt="" />
            </div>
          </div>
        </a>
        <a href="https://mosquepay.vercel.app/" className="relative rounded-md border border-[#262626] overflow-hidden">
          <img src={mosquepay} alt="" className="h-42 w-full object-cover" />
          <div className="p-4 absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0 flex items-end">
            <div className="flex justify-between w-full items-end">
              <div className=" grid gap-1">
                <div className="ubuntu-font font-bold">
                  Mosquepay
                </div>
                <div className="text-sm">Crowdfunding | Web</div>
              </div>
              <img src={clickICon} alt="" />
            </div>
          </div>
        </a>
        <a href="https://trim-tech.vercel.app/" className="relative rounded-md border border-[#262626] overflow-hidden">
          <img src={rapidStylers} alt="" className="h-42 w-full object-cover" />
          <div className="p-4 absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0 flex items-end">
            <div className="flex justify-between w-full items-end">
              <div className=" grid gap-1">
                <div className="ubuntu-font font-bold">
                  Rapid Stylers
                </div>
                <div className="text-sm">Web application</div>
              </div>
              <img src={clickICon} alt="" />
            </div>
          </div>
        </a>
        {/* <div className="relative rounded-md border border-[#262626] overflow-hidden">
          <img src={rapidStylers} alt="" className="h-52 w-full object-cover" />
          <div className="p-4 absolute top-0 h-full w-full bg-gradient-to-t from-black to-black/40 flex items-end">
            <div className="flex justify-between w-full items-end">
              <div className=" grid gap-1">
                <div className="ubuntu-font text-sm font-bold">
                  National Geographic 
                </div>
                <div className="text-xs">Personal exploration | Web</div>
              </div>
              <img src={clickICon} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
