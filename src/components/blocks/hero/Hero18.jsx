import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-prev slick-arrow"
    onClick={onClick}
    style={{
      left: '10px',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 'none',
      width: '35px',
      height: '35px',
      color: '#fff',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '24px',
    }}
  >
    &#10094;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-next slick-arrow"
    onClick={onClick}
    style={{
      right: '10px',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 'none',
      width: '35px',
      height: '35px',
      color: '#fff',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '24px',
    }}
  >
    &#10095;
  </button>
);

const Hero18 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slides = [
    { id: 1, image: '/img/photos/Slider1.jpg' },
    { id: 2, image: '/img/photos/Slider2.jpg' },
    { id: 3, image: '/img/photos/Slider3.jpg' },
    { id: 4, image: '/img/photos/Slider4.jpg' },
  ];

  return (
    <section style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
      {/* Left Side - Text Section with Sloped Background */}
      <div style={{
  width: '230%',

  padding: '100px',
  background: 'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)',
  textAlign: 'left',
  clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 120%)', // Sloped effect
  color: 'white' // Ensure text is visible on gradient background
}}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Your Title Here</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Your description text goes here. Add more details about your content to match your requirements.
        </p>
      </div>

      {/* Right Side - Image Slider */}
      <div style={{ width: '50%', position: 'relative' }}>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  clipPath: 'polygon(100% 0, 0 100%, 0 0, 0% 1%)',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero18;
