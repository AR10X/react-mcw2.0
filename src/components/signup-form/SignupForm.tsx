import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useAuth } from '../services/auth';

function SignupForm() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup(name, email, password, branch, section);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="branch">Branch</Label>
        <Input
          type="text"
          name="branch"
          id="branch"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="section">Section</Label>
        <Input
          type="text"
          name="section"
          id="section"
          value={section}
          onChange={(event) => setSection(event.target.value)}
        />
      </FormGroup>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}

export default SignupForm;
