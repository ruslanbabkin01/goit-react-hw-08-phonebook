import { ErrorText, ErrorLink } from './NotFound.styled';

export default function NotFound() {
  return (
    <ErrorText>
      This page was not found, please return to
      <ErrorLink to="/">Home page</ErrorLink>
    </ErrorText>
  );
}


