import React from 'react'
import styles from './FrontPage.module.css'
import { LoremIpsum } from 'react-lorem-ipsum';

import FrontImage from '../../Components/ImageHolder/ImageHolder'
import ImageLink from '../../Components/Elements/LinkOnImage/Link'
import ImageGallery from 'react-image-gallery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faStore } from "@fortawesome/free-solid-svg-icons";

import images from './images'

const storeImage = 'https://image.freepik.com/foto-gratis/fila-camisetas-colores-tienda_117930-230.jpg'
const aboutImage = 'https://image.freepik.com/vector-gratis/papel-tapiz-fondo-poligono-geometrico-abstracto-forma-triangular-polly-baja_206846-1103.jpg'


const FrontPage = () => {
    return (
        <div>
            <div className={styles.textContainer}>
                <p>Presale right now, click on the "store" button in the top right corner to purchase your hoodie!</p>
            </div>
        </div>
    )
}

export default FrontPage