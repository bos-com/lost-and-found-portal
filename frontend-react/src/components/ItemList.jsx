import ItemCard from './ItemCard';
import Pagination from './Pagination';

function ItemList({
  items,
  itemsError,
  filterType,
  searchTerm,
  onMarkAsClaimed,
  currentPage,
  setCurrentPage,
}) {
  const filteredItems = items.filter((item) => {
    if (filterType !== 'ALL' && item.type !== filterType) return false;
    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return false;
    return true;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const safePage = totalPages === 0 ? 1 : Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        borderRadius: '0.75rem',
        padding: '1.1rem',
        border: '1px solid #e5e7eb',
      }}
    >
      <h2 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', color: '#111827' }}>
        Recent Items
      </h2>
      <p style={{ marginBottom: '0.75rem', fontSize: '0.82rem', color: '#6b7280' }}>
        Showing up to 50 latest reported items.
      </p>

      {itemsError && <p style={{ color: '#b91c1c', fontWeight: 500 }}>{itemsError}</p>}

      {currentItems.length === 0 && !itemsError ? (
        <p style={{ color: '#555' }}>No items match this filter/search.</p>
      ) : (
        <>
          <div
            style={{
              maxHeight: '420px',
              overflowY: 'auto',
              paddingRight: '0.25rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
              }}
            >
              {currentItems.map((item) => (
                <ItemCard key={item.id} item={item} onMarkAsClaimed={onMarkAsClaimed} />
              ))}
            </div>
          </div>

          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}

export default ItemList;
