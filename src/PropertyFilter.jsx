import { useState } from 'react';

export default function PropertyFilter() {
  // we're gong to use these props to render in components

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
      <div className="property-filters flex items-center border-t mt-10 gap-12 pt-2">
        {filters.map((filter) => (
          <div
            className={`OMG flex flex-col items-center filter-button relative left-20 ${
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
    </>
  );
}
