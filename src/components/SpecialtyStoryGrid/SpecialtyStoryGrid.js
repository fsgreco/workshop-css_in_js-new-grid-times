import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
						<div className="storywrapper" key={data.id}>
							<MiniStory {...data} />
						</div>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

	@media ${p => p.theme.queries.tabletAndUp} {
		grid-template-columns: 100%;
	}

	@media ${p => p.theme.queries.laptopAndUp} {
		grid-template-columns: 1fr minmax(0px,1fr);
		gap: 48px 0px;
	}
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fit, minmax(163px, 1fr));

	@media ${p => p.theme.queries.laptopAndUp} {
		--space: 16px;
		padding-right: var(--space);
		border-right: 1px solid var(--color-gray-300);
		margin-right: var(--space);
	}
`;

const SportsSection = styled.section`
`;

const SportsStories = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fit, minmax(163px, 1fr));

	@media ${p => p.theme.queries.tabletAndUp} {
		/* Get MiniStories */
		> div.storywrapper { min-width: 220px; }
		display:flex;
		overflow: auto;
		//white-space: wrap;
	}
`;

export default SpecialtyStoryGrid;
