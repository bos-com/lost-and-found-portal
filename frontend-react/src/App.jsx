import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ReportItemForm from './components/ReportItemForm';
import Filters from './components/Filters';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...');
  const [statusError, setStatusError] = useState('');

  const [items, setItems] = useState([]);
  const [itemsError, setItemsError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'LOST',
    location: '',
    contactName: '',
    contactPhone: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [filterType, setFilterType] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  // Ping backend silently (we no longer display this, but keep in case we want it later)
  useEffect(() => {
    fetch('http://localhost:8080/api/ping')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to reach backend');
        return response.json();
      })
      .then((data) => {
        setBackendStatus(data.message || 'Backend responded');
      })
      .catch(() => {
        setStatusError('Could not connect to backend. Make sure it is running.');
      });
  }, []);

  // Load items
  const loadItems = () => {
    fetch('http://localhost:8080/api/items')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch items');
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setItemsError('');
      })
      .catch(() => {
        setItemsError('Could not load items. Check if backend is running.');
      });
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Reset page when filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, searchTerm]);

  // Form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit new item
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');
    setSubmitError('');

    if (!formData.title || !formData.contactName || !formData.contactPhone) {
      setSubmitError('Please fill in Title, Contact Name and Contact Phone.');
      return;
    }

    fetch('http://localhost:8080/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitMessage('Item reported successfully.');
          setFormData({
            title: '',
            description: '',
            type: 'LOST',
            location: '',
            contactName: '',
            contactPhone: '',
          });
          loadItems();
        } else {
          setSubmitError(data.message || 'Failed to save item.');
        }
      })
      .catch(() => {
        setSubmitError('Error sending data. Check backend.');
      });
  };

  // Mark as claimed
  const markAsClaimed = (id) => {
    if (!window.confirm('Mark this item as claimed?')) return;

    fetch('http://localhost:8080/api/items/claim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({ id: String(id) }).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          loadItems();
        } else {
          alert(data.message || 'Failed to update item.');
        }
      })
      .catch(() => {
        alert('Error talking to backend.');
      });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #111827)',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#111827',
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: '1120px',
          margin: '1.5rem auto 0 auto',
          padding: '1.5rem',
          borderRadius: '0.9rem',
          backgroundColor: 'white',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.55)',
        }}
      >
        <p
          style={{
            marginBottom: '1.5rem',
            fontSize: '0.95rem',
            color: '#4b5563',
            textAlign: 'center',
          }}
        >
          Report and track lost or found items on campus.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
            gap: '2rem',
            alignItems: 'flex-start',
          }}
        >
          <ReportItemForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitMessage={submitMessage}
            submitError={submitError}
          />

          <div>
            <Filters
              filterType={filterType}
              setFilterType={setFilterType}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ItemList
              items={items}
              itemsError={itemsError}
              filterType={filterType}
              searchTerm={searchTerm}
              onMarkAsClaimed={markAsClaimed}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
