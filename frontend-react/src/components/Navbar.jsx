function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        background: 'linear-gradient(90deg, #1d4ed8, #2563eb)',
        color: 'white',
        padding: '0.85rem 1.8rem',
        boxShadow: '0 6px 18px rgba(15, 23, 42, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.03em' }}>
        Lost &amp; Found Portal
      </div>
      <div style={{ fontSize: '0.85rem', opacity: 0.95 }}>
        Bugema University • Prototype
      </div>
    </nav>
  );
}

export default Navbar;
