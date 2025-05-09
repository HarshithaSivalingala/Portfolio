import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const StyledTestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  background-color: var(--navy);
  color: var(--lightest-slate);

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 30px;
    text-align: center;
  }

  .carousel-container {
    width: 100%;
    max-width: 800px;
    position: relative;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease;
  }

  .testimonial-card {
    min-width: 100%;
    padding: 2rem;
    background: var(--light-navy);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);

    .quote {
      font-size: var(--fz-lg);
      line-height: 1.6;
      color: var(--slate);
      margin-bottom: 1.5rem;
      white-space: pre-wrap;
      text-align: left;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 15px;

      .author-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--green);
        color: var(--navy);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
      }

      .author-details {
        .author {
          font-weight: bold;
          color: var(--green);
          font-size: var(--fz-md);
          margin-bottom: 0.2rem;
        }

        .position {
          font-size: var(--fz-sm);
          color: var(--light-slate);
        }
      }
    }
  }

  .carousel-nav {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 15px;
  }

  .nav-button {
    background: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(100, 255, 218, 0.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--light-slate);
      opacity: 0.3;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: var(--green);
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 80px 20px;

    .testimonial-card {
      padding: 1.5rem;
    }
  }
`;

const testimonialsData = [
  {
    quote:
      'I had the pleasure of working with Harshitha during our undergraduation in 2023, on a full-stack project involving React and NodeJS, and I was thoroughly impressed by her technical skills and dedication.From designing clean and responsive front-end components in React to integrating back-end logic, she consistently delivered high-quality work with precision and care.Beyond her technical strengths, what truly stands out is her collaborative spirit.\n\n She’s an exceptional team player who brings a positive attitude to every discussion, is always open to feedback, and never hesitates to lend a hand when someone needs support. \n\nHer commitment to deadlines, problem-solving ability, and attention to detail made a significant impact on the success of our project.I highly recommend Harshitha to any team looking for a skilled, motivated, and reliable developer. She’s a valuable asset wherever she goes.',
    author: 'Pratyusha Paluchani',
    position: 'Engineering Analyst at Goldman Sachs',
  },
  {
    quote:
      'I have had the privilege of collaborating with Harshitha on open source contributions and our hobby project, ChargeShare — a platform designed to make EV charger sharing seamless and scalable.\n\n What truly sets her apart is an exceptional commitment to quality and a relentless drive for improvement. Every feature, UI detail, or code refactor isn’t just completed it’s refined. She dives deep into research, never settling for a surface level solution. Even when something “works,” it’s not enough unless it meets and often exceeds the standard we have set.\n\n In addition to technical brilliance, she is an amazing collaborator thoughtful, supportive, and always open to feedback.',
    author: 'BaluChander Deshamoni',
    position: 'Software Developer at JP Morgan Chase & Co',
  },
  {
    quote:
      'I had the opportunity to collaborate with Harshitha on various technical projects, coding trainings, WISE(Women in Software Engineering) powered by talent sprint during years 2021-2023. I\'ve consistently been impressed by her leadership skills, dedication, and problem-solving mindset.\n\nShe\'s a talented full-stack developer, with strong experience in the MERN stack, and brings a great balance of frontend creativity and backend logic to her work.\n\nHarshitha also has a solid grasp of data structures and algorithms, UI designing, web development, and Python, making her a truly versatile developer. Her ability to build scalable applications while ensuring a smooth and intuitive user experience is one of her strongest traits.',
    author: 'Spandana Gujjarlapudi',
    position: 'Software Developer at Deloitte',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Auto-rotate slides every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // Update carousel position when index changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <StyledTestimonialsSection id="testimonials">
      <h2 className="numbered-heading">What's it like to work with me ?</h2>

      <div className="carousel-dots">
        {testimonialsData.map((_, index) => (
          // <div
          //   key={index}
          //   className={`dot ${index === currentIndex ? 'active' : ''}`}
          //   onClick={() => goToSlide(index)}
          // />
          <div
            key={index}
            role="button"
            tabIndex={0}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToSlide(index);
              }
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">{testimonial.quote}</p>
              <div className="author-info">
                {/* <div className="author-avatar">{testimonial.author.charAt(0)}</div> */}
                <div className="author-details">
                  <p className="author">{testimonial.author}</p>
                  <p className="position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button className="nav-button" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="nav-button" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>

      {/* <div className="carousel-dots">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
