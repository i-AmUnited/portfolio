import figma from "../assets/figma.svg";
import photoshop from "../assets/photoshop.svg";
import freepik from "../assets/freepik.svg";
import meet from "../assets/meet.svg";
import whatsapp from "../assets/whatsApp.svg";
import gmail from "../assets/gmail.svg";
import loom from "../assets/loom.svg"; 
import miro from "../assets/miro.svg"; 

const Tools = () => {
    return ( 
        <div>
          <p className="ubuntu-font font-bold mb-2">Tools i use:</p>
          <div className="grid gap-4 mt-6">
            <div className="grid gap-6 md:gap-4">
              <div className="grid md:flex items-center gap-4">
                  <div>
                    <span className="bg-orange-400/5 text-orange-400 text-sm rounded-md py-3 px-6">Design:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm items-center">
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={figma} alt="" className="h-4"/>
                        <span>Figma</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={photoshop} alt="" className="h-4"/>
                        <span>Photoshop</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={freepik} alt="" className="h-4"/>
                        <span>Freepik</span>
                      </div>
                  </div>
              </div>
              <div className="grid md:flex items-center gap-4">
                  <div>
                    <span className="bg-emerald-400/5 text-emerald-400 text-sm rounded-md py-3 px-6">Communication:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm items-center">
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={meet} alt="" className="h-4"/>
                        <span>Google meet</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={whatsapp} alt="" className="h-4"/>
                        <span>WhatsApp</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={gmail} alt="" className="h-4"/>
                        <span>Gmail</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={miro} alt="" className="h-4"/>
                        <span>Miro</span>
                      </div>
                      <div className="bg-black/10 border border-white/5 rounded-md flex items-center gap-4 py-3 px-6">
                        <img src={loom} alt="" className="h-4"/>
                        <span>Loom</span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Tools;