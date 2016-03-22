import React, { PropTypes, Component } from 'react';
import Slide from './Slide';
import JumpTo from './JumpTo';
import slides from '../slides';

export default class Deck extends Component {
    static propTypes = {
        currentSlide: PropTypes.number.isRequired
    };
    
    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    
    handleKeyDown (e) {
        const { nextSlide, prevSlide } = this.props;
        switch (e.keyCode) {
            case 37:
                prevSlide();
                break;
            case 39:
                nextSlide();
                break;
        }
    }
    
    render() {
        const { currentSlide } = this.props; 
        return (
            <div className='deck'>
                <div className='deck-container'
                    style={{
                        height: `${slides.length * 100}vh`,
                        transform: `translate(0, ${-currentSlide * 100}vh)`,
                        transition: 'all 0.25s ease-out'
                    }}>
                    {slides.map(this.wrapChild)}
                </div>
                <JumpTo {...this.props} />
                <div className='end'>the end.</div>
            </div>
        );
    }
    
    wrapChild(slide, index) {
        return (<Slide key={index} theme={slide.theme} content={slide.content}/>);
    }
}