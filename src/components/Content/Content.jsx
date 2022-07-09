 
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/Content/Content.scss';
export function Content() {
 return(
<div className='Content'>
  <Carousel fade  >
  <Carousel.Item interval={2000}>
 
      <img
   
      src="https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/11/MVS_091018-7-1.jpg"
   
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Conoce Nuestras Tiendas</h3>
      <p>Praesent commodo cursu tur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    
      src="https://peregrinocoffee.cl/wp-content/uploads/2021/03/3CAD9FA2-8D57-4E4D-9DCD-6C717A416AD0-scaled.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Disfruta Nuestro Cafe</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
     
      src="https://c8.alamy.com/compes/mnhnf3/un-retrato-de-dos-baristas-guapo-en-uniforme-de-pie-juntos-en-la-cafeteria-con-maquina-de-cafe-en-el-fondo-mnhnf3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>¡Te esperamos!</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 )
}
