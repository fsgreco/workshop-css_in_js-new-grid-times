import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
						<VerticalStoryWrapper key={story.id}>
            	<SecondaryStory  {...story} />
						</VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
						<OpinionWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

	@media ${({theme}) => theme.queries.tabletAndUp} {
		grid-template-areas: 
			'main-story secondary-stories'
			'advertisement advertisement'
			'opinion-stories opinion-stories'
			;
		grid-template-columns: 2fr 1fr;
    gap: 48px 0px;		
	}

	@media ${({theme}) => theme.queries.laptopAndUp} {
		grid-template-areas: 
		'main-story secondary-stories opinion-stories'
		'main-story advertisement advertisement'
		;
		grid-template-columns: 3fr 2fr 1fr;
	}
`;

const MainStorySection = styled.section`
  grid-area: main-story;
	@media ${({theme}) => theme.queries.tabletAndUp} {
		--space: 16px;
		padding-right: var(--space);
		border-right: 1px solid var(--color-gray-300);
		margin-right: var(--space);
	}
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
	@media ${({theme}) => theme.queries.laptopAndUp} {
		--space: 16px;
		padding-right: var(--space);
		border-right: 1px solid var(--color-gray-300);
		margin-right: var(--space);
	}
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionList = styled(StoryList)`
	flex: 1;
	@media ${p => p.theme.queries.tabletOnly} {
		flex-direction: row;
		gap: 1em;
	}
`

const VerticalStoryWrapper = styled.div`
	&:not(:last-of-type) {
		padding-bottom: 16px;
		border-bottom: 1px solid var(--color-gray-300);
		margin-bottom: 16px;
	}
`
const OpinionWrapper = styled(VerticalStoryWrapper)`
	@media ${p => p.theme.queries.tabletOnly} {
		&:not(:last-of-type) {
			padding-bottom: revert;
			border-bottom: revert;
			margin-bottom: revert;
		}
	}
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
