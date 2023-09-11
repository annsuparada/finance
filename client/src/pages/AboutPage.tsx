import React from 'react'
import Divider from '../components/atom/Divider'
import MainWrapper from '../components/atom/MainWrapper'

const AboutPage: React.FC = () => {
  return (
    <MainWrapper>
      <Divider text="About Us" />
      <h2>Empowering Financial Choices, One Click at a Time</h2>
      <p>
        Welcome to FINANCE SOMETING, your trusted source for expert financial
        insights and recommendations. We are passionate about helping
        individuals make informed financial decisions, no matter their financial
        goals or expertise.
      </p>
      <h3>Our Mission</h3>
      <p>
        At FINANCE SOMETING, our mission is simple: to empower you to take
        control of your financial future. We understand that navigating the
        world of personal finance can be overwhelming. That's why we're here to
        provide you with clear, unbiased, and actionable information to help you
        make the best choices for your unique financial journey.
      </p>
      <h3>What Sets Us Apart</h3>
      <ul>
        <li>
          <b>Expert Guidance:</b> Our team of financial experts is dedicated to
          delivering trustworthy and well-researched content. We stay up-to-date
          with the latest financial trends, products, and services to provide
          you with the most relevant information.
        </li>
        <li>
          <b>Independence:</b> We take pride in our independence. Our
          recommendations are not influenced by financial institutions or
          advertisers. We are committed to providing honest, impartial advice.
        </li>
        <li>
          <b>User-Friendly Approach:</b> Finance doesn't have to be complicated.
          We break down complex topics into easy-to-understand articles, guides,
          and reviews, making it accessible to everyone.
        </li>
        <li>
          <b>Community:</b> We believe in the power of community. Join our
          growing community of financial enthusiasts, where you can share
          experiences, ask questions, and learn from one another.
        </li>
      </ul>

      <h3>Our Promise</h3>
      <p>We promise to deliver:</p>
      <ul>
        <li>
          <b>Educational Content:</b>Explore a wealth of educational articles,
          resources, and tools to enhance your financial knowledge.
        </li>
        <li>
          <b>Unbiased Reviews:</b>Read unbiased reviews of financial products
          and services to help you make informed choices.
        </li>
        <li>
          <b>Timely Updates:</b>Stay informed about the latest developments in
          the financial world through our regularly updated content.
        </li>
      </ul>
      <p>
        Thank you for choosing FINANCE SOMETING as your trusted financial
        resource. We look forward to being a part of your financial success
        story.
      </p>
    </MainWrapper>
  )
}

export default AboutPage
