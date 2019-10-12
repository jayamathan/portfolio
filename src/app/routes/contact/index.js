import React from "react";
import GoogleMapReact from "google-map-react";
import Page from "../../components/page";
import "./contact.scss";
import { Container, Row, Col } from "../../components/layout";
import Heading, { PageHeading } from "../../components/heading";
import ContactForm from "../../components/contactForm";
import { SOCIAL_LINKS } from "../../constants";
import Meta from "../../constants/meta";

const MapText = ({ text }) => <div className="map-text">{text}</div>;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    layerType: "TransitLayer",
    fullscreenControl: false,
    streetViewControl: false,
    panControl: false,
    mapTypeControl: false,
    scrollwheel: true,
    zoomControl: false,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      }
    ]
  };
}

const pos = {
  lat: 28.417051,
  lng: 77.057853
};

class GoogleMap extends React.PureComponent {
  static defaultProps = {
    zoom: 16
  };

  render() {
    return (
      <React.Fragment>
        <div className="map-wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCnf5QOgx8eqc103p2b2uyZRK48CIqtcT4"
            }}
            defaultCenter={{ ...pos }}
            defaultZoom={this.props.zoom}
            options={createMapOptions}
          >
            <MapText {...pos} text={"ab."} />
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}

const FollowMe = () => {
  return (
    <div className="follow-me">
      <Heading text="Follow Me" className="text-center" />
      <ul>
        {SOCIAL_LINKS.map(sl => (
          <li key={sl.name}>
            <a href={sl.link} rel="noopener noreferrer" target="_blank">
              <img src={sl.img} alt={sl.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Address = () => {
  return (
    <div className="address">
      <Heading text=" Always happy to hear from you" className="text-center" />
      <span>Address</span>
      <p>G Block, South City II, Sector 50, Gurugram, India - 122018</p>

      <span>Email</span>
      <p>
        <a href="mailto:abhisharjangir@ymail.com">abhisharjangir@ymail.com</a>
      </p>
    </div>
  );
};

const Contact = () => (
  <Page {...Meta.contact}>
    <div className="contact">
      <Container>
        <Row>
          <div className="contact-heading">
            <PageHeading text="Get in Touch" />
          </div>
        </Row>
      </Container>
      <Container>
        <GoogleMap />
        <div className="contact-content">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Address />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <FollowMe />
          </Col>
        </Row>
      </Container>
    </div>
  </Page>
);

export default Contact;
