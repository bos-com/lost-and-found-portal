function Pagination({ currentPage, totalPages, onPageChange }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages || totalPages === 0;

  const btnBase = {
    padding: '0.4rem 0.9rem',
    borderRadius: '999px',
    border: '1px solid #d1d5db',
    fontSize: '0.85rem',
    cursor: 'pointer',
    backgroundColor: 'white',
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
      }}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        style={{
          ...btnBase,
          opacity: isFirst ? 0.5 : 1,
          cursor: isFirst ? 'not-allowed' : 'pointer',
        }}
      >
        Previous
      </button>

      <span style={{ fontSize: '0.85rem', color: '#374151' }}>
        {totalPages === 0 ? 'No pages' : `Page ${currentPage} of ${totalPages}`}
      </span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        style={{
          ...btnBase,
          opacity: isLast ? 0.5 : 1,
          cursor: isLast ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
