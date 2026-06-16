import { Link } from 'react-router-dom';
import { client } from '../clientData'; 
import BorderGlow from '../components/BorderGlow'; 

function Home() {
  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif', 
      background: client.colors.bg, 
      color: client.colors.text, 
      minHeight: '100vh' 
    }}>

      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', borderBottom: `1px solid ${client.colors.border}` }}>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>{client.name}</span>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', color: client.colors.muted }}>
          <a href="#services" style={{ color: client.colors.muted, textDecoration: 'none' }}>Services & Pricing</a>
          <a href="#about" style={{ color: client.colors.muted, textDecoration: 'none' }}>About</a>
          <Link to="/reviews" style={{ color: client.colors.muted, textDecoration: 'none' }}>Reviews</Link>
          <Link to="/contact" style={{ color: client.colors.accent, textDecoration: 'none', fontWeight: 600 }}>Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '48px',
        padding: '100px 48px', 
        alignItems: 'center',
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        <div>
          <p style={{ color: client.colors.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            {client.tagline}
          </p>
          <h1 style={{ fontSize: '3.8rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '24px' }}>
            {client.slogan}
          </h1>
          <p style={{ color: client.colors.muted, fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            {client.description}
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/contact" style={{ background: client.colors.accent, color: client.colors.bg, padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              Book Appointment
            </Link>
            <a href="#services" style={{ border: `1px solid ${client.colors.border}`, color: client.colors.text, padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              View Pricing
            </a>
          </div>
        </div>

        {/* Hero Image Frame */}
        <div style={{ 
          position: 'relative', 
          height: '450px', 
          borderRadius: '20px', 
          overflow: 'hidden',
          border: `1px solid ${client.colors.border}`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <img 
            src={client.images.hero} 
            alt="Premium Detailing" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, transparent 60%, rgba(13,17,23,0.9))' 
          }} />
        </div>
      </section>

      {/* Services & Pricing Section with BorderGlow */}
      <section id="services" style={{ padding: '100px 48px', borderTop: `1px solid ${client.colors.border}` }}>
        <p style={{ color: client.colors.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Menu & Rates</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '64px' }}>Our Services & Pricing</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {client.services.map((service) => (
        <BorderGlow
           key={service.name}
           // Turn off the intro animation sweep by forcing it to false, or only leave it on for popular
            animated={false} 
            backgroundColor={client.colors.surface}
           borderRadius={5}
           glowRadius={15}               /* Reduced size so it doesn't bleed out too far */
           glowIntensity={1}           /* Dropped intensity for a stealthier look */
           coneSpread={20}               /* Tightened the light beam cone angle */
            edgeSensitivity={0.1}          /* Lower numbers mean it only lights up when directly hovering */
            fillOpacity={0.4}             /* Dimmed the backplate glow */
          glowColor="45 20 50"          /* Adjusted dark gold/bronze HSL anchor */
          colors={[client.colors.accent, client.colors.border]}
>              <div style={{ 
                padding: '32px', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginRight: '8px' }}>{service.name}</h3>
                    <span style={{ color: client.colors.accent, fontWeight: 700, fontSize: '1.4rem' }}>{service.price}</span>
                  </div>
                  <p style={{ color: client.colors.muted, fontSize: '0.8rem', marginBottom: '20px', fontWeight: 500 }}>⏱ Duration: {service.duration}</p>
                  <p style={{ color: client.colors.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>{service.desc}</p>
                </div>

                <Link to="/contact" style={{ 
                  background: service.popular ? client.colors.accent : 'transparent', 
                  color: service.popular ? client.colors.bg : client.colors.text, 
                  border: `1px solid ${client.colors.accent}`,
                  textAlign: 'center',
                  padding: '10px 0', 
                  borderRadius: '6px', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  marginTop: 'auto'
                }}>
                  Book This Service
                </Link>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '100px 48px', borderTop: `1px solid ${client.colors.border}`, maxWidth: '680px' }}>
        <p style={{ color: client.colors.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Location & Hours</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '24px' }}>We bring the shop to your driveway.</h2>
        <p style={{ color: client.colors.text, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '16px' }}>
          📍 <strong>Location:</strong> {client.location}
        </p>
        <p style={{ color: client.colors.muted, fontSize: '1rem', lineHeight: 1.8 }}>
          ⏰ <strong>Hours:</strong> {client.hours} <br />
          📞 <strong>Phone:</strong> {client.phone} <br />
          ✉️ <strong>Email:</strong> {client.email}
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 48px', borderTop: `1px solid ${client.colors.border}`, display: 'flex', justifyContent: 'space-between', color: client.colors.muted, fontSize: '0.85rem' }}>
        <span>© 2026 {client.name}</span>
        <span>Built by SPG Web Studio</span>
      </footer>

    </div>
  );
}

export default Home;