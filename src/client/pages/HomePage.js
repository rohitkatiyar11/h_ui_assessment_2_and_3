import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchHotelDetail } from "../../data/actions"
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
        openItems: {
            map: false,
            photos: false,
            amenities: false
        }
    }
  }

    openItem(item) {
      const items = this.state.openItems;
      items[item] = !items[item];
      this.setState({openItems: items});
    }

    goToRoomsSelection() {
      window.location.href = "/dynamic-form"
    }

  head() {
    return (
        <header className="headerSite">
            <div className="buttonBack">
                <button type="button" className="backBtn" onClick={this.goToRoomsSelection}><i className="fa fa-angle-left"></i>Back</button>
            </div>
            <div className="titleBox">
                <div className="title">Hotel Details</div>
            </div>
            <div className="logoBox"> <a href="javascript:void(0)" title="logo"><img src="images/logo.jpg" alt="logo"/></a> </div>
        </header>
    )
  }
  render() {
    return (
      <div>
        {this.head()}
          <section className="back-image">
              <div className="outline">
                  <div className="imageWrap"> <img src="images/hotelexterior.jpg" alt="image"/> </div>
                  {this.props.hotels && this.props.hotels.address ?
                      <address>
                      <p className="addLine1">{this.props.hotels.address.line1}</p>
                      <p className="addLine2">{this.props.hotels.address.line2}</p>
                      <p className="addLine3">{this.props.hotels.address.line3}</p>
                  </address> : ''}
                  {this.props.hotels && this.props.hotels.facilities ?
                  <div className="item">
                      <div className="item-head" onClick={this.openItem.bind(this, 'map')}>
                          <h4>Map</h4>
                          <div className={this.state.openItems.map ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                      </div>
                      {this.state.openItems.map ? <div className="item-body">
                          <p>{this.props.hotels.facilities.map}</p>
                      </div> : ''}
                      <div className="item-head" onClick={this.openItem.bind(this, 'photos')}>
                          <h4>Photo gallery</h4>
                          <div className={this.state.openItems.photos ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                      </div>
                      {this.state.openItems.photos ? <div className="item-body">
                          <p>{this.props.hotels.facilities.photos}</p>
                      </div> : ''}
                      <div className="item-head" onClick={this.openItem.bind(this, 'amenities')}>
                          <h4>Amenities</h4>
                          <div className={this.state.openItems.amenities ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                      </div>
                      {this.state.openItems.amenities ? <div className="item-body">
                          <p>{this.props.hotels.facilities.amenities}</p>
                      </div> : ''}
                  </div> : '' }

              </div>
          </section>
      </div>
    )
  }
}

const mapStateToProps = ({ hotels }) => ({ hotels })

export const loadData = ({ dispatch }) => dispatch(fetchHotelDetail())

export default {
    loadData,
    component: connect(mapStateToProps, { fetchHotelDetail })(HomePage)
}