import Typography, { TypographyProps } from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ruslanbabkin01">
        Ruslan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
