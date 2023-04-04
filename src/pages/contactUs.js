import React from 'react';

function Contact(){

	return(
        <div>
            <div className="contact_section layout_padding">
    <div className="container-fluid">
      <h1 className="contact_taital">Contact Us</h1>
      <p className="contact_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-6 padding_left_0">
            <div className="map_main">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                  width="600" height="550" frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mail_section_1">
              <input type="text" className="mail_text" placeholder="Name" name="text" />
              <input type="text" className="mail_text" placeholder="Email" name="text" />
              <input type="text" className="mail_text" placeholder="Phone Number" name="text" />
              <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
              <div className="send_bt"><a href="#">SEND</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
	);

}

export default Contact;