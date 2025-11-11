import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

function ApplicationForm() {
  const { jobId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    axios.post('/api/apply', {
      job_id: jobId,
      applicant_name: name,
      applicant_email: email
    }).then(() => {
      alert('Application submitted');
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Apply for Job</Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
}

export default ApplicationForm;
