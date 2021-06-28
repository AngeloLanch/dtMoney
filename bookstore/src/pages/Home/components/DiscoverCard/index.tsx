import { VscGraph } from 'react-icons/vsc';
import { ReactComponent as BookImg } from '../../../../assets/book.svg';
import { ReactComponent as Stick } from '../../../../assets/stick.svg';
import { ReactComponent as Triangle } from '../../../../assets/triangle.svg';
import { ReactComponent as SmallOvall } from '../../../../assets/smallOval.svg';
import {
  BookImageContainer,
  BookInfoContainer,
  Container,
  GraphicDetailsContainer,
} from './styles';

interface DiscoverCardProps {
  isOdd: boolean;
}

export function DiscoverCard({ isOdd }: DiscoverCardProps) {
  return (
    <Container isOdd={isOdd}>
      <BookInfoContainer>
        <h1>Hooked</h1>
        <h2>Nir Eyal</h2>
        <div>
          <VscGraph />
          <p>120+ Read Now</p>
        </div>
      </BookInfoContainer>
      <BookImageContainer>
        <BookImg />
        <GraphicDetailsContainer>
          <SmallOvall />
          <Triangle />
          <div>
            <Stick />
          </div>
        </GraphicDetailsContainer>
      </BookImageContainer>
    </Container>
  );
}
