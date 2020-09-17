import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>
<div>
<img src="./images/glen1.jpg" alt="Glen's Outdoor Adventure" />
<p className="legend">Glen's Outdoor Adventure</p>
</div>
<div>
<img src="./images/glen2.jpg" alt="Glen Resting"/>
<p className="legend">Glen Resting</p>
</div>
<div>
<img src="./images/lenny1.jpg" alt="Lenny Resting"/>
<p className="legend">Lenny Resting</p>
</div>
<div>
<img src="./images/glenandlenny2.jpg" alt="Glen and Lenny Resting"/>
<p className="legend">Glen and Lenny Resting</p>
</div>
<div>
<img src="./images/glenandlenny4.jpg" alt="Glen and Lenny Sunbathing"/>
<p className="legend">Glen and Lenny Sunbathing</p>
</div><div>
<img src="./images/glenandlenny3.jpg" alt="Glen and Lenny Showing Off"/>
<p className="legend">Glen and Lenny Showing Off</p>
</div>
</Carousel>
</div>
  );
}

export default App;
