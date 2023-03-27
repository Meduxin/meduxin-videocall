import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const handleRoomJoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleRoomJoin()}>Join</button>
    </div>
  );
};

export default HomePage;
