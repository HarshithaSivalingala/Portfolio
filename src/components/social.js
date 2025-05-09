// social.js
import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 20px 0 0;
  padding: 0;

  li {
    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Social = () => (
  <StyledSocialList>
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </StyledSocialList>
);

Social.propTypes = {};

export default Social;
