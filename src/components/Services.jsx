import { FaDumbbell, FaMugHot, FaShower, FaHeartbeat } from 'react-icons/fa'; 
import '../styles/Services.css'

// Componente para cada Tarjeta de Servicio
const ServiceCard = ({ IconComponent, title, description }) => (
  <div className="service-card">
    <div className="service-icon">
      <IconComponent /> 
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

// Componente Principal de la Sección de Servicios
export function Services() {
  const servicesData = [
    { 
      id: 1, 
      IconComponent: FaDumbbell, 
      title: 'Quality Equipment', 
      description: 'Te ofrecemos equipos de última generación, de marcas líderes y con el mantenimiento más riguroso.' 
    },
    { 
      id: 2, 
      IconComponent: FaMugHot, 
      title: 'Healthy Nutrition', 
      description: 'We encourage you to adopt healthy nutrition as your main ally.' 
    },
    { 
      id: 3, 
      IconComponent: FaShower, 
      title: 'Shower Service', 
      description: 'We know your time is gold; finish your day with the comfort and privacy of our high-quality showers.' 
    },
    { 
      id: 4, 
      IconComponent: FaHeartbeat, 
      title: 'Unique To Your Needs', 
      description: 'We design well-being tailored to your needs, from start to finish. Always thinking of you.' 
    },
  ];

  return (
    <section className="Services"> {/* Clase principal: "Services" */}
      <div className="Services-content"> {/* Contenedor de contenido: "Services-content" */}
        
        {/* Encabezado */}
        <div className="services-header">
            <p className="services-subtitle">Breaking Boundaries</p>
            <h2 className="services-main-title">PUSH YOUR LIMITS FORWARD</h2>
        </div>

        {/* Contenedor de las Tarjetas */}
        <div className="services-cards-grid">
            {servicesData.map((service) => (
            <ServiceCard 
                key={service.id} 
                IconComponent={service.IconComponent}
                title={service.title} 
                description={service.description} 
            />
            ))}
        </div>

      </div>
    </section>
  );
}