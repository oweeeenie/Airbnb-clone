function Header() {
  return (
    <>
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
      </header>
    </>
  );
}

export default Header;
