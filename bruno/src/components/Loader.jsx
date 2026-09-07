import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './style/Loader.css'



export default function Loader({nextPath = '/'}) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(nextPath, { replace: true });
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loader-container">
      <div className="loader">
        <div className="dot">
          <p>B</p>
        </div>
        <div className="dot">
          <p>R</p>
        </div>
        <div className="dot">
          <p>U</p>
        </div>
        <div className="dot">
          <p>N</p>
        </div>
        <div className="dot">
          <p>O</p>
        </div>
      </div>
    </div>
  )
}