import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
  IonChip
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, brush, brushSharp, accessibilitySharp, accessibility, earth, earthSharp, folderOpen, folderOpenSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'About',
    url: '/page/About',
    iosIcon: accessibility,
    mdIcon: accessibilitySharp
  },
  {
    title: 'Experience',
    url: '/page/Experience',
    iosIcon: earth,
    mdIcon: earthSharp
  },
  {
    title: 'Contact',
    url: '/page/Contact',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  }
];
//  {
//  title: 'Portfolio',
//  url: '/page/Portfolio',
//  iosIcon: folderOpen,
//  mdIcon: folderOpenSharp
//},
//{
//  title: 'Art Gallery',
//  url: '/page/Art Gallery',
//  iosIcon: brush,
//  mdIcon: brushSharp
//},

const labels = ['About', 'Experience', 'Contact' ]; //'Portfolio', 'Art Gallery', 

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonItem className="avatar">
            <IonListHeader>Parker Brailow</IonListHeader>
              <IonAvatar slot="end">
                <img alt="Parker Brailow" src="/assets/linkedinPic.jpeg" />
              </IonAvatar>
          </IonItem>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
