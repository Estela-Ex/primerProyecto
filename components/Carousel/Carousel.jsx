import Carousel from 'react-bootstrap/Carousel';

export default function UncontrolledExample({images}) {
  return (
    <Carousel>
      {images.map((image,i) =>{
        return(
        <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={image.imagen}
          alt={image.nombre}
          width="1920px"
          height="1280"
  
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
      
    </Carousel>
  );
}

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// export function Caroussel({ images }) {
//   return (
//     <Carousel>
//       {images.map((image) => (
//         <div>
//           <img src={image.src} />
//           <p className="legend">{image.alt}</p>
//         </div>
//       ))}
//     </Carousel>
//   );
// }

/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */