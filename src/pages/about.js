import React, {useState} from 'react';

function About() {
	const[brand, setBrand] = useState('Apple');
	const[count, setCount] = useState(0);
	return (
           <div>
		      <div className="about_section layout_padding">
    <div className="container">
      <h1 className="about_taital">About Repair {brand} shop {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If</p>
      <div className="about_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="image"><img src="images/img-2.png" /></div>
          </div>
          <div className="col-md-6">
            <div className="image_2"><img src="images/img-3.png" /></div>
          </div>
        </div>
      </div>
      <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If</p>
      <div className="readmore_bt"><a href="#">Read More</a></div>
    </div>
  </div>
		    </div>
		);
}

export default About;