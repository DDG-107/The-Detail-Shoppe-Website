import { Link } from 'react-router-dom';
import { client } from '../clientData'; // Adjust path if necessary
import BorderGlow from '../components/BorderGlow'; 
import { useScrollReveal } from '../components/useScrollReveal'; 

function Reviews() {
  // Set up the scroll container observer hook
  const containerRef = useScrollReveal();

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: client.colors.bg, color: client.colors.text, minHeight: '100vh' }}>
      
      {/* Shared Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', borderBottom: `1px solid ${client.colors.border}` }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px', color: client.colors.text, textDecoration: 'none' }}>{client.name}</Link>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: client.colors.muted, textDecoration: 'none' }}>Home</Link>
          <Link to="/reviews" style={{ color: client.colors.accent, textDecoration: 'none', fontWeight: 600 }}>Reviews</Link>
          <Link to="/contact" style={{ color: client.colors.muted, textDecoration: 'none' }}>Get Started</Link>
        </div>
      </nav>

      {/* Content Section */}
      <section style={{ padding: '80px 48px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: client.colors.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Testimonials</p>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '16px' }}>What Our Clients Say</h1>
          
          {/* Main Stat Summary badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: client.colors.surface, padding: '12px 24px', borderRadius: '30px', border: `1px solid ${client.colors.border}` }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: client.colors.accent }}>4.9 ★★★★★</span>
            <span style={{ fontSize: '0.9rem', color: client.colors.muted }}>Based on local business reviews</span>
          </div>
        </div>

        {/* Dynamic Reviews Grid with Scroll Reveal Class */}
        <div 
          ref={containerRef}
          className="reveal-hidden"
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          {client.reviews.map((rev, index) => (
            /* Wrapped each card element item in the optimized BorderGlow parameters */
            <BorderGlow
              key={index}
              animated={false} 
              backgroundColor={client.colors.surface}
              borderRadius={16}
              glowRadius={15}
              glowIntensity={1}
              coneSpread={20}
              edgeSensitivity={0.1}
              fillOpacity={0.4}
              glowColor="45 20 50"
              colors={[client.colors.accent, client.colors.border]}
            >
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '1.1rem' }}>{rev.name}</h3>
                    <span style={{ color: client.colors.accent, fontSize: '0.9rem', letterSpacing: '2px' }}>
                      {"★".repeat(rev.rating)}
                    </span>
                  </div>
                  {rev.date && (
                    <span style={{ color: client.colors.muted, fontSize: '0.85rem' }}>{rev.date}</span>
                  )}
                </div>
                <p style={{ color: client.colors.text, fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  "{rev.text}"
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 48px', borderTop: `1px solid ${client.colors.border}`, display: 'flex', justifyContent: 'space-between', color: client.colors.muted, fontSize: '0.85rem', marginTop: '60px' }}>
        <span>© 2026 {client.name}</span>
        <span>Built by SPG Web Studio</span>
      </footer>

    </div>
  );
}

export default Reviews;