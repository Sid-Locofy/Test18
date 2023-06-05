import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardForm from "./HotelCardForm";
import styles from "./PopularStaysContainer.module.css";
const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardForm
          hotelImageUrl="/unsplashrlwe8f8anoc@2x.png"
          hotelName="Entire bungalow"
          hotelPrice="Matterhorn Suites"
          hotelReviews="$575/night"
          hotelRating="/video2.svg"
          hotelReviewCount="(60 reviews)"
          hotelRatingText="4.9"
          hotelDimensions="/vector7.svg"
        />
        <HotelCardForm
          hotelImageUrl="/unsplashtsn8bpopveo@2x.png"
          hotelName="2-Story beachfront suite"
          hotelPrice="Discovery Shores"
          hotelReviews="$360/night"
          hotelRating="/video3.svg"
          hotelReviewCount="(116 reviews)"
          hotelRatingText="4.8"
          hotelDimensions="/vector8.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardForm
          hotelImageUrl="/unsplashrlwe8f8anoc1@2x.png"
          hotelName="Single deluxe hut"
          hotelPrice="Arctic Hut "
          hotelReviews="$420/night"
          hotelRating="/video3.svg"
          hotelReviewCount="(78 reviews)"
          hotelRatingText="4.7"
          hotelDimensions="/vector9.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm
          hotelImageUrl="/unsplashyqrybvxug5q@2x.png"
          hotelName="Deluxe King Room"
          hotelPrice="Lake Louise Inn"
          hotelReviews="$244/night"
          hotelRating="/video2.svg"
          hotelReviewCount="(63 reviews)"
          hotelRatingText="4.6"
          hotelDimensions="/vector10.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
