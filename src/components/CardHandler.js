import React from 'react'
import Card from './Card'
import './Card.css'

// Images
import img_9 from '../images/img-9.jpg'
import img_1 from '../images/img-1.jpg'
import img_2 from '../images/img-2.jpg'
import img_4 from '../images/img-4.jpg'
import img_8 from '../images/img-8.jpg'

function CardHandler() {
    return (
        <div className="cards">
            <h1>Check out these amazing destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Card
                            src={img_9} text="Explore the waterfall of Pachmarhi." label="Adventure" path="/" />

                        <Card
                            src={img_2} text="Experience the islands of Andaman in private yacht." label="Luxury" path="/" />
                    </ul>
                    <ul className="cards-items">
                        <Card
                            src={img_4} text="Play on the grasslands of Khajjiar." label="Exhilarating" path="/" />

                        <Card
                            src={img_1} text="Experience the calm of Mountains in Himachal" label="Blissful" path="/" />

                        <Card
                            src={img_8} text="Ride through the deserts of Rajasthan" label="Ethnicity" path="/" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardHandler
