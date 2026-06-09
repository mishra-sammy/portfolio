import { useState, useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

export default function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const bgColor = type === 'success'
    ? 'rgba(16, 185, 129, 0.15)'
    : 'rgba(239, 68, 68, 0.15)';
  const borderColor = type === 'success'
    ? 'rgba(16, 185, 129, 0.3)'
    : 'rgba(239, 68, 68, 0.3)';
  const iconColor = type === 'success' ? '#10B981' : '#EF4444';

  return (
    <div
      className={`fixed top-6 right-6 z-[9999] ${isExiting ? 'toast-exit' : 'toast-enter'}`}
      style={{
        background: bgColor,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}
    >
      {type === 'success' ? (
        <FiCheckCircle size={20} color={iconColor} />
      ) : (
        <FiAlertCircle size={20} color={iconColor} />
      )}
      <span style={{ fontSize: '0.9rem', fontWeight: 500, flex: 1 }}>{message}</span>
      <button
        onClick={handleClose}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '2px' }}
        aria-label="Close notification"
      >
        <FiX size={16} />
      </button>
    </div>
  );
}
