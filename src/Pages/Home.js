import React, { Component } from 'react'
import images1 from '../images/Back.png'
import images2 from '../images/search.png'
import images3 from '../images/placeholder_for_missing_posters.png'
import images4 from '../images/poster3.jpg'
import image5 from '../images/poster1.jpg'
import Background from '../images/nav_bar.png'

var sectionStyle = {
  width: "100%",
  height: "100px",
  backgroundImage: `url(${Background})`,
  position: "fixed",
  top: "0px",
  left: "0px"
};

class Home extends Component {

  scroll = e => {
    console('ggg');
  }

  render () {
    return (
      <div onScroll={this.scroll} className = "main_common_home">
        <div style={ sectionStyle }>
        <div className = "common_home">
          <div className = "home_icon_cmn">
              <div className = "home_icon1">
                <i className="fa fa-wifi" aria-hidden="true"></i>
              </div>
              <div className = "home_icon1">
                <i className="fa fa-signal" aria-hidden="true"></i>
              </div>
              <div className = "home_icon1">
                <span className="hundred">100%</span>
              </div>
              <div className = "home_icon1">
                <i className="fa fa-battery-full" aria-hidden="true"></i>
              </div>
              <div className = "home_icon1">
                <span className="time">11 : 30</span>
              </div>
            </div>
          </div>
          <div className = "home_arrowicon_cmn">
            <div className = "home_arrowicon1">
              <img className='img-fluid ban_img' src={images1} alt="no-img" />
            </div>
            <div className = "home_arrowicon2">
              <p className='romantic_p'>Romantic Comedy</p>
            </div>
            <div className = "home_arrowicon3">
              <div className = "home_arrowicon4">
              <img className='img-fluid ban_img' src={images2} alt="no-img" />
              </div>
            </div>
          </div>
          </div>
          <div className = "home_images_cmn">
            <div className = "home_images_cmn1">
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  Rear window
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  Family Pot
                </div>
              </div>
            </div>
            <div className = "home_images_cmn1">
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
            </div>
            <div className = "home_images_cmn1">
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images4} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={images3} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
              <div className = "home_images">
                <div className = "home_image">
                <img className='img-fluid thre_img' src={image5} alt="no-img" />
                </div>
                <div className = "home_imagestxt">
                  The Birds
                </div>
              </div>
            </div>
          </div>
      </div>
    	
    )
  }
}

export default Home
