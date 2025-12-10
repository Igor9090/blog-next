import { FaSpinner } from 'react-icons/fa';
import { Container, Spinner, Text } from './styled';

export default function Loading() {
  return (
    <Container>
      <Spinner>
        <FaSpinner />
      </Spinner>
      <Text>Carregando...</Text>
    </Container>
  );
}
