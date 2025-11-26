function ItemCard({ item, onMarkAsClaimed }) {
  const typeColor = item.type === 'LOST' ? '#b91c1c' : '#059669';
  const statusColor =
    item.status === 'CLAIMED'
      ? '#4b5563'
      : item.type === 'LOST'
      ? '#f97316'
      : '#059669';

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '0.85rem',
        padding: '0.95rem',
        backgroundColor: 'white',
        boxShadow: '0 4px 10px rgba(15, 23, 42, 0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.4rem',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'white',
            backgroundColor: typeColor,
            padding: '0.18rem 0.6rem',
            borderRadius: '999px',
          }}
        >
          {item.type === 'LOST' ? 'LOST ITEM' : 'FOUND ITEM'}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'white',
            backgroundColor: statusColor,
            padding: '0.18rem 0.6rem',
            borderRadius: '999px',
          }}
        >
          {item.status || 'OPEN'}
        </span>
      </div>

      <h3 style={{ marginBottom: '0.3rem', fontSize: '1.02rem', color: '#111827' }}>
        {item.title}
      </h3>

      <p
        style={{
          marginBottom: '0.4rem',
          fontSize: '0.9rem',
          color: '#4b5563',
        }}
      >
        {item.description}
      </p>

      <p
        style={{
          marginBottom: '0.25rem',
          fontSize: '0.85rem',
          color: '#374151',
        }}
      >
        <strong>Location:</strong> {item.location || 'Not specified'}
      </p>
      <p
        style={{
          marginBottom: '0.25rem',
          fontSize: '0.85rem',
          color: '#374151',
        }}
      >
        <strong>Contact:</strong> {item.contactName}
      </p>
      <p
        style={{
          marginBottom: '0.25rem',
          fontSize: '0.85rem',
          color: '#374151',
        }}
      >
        <strong>Phone:</strong> {item.contactPhone}
      </p>

      {item.dateReported && (
        <p
          style={{
            marginTop: '0.2rem',
            fontSize: '0.76rem',
            color: '#6b7280',
          }}
        >
          Reported: {item.dateReported}
        </p>
      )}

      {item.status !== 'CLAIMED' && (
        <button
          type="button"
          onClick={() => onMarkAsClaimed(item.id)}
          style={{
            marginTop: '0.55rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#10b981',
            color: 'white',
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          Mark as claimed
        </button>
      )}
    </div>
  );
}

export default ItemCard;
