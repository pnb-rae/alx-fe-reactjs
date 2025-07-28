function WelcomeMessage({ name }) {
  return (
    <div
      style={{
        backgroundColor: '#e6f7ff',
        color: '#333',
        padding: '15px',
        borderRadius: '8px',
        margin: '10px auto',
        width: '80%',
        textAlign: 'center',
        fontSize: '1.2rem'
      }}
    >
      <p>Welcome, {name}! Glad to have you here.</p>
    </div>
  );
}

export default WelcomeMessage;

