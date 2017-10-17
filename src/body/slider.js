import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Slider extends Component {
    render() {
        const images = [
            {
                original: 'https://instagram.fkiv1-1.fna.fbcdn.net/t51.2885-15/e15/10979617_1534871596766346_292819314_n.jpg',
                thumbnail: 'https://instagram.fkiv1-1.fna.fbcdn.net/t51.2885-15/e15/10979617_1534871596766346_292819314_n.jpg',
                description: 'description',
            },{
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                description: 'description',
            },{
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                description: 'description',
            },{
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                description: 'description',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/',
                description: 'description',
            }
        ]

        return (
            <ImageGallery
                items={images}
                slideInterval={2000}
                onImageLoad={this.handleImageLoad}
                showPlayButton={false}
                showIndex={true}
            />
        );
    }
}

export default Slider;