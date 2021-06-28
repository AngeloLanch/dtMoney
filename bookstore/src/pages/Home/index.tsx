import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { DiscoverSlider } from './components/DiscoverSlider';
import { CurrentlyReadingContent } from './components/CurrentlyReadingContent';
import { ReactComponent as Oval } from '../../assets/oval.svg';
import { ReactComponent as Oval2 } from '../../assets/oval2.svg';
import { ReviewsContent } from './components/ReviewsContent';

import {
  Container,
  SearchBarSection,
  ContentSection,
  HelloUser,
  HelloUserContainer,
  DiscoverSection,
  DiscoverHeader,
  OvalDetailContainer,
  Oval2DetailContainer,
  CurrentlyReadingSection,
  CurrentlyReadingHeader,
  ReviewsOfTheDaySection,
  ReviewsHeader,
} from './styles';

export function Home() {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <SearchBarSection>
        <SearchBar />
      </SearchBarSection>
      <ContentSection>
        <HelloUserContainer>
          <HelloUser>
            Hi, <span>Clara Azevedo</span>👋
          </HelloUser>
        </HelloUserContainer>
        <DiscoverSection>
          <DiscoverHeader>
            <h1>Discover New Books</h1>
            <button type="button">More</button>
          </DiscoverHeader>
          <DiscoverSlider />
          <OvalDetailContainer>
            <Oval />
          </OvalDetailContainer>
          <Oval2DetailContainer>
            <Oval2 />
          </Oval2DetailContainer>
        </DiscoverSection>
        <CurrentlyReadingSection>
          <CurrentlyReadingHeader>
            <h1>Currently Reading</h1>
            <button type="button">All</button>
          </CurrentlyReadingHeader>
          <CurrentlyReadingContent />
        </CurrentlyReadingSection>
        <ReviewsOfTheDaySection>
          <ReviewsHeader>
            <h1>Reviews of The Days</h1>
            <button type="button">All Videos</button>
          </ReviewsHeader>
          <ReviewsContent />
        </ReviewsOfTheDaySection>
      </ContentSection>
    </Container>
  );
}
