import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: 'onChange' });

  const rememberPasswordChecked = watch('rememberPassword', false);

  const onSubmit = (data) => {
    alert(
      `Login Successful! \nUsername: ${data.username}\nRemember Password: ${
        data.rememberPassword ? 'Yes' : 'No'
      }`
    );
  };

  return (
    <Container className="mt-5 ">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Welcome to Jayjay Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan username"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                })}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Remember Password Checkbox */}
            <Form.Group className="mb-3" controlId="formRememberPassword">
              <Form.Check
                type="checkbox"
                label="Ingat Password"
                style={{
                  color: rememberPasswordChecked ? 'green' : 'black',
                }}
                {...register('rememberPassword', {
                  required: 'Kamu harus mengingat password',
                })}
                isInvalid={!!errors.rememberPassword}
              />
              {errors.rememberPassword && (
                <Form.Text className="text-danger">
                  {errors.rememberPassword.message}
                </Form.Text>
              )}
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" disabled={!isValid} className='w-100'>
              Submit form
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
