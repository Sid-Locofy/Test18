import { FunctionComponent, useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import CSS, { Property } from "csstype";
import styles from "./HotelCardForm.module.css";

type HotelCardFormType = {
  hotelImageUrl?: string;
  hotelName?: string;
  hotelPrice?: string;
  hotelReviews?: string;
  hotelRating?: string;
  hotelReviewCount?: string;
  hotelRatingText?: string;
  hotelDimensions?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propWidth?: Property.Width;
  propRight?: Property.Right;
};

const HotelCardForm: FunctionComponent<HotelCardFormType> = ({
  hotelImageUrl,
  hotelName,
  hotelPrice,
  hotelReviews,
  hotelRating,
  hotelReviewCount,
  hotelRatingText,
  hotelDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard1}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            alt=""
            src={hotelImageUrl}
          />
          <div className={styles.stayDetails} style={stayDetailsStyle}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>{hotelName}</div>
              <b className={styles.matterhornSuites}>{hotelPrice}</b>
              <div className={styles.night}>{hotelReviews}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src={hotelRating}
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews}>{hotelReviewCount}</div>
            <div className={styles.parent}>
              <div className={styles.div}>{hotelRatingText}</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src={hotelDimensions}
                style={vectorIconStyle}
              />
            </div>
          </div>
          <button className={styles.moreDetailsButton}>
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCardForm;
