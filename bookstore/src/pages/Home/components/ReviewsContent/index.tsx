import { ReactComponent as BookReviews } from '../../../../assets/bookReviews.svg';
import { Content, ImgContainer } from './styles';

export function ReviewsContent() {
  return (
    <Content>
      <ImgContainer>
        <BookReviews />
      </ImgContainer>
    </Content>
  );
}
