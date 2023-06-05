import { FunctionComponent } from "react";
import WeeklyUpdatesForm from "./WeeklyUpdatesForm";
import styles from "./NewsletterContainer.module.css";
const NewsletterContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <WeeklyUpdatesForm
        imageDimensions="/newsletter-section-background1@2x.png"
        imageIds="/logo1.svg"
        smallImageDimensions="/social-icons1.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
