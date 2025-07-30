import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Social from '@components/social';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }
  .masters {
    color: var(--green);
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .image-wrapper {
    flex-shrink: 0;
    width: 260px;
    height: auto;
    transition: all 0.5s var(--easing);

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      setShowImage(true);
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    const imgTimeout = setTimeout(() => setShowImage(true), navDelay + 400); // Slight delay for image
    return () => {
      clearTimeout(timeout);
      clearTimeout(imgTimeout);
    };
  }, [prefersReducedMotion]);

  const one = <h1>Hi, I'm</h1>;
  const two = <h4 className="big-heading">Harshitha Sivalingala.</h4>;
  const four = (
    <>
      <p>
        I’m a software developer passionate about building scalable, user-centered solutions that
        make a real impact. Driven by curiosity and a love for innovation, I’m constantly exploring
        new ways to create intuitive, accessible products that put people first. I also enjoy using AI automation to streamline experiences and solve problems at scale.
      </p>
      <p>
        {' '}
        Ever since I was very young, I used to wonder how the internet seemed to know
        everything.That little spark of curiosity grew into a big passion for software development
        and eventually led me to pursue a{' '}
        <span className="masters">Master’s in Computer Science</span> at Iowa state University,
        turning childhood wonder into my dream career.
      </p>
    </>
  );

  const five = (
    <div className="social">
      <Social />
    </div>
  );

  const items = [one, two, four, five];

  return (
    <StyledHeroSection>
      <div className="content">
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </div>

      <div
        className="image-wrapper"
        style={{
          opacity: showImage ? 1 : 0,
          transform: showImage ? 'translateY(0)' : 'translateY(20px)',
        }}>
        <img src="harshitha.png" alt="Harshitha Sivalingala" />
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
