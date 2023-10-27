import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { StyleSheetManager } from 'styled-components';
import IconNext from '../../assets/img/icon-next.svg';
import IconPrev from '../../assets/img/icon-prev.svg';
import img1 from '../../assets/img/carousel/img1.jpg';
import img2 from '../../assets/img/carousel/img2.jpg';
import img3 from '../../assets/img/carousel/img3.jpg';
import img4 from '../../assets/img/carousel/img4.jpg';
import img5 from '../../assets/img/carousel/img5.jpg';

const AutoCarousel = () => {
  const images = [img1, img2, img3, img4, img5];
  const settings = {
    dots: true, // 하단 점 표시
    infinite: true, // 무한 루프
    speed: 1500, // 슬라이드 전환 속도
    autoplay: true, // 자동 재생
    slidesToShow: 1, // 한 번에 표시되는 슬라이드 수
    slidesToScroll: 1, // 슬라이드 넘기는 단위 수
    autoplaySpeed: 2000, // 자동 재생 간격
    nextArrow: (
      <Div>
        <img src={IconNext} className="arrow" />
      </Div>
    ), // next button 커스텀
    prevArrow: (
      <Div>
        <img src={IconPrev} className="arrow" />
      </Div>
    ), // prev button 커스텀
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'slideCount'}>
      <Container>
        <div className="auto-slider-container">
          <Slider {...settings}>
            <div>
              <img src={images[0]} alt="Image 1" className="images" />
            </div>
            <div>
              <img src={images[1]} alt="Image 1" className="images" />
            </div>
            <div>
              <img src={images[2]} alt="Image 3" className="images" />
            </div>
            <div>
              <img src={images[3]} alt="Image 4" className="images" />
            </div>
            <div>
              <img src={images[4]} alt="Image 5" className="images" />
            </div>
          </Slider>
        </div>
      </Container>
    </StyleSheetManager>
  );
};

const Container = styled.div`
  .slick-list {
    //슬라이드 스크린
    width: 100%;
    height: 500px;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .slick-slider {
    .images {
      object-fit: cover;
      width: 100%;
      height: 500px;
    }
  }

  .slick-dots {
    //슬라이드 점의 위치
    bottom: 20px;
    margin-top: 200px;
    li {
      width: 20px;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    margin-left: 0;
    height: 40px;
    width: 40px;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
  .slick-arrow {
    width: 50px;
    height: 100px;
  }
  .slick-arrow:hover {
    background-color: rgba(255, 255, 255, 0.5);
    height: 50px;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0);
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Div = styled.div`
  .arrow {
    height: 100%;
    width: 100%;
  }
`;

export default AutoCarousel;
