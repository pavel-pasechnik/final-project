import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';

const Home = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Register />
      <Login />
    </>
  );
};

export default Home;
