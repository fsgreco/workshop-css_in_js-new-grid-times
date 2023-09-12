import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const notOnMobile = css`
	display: none;
	@media ${({theme}) => theme.queries.laptopAndUp} {
		display: revert;
	}
`

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
				<div css={notOnMobile}>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
				</div>

        <Logo />
				<ActionGroup>
		
				<div css={`${notOnMobile}; padding-top: 0.9em; `}>
					<div css={`display: flex; flex-direction: column; gap:0.3em;`}>
						<Button>Subscribe</Button>
						<p css={`text-align: center;`}>
							<a css={`font-size:0.9rem;text-decoration:underline;font-style:italic;`} href="#">
							Already a subscriber?
							</a>
						</p>
					</div>

				</div>
					
				</ActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

	@media ${({theme}) => theme.queries.laptopAndUp} {
		display: none;
	}
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

	@media ${({theme}) => theme.queries.laptopAndUp } {
		justify-content: space-between;
	}
`;

export default Header;
