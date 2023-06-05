import { FunctionComponent } from "react";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesForm from "../components/WeeklyUpdatesForm";
import styles from "./HotelsPage.module.css";
const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <WeeklyUpdatesForm
        imageDimensions="/newsletter-section-background@2x.png"
        imageIds="/logo.svg"
        smallImageDimensions="/social-icons.svg"
      />
    </div>
  );
};

export default HotelsPage;
