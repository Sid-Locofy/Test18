import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesForm from "../components/WeeklyUpdatesForm";
import styles from "./Homepage.module.css";
const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <WeeklyUpdatesForm
        imageDimensions="/subscribe-section-background@2x.png"
        imageIds="/logo2.svg"
        smallImageDimensions="/social-icons2.svg"
      />
    </div>
  );
};

export default Homepage;
