import Carousel from "react-bootstrap/Carousel";

export function Slider() {
  return (
    <div>
      <Carousel  variant="dark">
      
        <Carousel.Item>
          <img
            className="slider"
            src="https://i.gadgets360cdn.com/large/boult_audio_airbass_z1_tws_earbuds_1644500251398.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider"
            src="https://images.firstpost.com/wp-content/uploads/2021/06/Boult-Audio-Q10-earbuds.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider"
            src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/Monopod_touch_control_2.png?v=1644480372"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider"
            src="https://cdn.shopify.com/s/files/1/0548/8849/7221/files/exterme-video-section.jpg?v=1640774631"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5>Fourth slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
}


// https://images.pexels.com/photos/3974146/pexels-photo-3974146.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260