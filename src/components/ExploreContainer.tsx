import './ExploreContainer.css';
import { IonItem, IonLabel } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name === "About") {
    return (
      <div className="container">
        <strong>YOU REACHED ABOUT IN IF</strong>
        <p>Explore</p>
      </div>
    );
  }
  if (name === "Experience") {
    return (
      <div className="container">
        <strong>YOU REACHED EXPERIENCE IN IF</strong>
        <p>Explore</p>
      </div>
    );
  }
  if (name === "Portfolio") {
    return (
      <div className="container">
        <strong>YOU REACHED PORTFOLIO IN IF</strong>
        <p>Explore</p>
      </div>
    );
  }
  if (name === "Art Gallery") {
    return (
      <div className="container">
        <strong>YOU REACHED ART GALLERY IN IF</strong>
        <p>Explore</p>
      </div>
    );
  }
  if (name === "Contact") {
    return (
      <div className="container">
        <strong>Email</strong>
        <p className="detail">brailowparker@berkeley.edu</p>
        <strong>Phone</strong>
        <p>(801) 673-5570</p>
      </div>
    );
  }
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore</p>
    </div>
  );
};

export default ExploreContainer;
