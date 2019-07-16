//  components/gallery
//     stateless
//     renders the image object in a gallery - using react grid gallery library

import React from 'react';
import { Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

//object of images
const IMAGES =
[{
    src: "/images/gallery/GettyImages-994320390.jpg",
    thumbnail: "/images/gallery/GettyImages-994320390.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: "/images/gallery/GettyImages-994320438.jpg",
    thumbnail: "/images/gallery/GettyImages-994320438.jpg",
    thumbnailWidth: 180,
    thumbnailHeight: 212,
},
{
    src: "/images/gallery/LA_P4040.jpg",
    thumbnail: "/images/gallery/LA_P4040.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "/images/gallery/LA_P4090.jpg",
    thumbnail: "/images/gallery/LA_P4090.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "/images/gallery/LA_P4091.jpg",
    thumbnail: "/images/gallery/LA_P4091.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: "/images/gallery/LA_P4010.jpg",
    thumbnail: "/images/gallery/LA_P4010.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "/images/gallery/GettyImages-994320694.jpg",
    thumbnail: "/images/gallery/GettyImages-994320694.jpg",
    thumbnailWidth: 180,
    thumbnailHeight: 212,
},
]


const GalleryImages = props => (
    <Col xs={{span: 12}} md={12} className="sidebar-col">
        <h2>Photos</h2>
        <div>
            <Gallery images={IMAGES}
            enableImageSelection = {false}/>
        </div>
    </Col>
    )
    
export default GalleryImages; 

