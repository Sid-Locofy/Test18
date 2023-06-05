import { FunctionComponent } from "react";
import TripContainer from "./TripContainer";
import styles from "./PopularDestinationsContainer.module.css";
const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <TripContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <TripContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="99.92px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <TripContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <TripContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="100.62px"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
