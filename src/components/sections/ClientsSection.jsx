import React, { useRef, useEffect } from 'react';
import infosysLogo from "../../assets/logos/infosys.png";
import walmartLogo from "../../assets/logos/walmart.png";
import boaLogo from "../../assets/logos/BankofAmerica.png";
import metaLogo from "../../assets/logos/meta.png";
import atosLogo from "../../assets/logos/atos.png";
import humanaLogo from "../../assets/logos/humana.png";
import capitalOneLogo from "../../assets/logos/capitalone.png";
import appleLogo from "../../assets/logos/apple.png";

const clients = [
  { name: "Infosys", logo: infosysLogo },
  { name: "Walmart", logo: walmartLogo },
  { name: "Bank of America", logo: boaLogo },
  { name: "Meta", logo: metaLogo },
  { name: "ATOS", logo: atosLogo },
  { name: "Humana", logo: humanaLogo },
  { name: "Capital One", logo: capitalOneLogo },
  { name: "Apple", logo: appleLogo },
];

function ClientsSection() {
  const clientsRef = useRef(null);

  useEffect(() => {
    if (clientsRef.current) {
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        if (clientsRef.current) {
          scrollPosition += 1;
          clientsRef.current.scrollLeft = scrollPosition;
          
          const maxScroll = clientsRef.current.scrollWidth / 2;
          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            clientsRef.current.scrollLeft = 0;
          }
        }
      }, 30);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={clientsRef}
            className="flex space-x-12 overflow-x-hidden"
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;