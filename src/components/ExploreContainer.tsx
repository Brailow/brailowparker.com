import './ExploreContainer.css';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name === "About") {
    return (
      <div className="container about-container">
        <p className="about-text about-text-subtitle">
          What I'm Doing Now:
        </p>
        <p className="about-text">
          I'm a senior graduating from UC Berkeley with a Bachelor's degree in both Cognitive Science and Data Science in May 2023.
          I am very interested in the future of artificial intelligence and the role it will play in the course of history; hence, my choice of majoring in both Cognitive Science and Data Science.
        </p>
        <br></br>
        <p className="about-text-small">
          (Further reasoning for my major choices: I majored in Cognitive Science since it is the multidisciplinary study of the mind, and I believe (potentially uncontroversially) that everything of interest is found in the mind--regardless of whether the substrate is biological or silicon.
          Furthermore, I chose Data Science because I want to understand the silicon side of the mind more, especially considering how wide of an impact it already has and how much exponentially wider that impact will be.
          Additionally, I believe that the best way to build up the human corpus of knowledge is when we are all playing the same game to gather the knowledge. The scientific method provides a good set of rules surrounding the game to gather the knowledge, in my estimation.
          Gathering and analyzing the data from empirics, and updating our hypotheses is the essence of Data Science; hence, my choice.)
        </p>
        <br></br>
        <p className="about-text about-text-subtitle">
          Where I'm From:
        </p>
        <p className="about-text">
          I was born and raised in Salt Lake County, Utah. I attended Corner Canyon High School where I participated in Speech and Debate.
        </p>
        <br></br>
        <p className="about-text about-text-subtitle">
          Hobbies:
        </p>
        <p className="about-text">
          I enjoy weightlifting, trail running, concerts, trying new foods/experiences, building digital and physical projects, and the occassional video game with friends from home.
        </p>
        <br></br>
        <p className="about-text about-text-subtitle">
          Intellectual Interests:
        </p>
        <p className="about-text">
          I love (regardless of how pretentious it appears) armchair-theorizing about the future, psychology, and philosophy. I enjoy reading and discussing new ideas. I would say a majority of my ideas about the nature of ~stuff~ come from Descartes, Leibniz, Hume, Kant, Hegel, Neitzsche, and Jung.
          A large part of my interest in AI likely comes from listening to talks in high school from Nick Bostrom, Stuart Russell, Demis Hassabis, Elon Musk, and Ray Kurzweil: I zipped through The Singularity is Near during a family vacation.
        </p>
      </div>
    );
  }
  if (name === "Experience") {
    return (
      <div className="container about-container">
        <IonList>
          <IonItem>
            <IonLabel className="item">
              Education:
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subitem">
              UC Berkeley '23
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubitem">
              BA Cognitive Science
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubsubitem">
              GPA: 3.9
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubitem">
              BA Data Science
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubsubitem">
              GPA: 3.7
            </IonLabel>
          </IonItem>
        </IonList>
        <IonItem>
            <IonLabel className="subitem">
              Berkeley Haas School of Business
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubitem">
              Certificate in Business for Arts, Sciences, and Engineering
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="subsubsubitem">
              GPA: 4.0
            </IonLabel>
          </IonItem>
        <br></br>
      </div>
    );
  }
  if (name === "Portfolio") {
    return (
      <div className="container">
        <strong>{name}</strong>
        <p>Explore</p>
      </div>
    );
  }
  if (name === "Art Gallery") {
    return (
      <div className="container">
        <strong>{name}</strong>
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
        <p className="detail">(801) 673-5570</p>
        <strong>Linkedin</strong>
        <br></br>
        <a href="https://www.linkedin.com/in/parkerbrailow">https://www.linkedin.com/in/parkerbrailow</a>
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
