import { BiBookBookmark } from 'react-icons/bi';
import { ReactComponent as Reading } from '../../../../assets/reading.svg';
import { ReactComponent as Stick } from '../../../../assets/stick.svg';
import { ReactComponent as Oval3 } from '../../../../assets/oval3.svg';
import { ReactComponent as SmallOvall } from '../../../../assets/smallOval.svg';
import {
  BookImageContainer,
  BookInfoContainer,
  Container,
  TransparentBorder,
  GraphicDetailsContainer,
} from './styles';

export function CurrentlyReadingContent() {
  return (
    <Container>
      <BookImageContainer>
        <Reading />
      </BookImageContainer>
      <BookInfoContainer>
        <h1>Originals</h1>
        <h2>by Adam Grant</h2>
        <div>
          <BiBookBookmark />
          <p>
            Chapter <span>2</span> From 9
          </p>
        </div>
      </BookInfoContainer>
    </Container>
  );
}
