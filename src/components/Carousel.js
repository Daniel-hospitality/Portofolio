import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from '../components/Card';



// import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
// import pic3 from '../assets/images/pic3.jpg';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'BootCamp',
                    subTitle: 'Bootcamp 2020',
                    imgSrc: pic2,
                    link: 'https://techgrounds.nl/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'BootCamp2',
                    subTitle: 'Bootcamp 2020',
                    imgSrc: pic2,
                    link: 'https://techgrounds.nl/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'BootCamp3',
                    subTitle: 'Bootcamp 2020',
                    imgSrc: pic2,
                    link: 'https://techgrounds.nl/',
                    selected: false
                },

              
            ]


        }

    }

    handleCardClick = (id, Card) => {

        // console.log(id);       
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(        
          <Container fluid={true}>
              <Row className="justify-content-around color-headerBg">
                  {this.makeItems(this.state.items)}
              </Row>
          </Container>
        );
    }
}

export default Carousel;