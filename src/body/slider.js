import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Slider extends Component {
    render() {
        const images = [
            {
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            }, {
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            }, {
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },{
                original: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                thumbnail: 'https://image.prntscr.com/image/uCbafBgFQzW003fqwoV8lQ.png',
                description: 'description',
            },
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