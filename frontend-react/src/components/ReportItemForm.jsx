function ReportItemForm({
  formData,
  onChange,
  onSubmit,
  submitMessage,
  submitError,
}) {
  const labelStyle = {
    display: 'block',
    marginBottom: '0.25rem',
    fontSize: '0.9rem',
    color: '#111827',
    fontWeight: 500,
  };

  const inputStyle = {
    width: '100%',
    padding: '0.55rem 0.6rem',
    borderRadius: '0.55rem',
    border: '1px solid #d1d5db',
    fontSize: '0.9rem',
    outline: 'none',
  };

  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        border: '1px solid #e5e7eb',
      }}
    >
      <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#111827' }}>
        Report Lost or Found Item
      </h2>

      {submitMessage && (
        <p
          style={{
            color: '#047857',
            fontWeight: 500,
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
          }}
        >
          {submitMessage}
        </p>
      )}
      {submitError && (
        <p
          style={{
            color: '#b91c1c',
            fontWeight: 500,
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
          }}
        >
          {submitError}
        </p>
      )}

      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            rows={3}
            style={{
              ...inputStyle,
              resize: 'vertical',
            }}
          />
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={onChange}
            style={inputStyle}
          >
            <option value="LOST">Lost Item</option>
            <option value="FOUND">Found Item</option>
          </select>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={onChange}
            style={inputStyle}
          />
          <div
            style={{
              fontSize: '0.78rem',
              fontStyle: 'italic',
              color: '#6b7280',
              marginTop: '0.2rem',
            }}
          >
            Where item was lost, last seen or found.
          </div>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Contact Name *</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <label style={labelStyle}>Contact Phone *</label>
          <input
            type="text"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: '0.6rem',
            padding: '0.65rem 1.4rem',
            borderRadius: '999px',
            border: 'none',
            background:
              'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(37, 99, 235, 0.35)',
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ReportItemForm;
