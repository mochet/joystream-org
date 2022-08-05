import React from 'react';
import Plx from 'react-plx';

import { ArrowButton } from '../../ArrowButton';

import PayoutsBackgroundImage from '../../../assets/images/landing/payouts-background.png';
import PayoutsForeground from '../../../assets/images/landing/payouts-foreground.png';
import { ReactComponent as YoutubeLogo } from '../../../assets/svg/landing/youtube-logo.svg';
import { ReactComponent as ConnectionIcon } from '../../../assets/svg/landing/connection-icon.svg';
import { ReactComponent as JoystreamLogo } from '../../../assets/svg/logo-mark.svg';

import './style.scss';

const parallaxDataBackground = [
  {
    start: 0,
    end: 1400,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1400,
    end: 1700,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1700,
    end: 2200,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 0,
        endValue: -50,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const parallaxDataForeground = [
  {
    start: 0,
    end: 1400,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 550,
        endValue: 280,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1400,
    end: 1700,
    properties: [
      {
        startValue: 280,
        endValue: 280,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1700,
    end: 2200,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 280,
        endValue: 200,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const Payouts = ({ t }) => {
  return (
    <div className="IndexPage__payouts-wrapper">
      <div className="IndexPage__payouts">
        <section className="IndexPage__payouts__content">
          <div className="IndexPage__payouts__content__section-title">{t("landing.payouts.sectionTitle")}</div>
          <h2 className="IndexPage__payouts__content__title">{t("landing.payouts.title")}</h2>
          <p className="IndexPage__payouts__content__subtitle">{t("landing.payouts.subtitle")}</p>
        </section>
        <div className="IndexPage__payouts__illustration">
          <Plx parallaxData={parallaxDataBackground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsBackgroundImage}
              className="IndexPage__payouts__illustration__background"
              alt="my payments tab in atlas studio"
            />
          </Plx>
          <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsForeground}
              className="IndexPage__payouts__illustration__foreground"
              alt="claim payout popup, in front of the my payments tab"
            />
          </Plx>
        </div>
      </div>
      {/* <div className="IndexPage__payouts-cta">
        <div className="IndexPage__payouts-cta__content">
          <div className="IndexPage__payouts-cta__content__logos">
            <YoutubeLogo className="IndexPage__payouts-cta__content__logos__youtube" />
            <ConnectionIcon className="IndexPage__payouts-cta__content__logos__connection-icon" />
            <JoystreamLogo className="IndexPage__payouts-cta__content__logos__joystream" />
          </div>
          <p className="IndexPage__payouts-cta__content__title">
            Have a YouTube channel already? <br />
            Reupload your videos to receive a guaranteed payout in the YouTube Partner Program.
          </p>
        </div>
        <ArrowButton
          link="#"
          className="IndexPage__payouts-cta__link"
          text="Learn more"
          textClassname="IndexPage__payouts-cta__link-text"
        />
      </div> */}
    </div>
  );
};

export default Payouts;