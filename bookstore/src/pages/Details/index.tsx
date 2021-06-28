import { FiArrowLeft } from 'react-icons/fi';
import { ReactComponent as BookImg } from '../../assets/book.svg';
import { Container, BookImgContainer, BookContent } from './styles';

export function Details() {
  return (
    <Container>
      <BookImgContainer>
        <FiArrowLeft />
        <div>
          <BookImg />
        </div>
      </BookImgContainer>
      <BookContent>
        <h1>
          <strong>Hooked: </strong>Hooked : How to Build Habid-Forming Products
        </h1>
        <h3>Nir Eyal</h3>
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </BookContent>
    </Container>
  );
}
