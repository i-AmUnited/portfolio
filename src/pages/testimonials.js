import userIcon from "../assets/userIcon.svg";
const Testimonials = () => {
    return (
      <div>
        <p className="ubuntu-font font-bold mb-2">Testimonials:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-4 text-sm">
          <div className="lg:col-span-3 bg-black/10 border border-white/5 rounded-md p-4 md:p-6 grid content-between">
            <div className="mb-8 leading-6">
              Tobi did an amazing job designing our website. His creativity and
              attention to detail brought our vision to life, and the final
              result exceeded our expectations.
            </div>
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full flex items-center justify-center bg-white/5 border border-white/5">
                <img alt="" src={userIcon} className="h-4" />
              </div>
              <div className="grid">
                <span>First name, Last name</span>
                <span className="text-sm opacity-50">CEO, Company name</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-black/10 border border-white/5 rounded-md p-4 md:p-6 grid content-between">
            <div className="mb-8 leading-6">
              Tobi is always a joy to work with—always open to feedback, and
              quick to iterate on any changes we need. His commitment to
              delivering high-quality work, often ahead of schedule, makes him
              an invaluable asset to our team. We would happily work with him
              again on any project.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <div className="z-0 size-10 rounded-full flex items-center justify-center bg-[#c4c4c4] border-[3px] border-[#262626]">
                  
                </div>
                <div className="z-10 -ml-4 size-10 rounded-full flex items-center justify-center bg-[#c4c4c4] border-[3px] border-[#262626]">
                  
                </div>
              </div>
              <div className="grid">
                <span>Akinyele Roqeeb, Faniyi Nurudeen</span>
                <span className="text-sm opacity-50">
                  Application Developers
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-black/10 border border-white/5 rounded-md p-4 md:p-6 grid content-between">
            <div className="mb-8 leading-6">
              Tobi did an amazing job designing our website. His creativity and
              attention to detail brought our vision to life, and the final
              result exceeded our expectations.
            </div>
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full flex items-center justify-center bg-white/5 border border-white/5">
                <img alt="" src={userIcon} className="h-5" />
              </div>
              <div className="grid">
                <span>First name, Last name</span>
                <span className="text-sm opacity-50">CEO, Company name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Testimonials;