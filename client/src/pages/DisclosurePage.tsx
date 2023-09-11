import React from 'react'
import Divider from '../components/atom/Divider'
import MainWrapper from '../components/atom/MainWrapper'

const DisclosurePage: React.FC = () => {
  return (
    <MainWrapper>
      <Divider text="Affiliate Disclosure" />
      <h5>Last Updated: Semtember, 11 2022</h5>
      <p>
        This website participates in affiliate marketing programs, which means
        we may earn commissions on editorially chosen products or services
        purchased through our affiliate links to retailer sites. Our content is
        provided for informational purposes, and these partnerships allow us to
        keep delivering quality content to you at no cost.{' '}
      </p>

      <h3>How Affiliate Marketing Works</h3>
      <p>
        When you click on an affiliate link within our content, a tracking
        cookie is placed in your web browser. If you make a purchase from the
        affiliate partner's website within a certain timeframe, we may earn a
        commission. The purchase price you pay for products or services is not
        affected by these affiliate links.
      </p>

      <h3>Transparency and Impartiality</h3>
      <p>
        {' '}
        We prioritize transparency and objectivity in all our content. Our
        reviews, recommendations, and articles are independently researched and
        written by our team of experts. We do not allow affiliate partnerships
        to influence our editorial opinions or the information we provide.{' '}
      </p>

      <h3>Affiliate Partnerships</h3>
      <p>
        Our website may have affiliate partnerships with various companies and
        brands in the finance and related industries.{' '}
      </p>

      <h3>Your Support Matters</h3>
      <p>
        By clicking on our affiliate links and making a purchase, you are
        supporting our work and helping us continue to provide valuable
        information and resources to our readers. We are grateful for your
        support.{' '}
      </p>

      <h3>Reader Benefits</h3>
      <p>
        Our affiliate partnerships often allow us to offer special discounts,
        promotions, or exclusive offers to our readers. We carefully select
        these offers to provide you with added value.{' '}
      </p>

      <h3>Disclaimer</h3>
      <p>
        The information provided on this website is for educational and
        informational purposes only. It should not be considered financial or
        investment advice. Please conduct your own research and consult with a
        qualified professional before making financial decisions.{' '}
      </p>
    </MainWrapper>
  )
}

export default DisclosurePage
