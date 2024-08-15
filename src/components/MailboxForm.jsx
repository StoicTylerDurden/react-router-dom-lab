// src/components/MailboxForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  _id: '', // This will be assigned automatically, so it doesn't need to be included in the form
  boxSize: 'Small', // Defaulting to 'Small'
  boxholder: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Automatically assign a box number (_id) when adding a mailbox
    props.addMailbox({
      ...formData,
    
    });
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="BoxHolderName">Enter a Boxholder:</label>
        <input
          type="text"
          id="BoxHolderName"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
          required
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          required
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
