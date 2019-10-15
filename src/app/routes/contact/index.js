import React from "react";
import GoogleMapReact from "google-map-react";
import Page from "../../components/page";
import "./contact.scss";
import { Container, Row, Col } from "../../components/layout";
import Heading, { PageHeading } from "../../components/heading";
import ContactForm from "../../components/contactForm";
//import { SOCIAL_LINKS } from "../../constants";
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
  lat: 12.7369,
  lng: 80.0144
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
            <MapText {...pos} text={"JM."} />
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
        <li>
          <a
            href="https://www.instagram.com/jayamathan_s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/instagram-icon.svg"
              alt="instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jayamathan.skj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/facebook.svg"
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jayamathan-s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/jayamathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt="github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/JayamathanSkj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.svgporn.com/logos/twitter.svg"
              alt="twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

const Address = () => {
  return (
    <div className="address">
      <Heading text=" Always happy to hear from you" className="text-center" />
      <span>Address</span>
      <p>C3 203 Aqualily Apartments, Mahindra world city, Chennai - 603002</p>

      <span>Email</span>
      <p>
        <a href="mailto:jayamathanskj03@gmail.com">jayamathanskj03@gmail.com</a>
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
