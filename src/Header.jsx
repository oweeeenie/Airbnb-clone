function Header() {
  return (
    <>
      {/* upper header */}
      <header>
        <div className="header-upper flex items-center justify-between">
          <img
            src="./src/images/airbnb.png"
            className="w-28 h-auto relative left-20 cursor-pointer"
          />
          <div className="stays-experiences flex space-x-6 absolute left-1/2 transform -translate-x-1/2 ">
            <button className="stays btn-custom">Stays</button>
            <button className="experiences btn-custom">Experiences</button>
          </div>

          <div className="right-info flex items-center relative right-20 space-x-6">
            <button className="airbnb-your-home btn-custom">
              Airbnb your home
            </button>
            <i className="fa-solid fa-globe btn-custom"></i>
            <button className="profile btn-custom hover:shadow-[0_0_4px_0_rgba(0,0,0,0.4)] flex gap-4 border border-main border-opacity-50 rounded-3xl items-center p-3">
              <i className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-user"></i>
            </button>
          </div>
        </div>

        {/* lower header */}
        <div className="header-lower flex items-center justify-center ">
          <div className="mini-wrapper shadow-xl border rounded-full flex max-w-[900px] max-h-[80px]">
            <div className="where relative p-5 pl-5 btn-custom cursor-pointer w-[300px] rounded-full">
              <h1 className="text-important text-sm">Where</h1>
              <input
                type="text"
                placeholder="Search destinations"
                className="bg-transparent focus:outline-none"
              />
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-gray-300"></div>
            </div>

            <div className="check-in relative p-5 px-4 btn-custom cursor-pointer w-[150px] rounded-full">
              <h1 className="text-important text-sm">Check in</h1>
              <div>Add dates</div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-gray-300"></div>
            </div>

            <div className="check-out relative p-5 px-4 btn-custom cursor-pointer w-[150px] rounded-full">
              <h1 className="text-important text-sm">Check out</h1>
              <div>Add dates</div>
              <div className="absolute right-0 top-1/4 h-1/2 border-r border-gray-300"></div>
            </div>

            <div className="who-search-group flex items-center w-[300px] p-4 rounded-full btn-custom pr-0">
              <div className="who p-4 relative px-5 cursor-pointer w-[250px] rounded-full">
                <h1 className="text-important text-sm">Who</h1>
                <div>Add guests</div>
              </div>

              <div className="search flex items-center text-white rounded-full p-4 cursor-pointer">
                <i className="fa-solid fa-magnifying-glass text-white bg-logo rounded-full p-5"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
