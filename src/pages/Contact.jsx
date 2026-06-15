import { Link } from 'react-router-dom';
import { client } from '../clientData'; 

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request simulated!");
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: client.colors.bg, color: client.colors.text, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Shared Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 48px', borderBottom: `1px solid ${client.colors.border}`, zIndex: 10 }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px', color: client.colors.text, textDecoration: 'none' }}>{client.name}</Link>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: client.colors.muted, textDecoration: 'none' }}>Home</Link>
          <Link to="/reviews" style={{ color: client.colors.muted, textDecoration: 'none' }}>Reviews</Link>
          <Link to="/contact" style={{ color: client.colors.accent, textDecoration: 'none', fontWeight: 600 }}>Get Started</Link>
        </div>
      </nav>

      {/* Full Screen Interactive Splitting Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', flexGrow: 1 }}>
        
        {/* Left Side: Cool Background Image Section */}
        <div style={{ 
          position: 'relative', 
          background: `url(${client.images.interior}) no-repeat center center`, 
          backgroundSize: 'cover',
          minHeight: '300px'
        }}>
          {/* Dark Overlay to make the content look clean */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, rgba(13,17,23,0.95), rgba(13,17,23,0.70))',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <p style={{ color: client.colors.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Let's Talk Shop</p>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '24px', lineHeight: 1.1 }}>Ready to book?<br />Get in touch.</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: client.colors.muted, textTransform: 'uppercase' }}>Call or Text</h4>
                <a href={`tel:${client.phone}`} style={{ color: client.colors.accent, fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>{client.phone}</a>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: client.colors.muted, textTransform: 'uppercase' }}>Service Area</h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{client.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div style={{ padding: '60px 48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit} style={{ background: client.colors.surface, border: `1px solid ${client.colors.border}`, borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '480px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: client.colors.muted }}>Your Name</label>
              <input type="text" required style={{ width: '100%', padding: '12px', background: client.colors.bg, border: `1px solid ${client.colors.border}`, borderRadius: '6px', color: client.colors.text }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: client.colors.muted }}>Phone Number</label>
              <input type="tel" required style={{ width: '100%', padding: '12px', background: client.colors.bg, border: `1px solid ${client.colors.border}`, borderRadius: '6px', color: client.colors.text }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: client.colors.muted }}>Select Service</label>
              <select style={{ width: '100%', padding: '12px', background: client.colors.bg, border: `1px solid ${client.colors.border}`, borderRadius: '6px', color: client.colors.text }}>
                {client.services.map(s => (
                  <option key={s.name} value={s.name}>{s.name} ({s.price})</option>
                ))}
              </select>
            </div>
            <button type="submit" style={{ background: client.colors.accent, color: client.colors.bg, border: 'none', padding: '16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', marginTop: '10px', fontSize: '0.95rem' }}>
              Submit Booking Request
            </button>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ padding: '32px 48px', borderTop: `1px solid ${client.colors.border}`, display: 'flex', justifyContent: 'space-between', color: client.colors.muted, fontSize: '0.85rem' }}>
        <span>© 2026 {client.name}</span>
        <span>Built by SPG Web Studio</span>
      </footer>

    </div>
  );
}

export default Contact;