function Filters({ filterType, setFilterType, searchTerm, setSearchTerm }) {
  const buttonBase = {
    padding: '0.3rem 0.85rem',
    borderRadius: '999px',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    color: '#111827',
    fontSize: '0.82rem',
    cursor: 'pointer',
  };

  const activeStyle = (color) => ({
    border: `1px solid ${color}`,
    backgroundColor: color,
    color: 'white',
  });

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <div
        style={{
          marginBottom: '0.75rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setFilterType('ALL')}
            style={{
              ...buttonBase,
              ...(filterType === 'ALL' ? activeStyle('#2563eb') : {}),
            }}
          >
            All
          </button>

          <button
            type="button"
            onClick={() => setFilterType('LOST')}
            style={{
              ...buttonBase,
              ...(filterType === 'LOST' ? activeStyle('#b91c1c') : {}),
            }}
          >
            Lost
          </button>

          <button
            type="button"
            onClick={() => setFilterType('FOUND')}
            style={{
              ...buttonBase,
              ...(filterType === 'FOUND' ? activeStyle('#059669') : {}),
            }}
          >
            Found
          </button>
        </div>

        <div style={{ flexGrow: 1, maxWidth: '260px' }}>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.45rem 0.8rem',
              borderRadius: '999px',
              border: '1px solid #d1d5db',
              fontSize: '0.85rem',
              outline: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
