/*
 * API Service for portfolio backend
 * TODO: Update BACKEND_URL with your deployed backend URL
 */

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export async function submitContactForm(data) {
  const response = await fetch(`${BACKEND_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Failed to send message');
  }

  return response.json();
}
