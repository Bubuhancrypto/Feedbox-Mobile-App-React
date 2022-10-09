import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rifki Nugraha | Knowledge Seeker</title>
        <meta
          name="description"
          content="I am a Business Consultant. A Business Advisor. An Entrepreneur. An Entrepreneur and Consultant. Success Coach. Life Coach. Mentor. Consultant."
        />
        <meta property="og:title" content="Rifki Nugraha | Knowledge Seeker" />
        <meta
          property="og:description"
          content="I am a Business Consultant. A Business Advisor. An Entrepreneur. An Entrepreneur and Consultant. Success Coach. Life Coach. Mentor. Consultant."
        />
      </Helmet>
      <Navbar
        PrimaryBtn="Email Me"
        image_src1="/playground_assets/logo1-1500h.png"
        PrimaryBtn1="Follow Me"
      ></Navbar>
      <main className="home-main">
        <div className="section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span>Hola!</span>
                <br></br>
                <span className="home-text03">I&apos;m Rifki Nugraha</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>superdad</span>
                <span className="home-text06">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>and knowledge seeker</span>
                <br></br>
                <br></br>
              </h1>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/test3-600w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div id="about" className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text10">I&apos;m Specialist Generalist</h2>
            <span className="home-text11">
              I am a generalist, not a specialist. I have a wide range of skills
              and knowledge, and I am not limited to any one area. I am a
              jack-of-all-trades, and I can adapt to any situation. I am not an
              expert in any one thing, but I am proficient in many things. I am
              a versatile and resourceful person, and I can always find a way to
              get the job done.
            </span>
            <div className="home-cards-container">
              <FeatureCard
                text="I love trying new things in life. It's one of the things that keeps me feeling alive and excited about life. I love the feeling of stepping out of my comfort zone and into the unknown."
                image_src="/playground_assets/idea-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="I am a business consultant. I work with businesses to help them improve their operations and bottom line.  I use this knowledge to help my clients overcome challenges and achieve their goals."
                heading="Business consultant"
                image_src="/playground_assets/line-chart-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="Helping companies to automate their business processes is my experience. I have experience with various software applications and tools. I am also experienced in project management."
                text1="Learn more &gt;"
                heading="Read your emails"
                image_src="/playground_assets/cloud-network-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="As a trainer, i helps individuals and organizations develop the skills and capabilities they need to succeed. I work with clients to identify their goals."
                text1="Learn more &gt;"
                heading="Learning &amp; Development"
                image_src="/playground_assets/target-unscreen-200h.gif"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div id="work" className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/33220464-6363287990bc424e1aed161b1c71157b1-1200w.png"
                className="home-image1"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text12 heading2">
                <span>
                  Jawsika Program Creation and Business Branding Kit. 
                </span>
                <span className="home-text14">Complete Package.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text15 heading2">
                <span>
                  The best strategy, Discussed with you.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text17">In the morning.</span>
              </h1>
              <span className="home-text18">
                <span>
                  The best business plans are those that are clear, concise, and
                  to the point. They should lay out the goals of the business
                  and the steps needed to reach those goals. The best business
                  plans also take into account the resources and constraints of
                  the business. They should be realistic and achievable.
                </span>
                <br className="content-Light"></br>
                <br className="content-Light"></br>
              </span>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/screenshot_35-1200w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container3">
              <img
                alt="image"
                src="/playground_assets/2022-10-09%2021-43-24-1200w.gif"
                className="home-image3"
              />
              <img
                alt="image"
                src="/playground_assets/screenshot_371-1200w.png"
                className="home-image4"
              />
            </div>
            <div className="home-content-container3">
              <h1 className="home-text22 heading2">
                <span>
                  I&apos;m all about automating processes to make my life
                  easier!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text24">Always.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-content-container4">
              <h1 className="home-text25 heading2">
                <span>
                  Learning and Development.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text27"></br>
                <span className="home-text28">For world.</span>
              </h1>
              <span className="home-text29">
                <span>
                  As a learning and development trainer, I am responsible for
                  delivering training courses and workshops to employees in
                  order to help them improve their skills and knowledge.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  My job is to create an engaging and effective learning
                  experience for my participants, I am passionate about helping
                  others learn and grow, and I firmly believe that everyone has
                  the potential to reach their goals with the right support.
                </span>
              </span>
            </div>
            <div className="home-image-container4">
              <img
                alt="image"
                src="/playground_assets/learning%20and%20development-1200w.gif"
                className="home-image5"
              />
            </div>
          </div>
        </div>
        <div className="home-section-five section-container">
          <div className="home-max-width6 max-content-container">
            <h2 className="home-text34">
              <span className="home-text35">
                Everyone has unique experiences that shape who they are. 
              </span>
              <span className="home-text36">So do you.</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name2"></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div className="section-container">
          <div id="connect" className="home-max-width7 max-content-container">
            <div className="home-heading-container">
              <h2 className="home-text37 heading2">
                <span>Let&apos;s have some good conversation </span>
                <span className="home-text39">Lets Talk.</span>
              </h2>
              <span>
                <span>We are all connected, let us become connection.</span>
                <br></br>
              </span>
            </div>
            <div className="home-contact-me">
              <a
                href="mailto:hi@rifkinugraha.com?subject="
                className="home-link button"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default Home
