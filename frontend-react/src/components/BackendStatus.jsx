function BackendStatus({ backendStatus, statusError }) {
  return (
    <section style={{ marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Backend Connection Status
      </h2>
      {statusError ? (
        <p style={{ color: '#b91c1c', fontWeight: 500 }}>{statusError}</p>
      ) : (
        <p style={{ color: '#065f46', fontWeight: 500 }}>{backendStatus}</p>
      )}
    </section>
  );
}

export default BackendStatus;
