import './ExploreContainer.css';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name === "About") {
    return (
      <div className="container about-container">
        <strong>What I'm Doing Now</strong>
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
        <strong>Where I'm From</strong>
        <p className="about-text">
          I was born and raised in Salt Lake County, Utah. I attended Corner Canyon High School where I participated in Speech and Debate.
        </p>
        <br></br>
        <strong>Hobbies</strong>
        <p className="about-text">
          I enjoy weightlifting, trail running, concerts, trying new foods/experiences, building digital and physical projects, and the occassional video game with friends from home.
        </p>
        <br></br>
        <strong>Intellectual Interests</strong>
        <p className="about-text">
          I love (regardless of how pretentious it appears) armchair-theorizing about the future, psychology, and philosophy. I enjoy reading and discussing new ideas. I would say a majority of my ideas about the nature of ~stuff~ come from Descartes, Leibniz, Hume, Kant, Hegel, Neitzsche, and Jung.
          A large part of my interest in AI likely comes from listening to talks in high school from Nick Bostrom, Stuart Russell, Demis Hassabis, Elon Musk, and Ray Kurzweil: I zipped through The Singularity is Near during a family vacation.
        </p>
      </div>
    );
  }
  if (name === "Experience") {
    return (
      <div className="container experience-container">
        <strong>Education</strong>
        <p className="about-text">UC Berkeley '23</p>
        <p className="about-text tab">BA Cognitive Science</p>
        <p className="about-text tab">BA Data Science</p>
        <p className="about-text tabtab">GPA: 3.7</p>
        <p className="about-text tabtab">Honors: Dean's List, Honor's List</p>
        <p className="about-text">Berkeley Haas School of Business '19</p>
        <p className="about-text tab">Certificate in Business for Arts, Sciences, and Engineering</p>
        <p className="about-text tabtab">GPA: 4.0</p>
        <strong>Work</strong>
        <p className="about-text">CEO/Frontend Developer: My New Token, LLC</p>
        <p className="about-text">(November 2020-)</p>
        <p className="about-text tab">I designed and built the frontend for a social media platform.
              Implemented via custom, Ionic-extending, web components using StencilJS
              and combined them with ReactJS.</p>
        <p className="about-text">ML Engineer: [gauge] Consulting </p>
        <p className="about-text">(September, October 2019)</p>
        <p className="about-text tab">Contracted to implement K-Means algorithm 
            in Python for big data visualizations 
            and analytics at companies like Airbnb.</p>
        <p className="about-text">Behavioral Economics Research Assistant: Haas School of Business</p>
        <p className="about-text">(February 2019-May 2020)</p>
        <p className="about-text tab">Brainstormed and analyzed novel experiments for
              biases via creation of Qualtrics (e.g. A/B tests) and
              in-person experiments under Professor Ellen Evers. Analyzed
              results with Python and R.</p>
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
