import { RegisterForm } from 'components';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
}
