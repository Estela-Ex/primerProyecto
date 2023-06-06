
import Carousel from 'react-bootstrap/Carousel'

export default function Caroussel() {
    let images = [{nombre:"spiderman",src:"../../src/assets/spiderman.jpg"},{nombre:"transformes",src:"../../src/assets/transformes.jpeg"},{nombre:"star wars",src:"../../src/assets/star wars.jpg"}]
  return (
      <>
    <Carousel>
      {images?.map((image) => (
        <Carousel.Item>
        <img
          className="imagen-slider"
          src={image.src}
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Las mejores peliculas del 2023</h3>
          <p>a un boton de tenerlas en casa</p>
        </Carousel.Caption>
      </Carousel.Item>
          ))}
          </Carousel>
      </>
 )
}