import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Card from 'react-bootstrap/Card';
function Sidebar() {
    return (

        <div className='photo'>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/08/mainslide-03.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="slide3"
                        src='https://media.istockphoto.com/id/836073798/photo/high-voltage-circuit-breaker-in-a-power-substation.jpg?s=612x612&w=0&k=20&c=OI3mo5E2CQg9AkkucePfO2sE-Ji_h_QH0fM4FjUk5Dc='
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='sonu'>

                <input className='input_bot' placeholder='NAME'></input>
                <input className='input_bot' placeholder='EMAIL'></input>
                <input className='input_bot' placeholder='MOBILE NO.'></input>
                <button className='input_bot'>SUMBIT</button>

            </div>
            <div className='box'>
                <img className='imgg' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/layout01-img01.jpg'></img>
                <div className='pp'>
                    <p> <h1>Outstanding Residential & Commercial Services</h1>
                        <b> All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.

                            Full-service electrical layout, design
                            Wiring and installation/upgrades
                            Emergency power solutions (generators)
                            Virtually any electrical needs you have – just ask!</b></p>
                </div>
            </div>

            <div className='photo2'>
                <img src='https://cdn.pixabay.com/photo/2014/05/14/16/47/power-plant-344231__340.jpg'></img>
                <img className='img2' src='https://media.istockphoto.com/id/545255228/photo/power-plant.jpg?s=612x612&w=0&k=20&c=fdB26h11-ucgk1gqiXmlxPuNHB4yeoeVdhj3INNcpcs='></img>
            </div>


            <div className='a22'>
                <img className='a2' src='https://cdn.pixabay.com/photo/2017/06/17/11/39/power-plant-2411932_960_720.jpg'></img>
                <img className='a2' src='https://media.istockphoto.com/id/175536857/photo/electric-power-substation.jpg?s=612x612&w=0&k=20&c=h721eIhycpQOjXoyBtbc05MlheTCWiYTypiBnKt-rHA='></img>
                <img className='a2' src='https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
            </div>

            <div className='h1'> 24/7 Electrician Services <br></br><h4> Safe and Efficient
                We are a Full Service Electrical Contractor

            </h4></div>
            <div className='cards'>
                <div className='cards1'>                <img className='bulb' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/plugins/electricity-core/assets/images/mask-img01.png'></img>
                    <h1>Electrical</h1>
                    <h4>our installation free for in your city</h4>
                </div>
                <div className='cards1'>                <img className='bulb' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/plugins/electricity-core/assets/images/mask-img01.png'></img>
                    <h1>SECUIRTY</h1>
                    <h4>you can view event over a moniter in your home</h4>
                </div>
                <div className='cards1'>                <img className='bulb' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/plugins/electricity-core/assets/images/mask-img01.png'></img>
                    <h1> PANEL</h1>
                    <h4>electrical panel heart of you electrical system</h4>
                </div>

            </div>

            <div className='image2'>
                {/* <div className='index'>dfffsdfssdfsd</div>  */}
                <img className='imm' src='https://cdn.pixabay.com/photo/2017/06/17/11/39/power-plant-2411932_960_720.jpg'></img>
            </div>

            <div className='photo'>
                <h1>THIS IS OUR PROJECTS</h1>

            </div>
            <div className='cp'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-01.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-02.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-03.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-04.jpg'></img>
                    </Card.Body>
                </Card>
            </div>
            <div className='card2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-06.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-08.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-09.jpg'></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <img className='zz' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/07/gallery01-05.jpg'></img>
                    </Card.Body>
                </Card>
            </div>
            <div id='z1'>
                <div id='z2'><h2>Some  <br></br>Important facts</h2></div>
                <div id='z3'> <h1>15000+ <h6>Residentional project</h6></h1>
                    <div id='z4'><h1>1500+ <h6>Commercial Project</h6></h1></div>
                    <div id='z4'><h1>1000+ <h6>Industrial Project</h6></h1></div>


                </div>
            </div>
{/* 
            <div className='sonu2'>
                <div className='sonu1'>sdfsffsdgdfgerfdvdfbvcbrgerfegegdferesfdvfbdhtrefdsfdhrtrterfdfdghrtrtersdbghtgrtefdsdbgrhgrefddgter
                    <img className='img1' src='https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2020/08/layout01-img03-600x460.jpg'></img>
                </div>
            </div> */}
        </div>

    )
}

export default Sidebar