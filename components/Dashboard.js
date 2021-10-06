import React from 'react';
import Card from './Card'

function Home(props) {
     let cards=[
         {url:"https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709?b=1&k=20&m=1301953709&s=170667a&w=0&h=sMr7J0Pv3kBCELxjhl4P8DD3BSCVrmIWUXF37r23GGU=" ,
          heading:"Bootcamps"},
         {url:"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
          heading:"Workshops"},
         {url:"https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHx1c2VyJTIwZXhwZXJpZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
         heading:"1 on 1's"},
     ]

    return (
        <div className="container">
            <h2>Programs for you</h2>
            <p className="info">
            Lorem ipsum dolor sit amet. Aut sint deserunt et exercitationem maiores qui
             quasi quae et magnam voluptas. Eum consequatur quae est quisquam commodi
              qui Quis minus a adipisci nihil quo quae ducimus. Quo dolorum rerum quo
               error inventore et ducimus enim. Ut aliquam error aut voluptas
            illum quo vero voluptatem ad doloremque voluptates ut voluptates possimus
            </p>
            <div className="details">
                                {cards.map((item , idx) =>
                                    <Card
                                        key={idx}
                                        heading={item.heading}
                                        url={item.url}
                                    />

                                )}
                            </div>





        </div>
    );
}

export default Home;