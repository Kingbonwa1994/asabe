import React from 'react';

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          imageUrl={service.imageUrl}
          title={service.title}
          description={service.description}
          openOverlay={() => {
            // Define the logic to open an overlay if needed
          }}
        />
      ))}
    </div>
  );}