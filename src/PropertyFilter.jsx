import { useState } from 'react';

export default function PropertyFilter() {
  // we're going to use these props to render in components

  const filters = [
    { label: 'OMG!', icon: 'fa-wand-magic-sparkles', isActive: false, id: '1' },
    { label: 'Cabins', icon: 'fa-tree', isActive: false, id: '2' },
    { label: 'Beachside', icon: 'fa-umbrella-beach', isActive: false, id: '3' },
    { label: 'Country', icon: 'fa-tractor', isActive: false, id: '4' },
    { label: 'Trending', icon: 'fa-fire', isActive: false, id: '5' },
    { label: 'Pool', icon: 'fa-water-ladder', isActive: false, id: '6' },
    { label: 'Golfing', icon: 'fa-golf-ball-tee', isActive: false, id: '7' },
    { label: 'New', icon: 'fa-key', isActive: false, id: '8' },
    { label: 'Camping', icon: 'fa-campground', isActive: false, id: '9' },
    { label: 'Chess', icon: 'fa-chess', isActive: false, id: '10' },
    {
      label: 'Snowboard',
      icon: 'fa-person-snowboarding',
      isActive: false,
      id: '11',
    },
    { label: 'Top Cities', icon: 'fa-city', isActive: false, id: '12' },
    { label: 'Business', icon: 'fa-handshake', isActive: false, id: '13' },
    { label: 'Airport', icon: 'fa-plane', isActive: false, id: '14' },
    { label: 'Sky View', icon: 'fa-moon', isActive: false, id: '15' },
    { label: 'Mountain', icon: 'fa-mountain', isActive: false, id: '16' },
  ];

  const [active, setActive] = useState('null');

  function updateIsActive(filter) {
    if (filter.id === active) {
      setActive(null);
    } else {
      setActive(filter.id);
    }
  }

  return (
    <>
      {/* render all the props in [filters] */}
      <div className="property-filters-container flex items-center border-t mt-10 pt-4">
        <div className="filter-scroll flex gap-[50px] items-center relative left-20">
          {filters.map((filter) => (
            <div
              className={`flex flex-col items-center filter-button ${
                filter.id === active ? 'text-black animate-selectedEffect' : ''
              }`}
              key={filter.id}
              onClick={() => updateIsActive(filter)}
            >
              <i className={`fa-solid ${filter.icon}`}></i>
              <p>{filter.label}</p>
            </div>
          ))}
        </div>
        {/* scroll button for filters */}
        <div className="button-wrapper items-center flex justify-end relative mr-20 gap-5 flex-grow">
          {/* filter + display total buttons */}
          <div className="filters-button flex gap-2 items-center border p-4 rounded-lg cursor-pointer text-main hover:border-black transition-all duration-300">
            <i className="fa-solid fa-bars-staggered"></i>
            Filters
          </div>
          <div className="total-button flex gap-2 items-center border p-4 rounded-lg cursor-pointer text-main hover:border-black transition-all duration-300">
            Display total before taxes
            <button className="bg-gray-300 h-[25px] w-[35px] rounded-full">
              <div className="bg-black h-[15px] w-[15px] rounded-full relative left-1"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
