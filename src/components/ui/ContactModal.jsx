import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xovwwvav', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => onClose(), 2000);
      } else {
        setStatus('error');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-head-text)]">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 rounded-md bg-[var(--color-card-bg)] 
                       text-[var(--color-text)] border border-[var(--color-hover)]
                       focus:outline-none focus:ring-2 focus:ring-[var(--color-hover)]"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 rounded-md bg-[var(--color-card-bg)] 
                       text-[var(--color-text)] border border-[var(--color-hover)]
                       focus:outline-none focus:ring-2 focus:ring-[var(--color-hover)]"
              required
            />
          </div>
          <div className="space-y-2">
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full p-2 rounded-md bg-[var(--color-card-bg)] 
                       text-[var(--color-text)] border border-[var(--color-hover)]
                       focus:outline-none focus:ring-2 focus:ring-[var(--color-hover)]"
              required
            />
          </div>
          
          {status === 'success' && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500">Failed to send message. Please try again.</p>
          )}
          
          <div className="flex justify-end space-x-4">
            <Button 
              onClick={onClose}
              name="Cancel"
              variant="secondary"
            />
            <Button 
              onClick={handleSubmit}
              type="submit"
              name={isSubmitting ? "Sending..." : "Send Message"}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;