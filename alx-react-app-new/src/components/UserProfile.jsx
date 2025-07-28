function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '8px',
        padding: '15px',
        margin: '20px',
        backgroundColor: '#fafafa'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{age}</span>
      </p>
      <p style={{ fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;


