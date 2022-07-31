import Topnav from "./Topnav";
import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from './Footer'

export default function Privacy() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
          {/* https://korbanstudio.com/privacy-policy/ */}
            <Row id="privacytitle">Privacy Policy</Row>
            <Row className="justify-content-md-center" id="privacybody">
              <br/>
              Last Updated: September 12, 2019
              <br />
              <br />
              Kings Designing ('we', 'our', 'us') respect the privacy rights of its
              online visitors ('you', 'your', 'yours') and recognize the
              importance of protecting the information collected about them. We
              provide this statement (the “Privacy Policy”) to help you to
              understand what we may do with any personal information that we
              obtain from you. This Privacy Policy guides how we collect, store,
              and use the information that you provide us with.
              <br />
              <br />
              By providing your personal information to us, you signify your
              acceptance of this Privacy Policy and agree that we may collect,
              use, and disclose your personal information as described in this
              Privacy Policy. This Privacy Policy is incorporated into, and part
              of, the Terms and Conditions which govern your use of the website
              maintained and operated by www.korbanstudio.com (the “Site”). We
              will use your information only for the purposes set out below.
              <br />
              <br />
              Please exit the Site immediately if you do not accept this Privacy
              Policy or are accessing the Site in a country or other territory
              where use of the Site is not permitted.
              <br />
              <br />
              We may need to update this Privacy Policy from time to time. We
              recommend that you regularly check this page to ensure that you
              have read the most recent version.
              <br />
              <br />
              LEGAL PURCHASE AGE
              <br />
              <br />
              If you are under 18, we require that you inform a parent or
              guardian about our Privacy Policy and Terms and Conditions as well
              as requiring their consent to the Privacy Policy and Terms and
              Conditions before registering or placing and order with us.
              <br />
              <br />
              WHAT PERSONAL INFORMATION DO WE COLLECT FROM YOU AND HOW?
              <br />
              <br />
              We collect personal information in several ways when you place an
              order or register for a service offered by us. If an order is
              placed with us, we need to hold personal information including
              your name, email address, phone numbers, home address, shipping
              and credit/debit card billing address(es) so that we can process
              and fulfill your order. This information will never be shared with
              third parties and will only be used to process your order, using
              our payment partner's systems with Stripe.
              <br />
              <br />
              HOW PERSONAL INFORMATION MAY BE USED, INCLUDING ANYONE IT MIGHT BE
              SHARED WITH
              <br />
              <br />
              We may use your personal information for the processing of orders,
              payments and to provide you with a personalized shopping
              experience. We will also use your details to fulfill and deliver
              your orders and manage your account. Personal Information that you
              provide may be disclosed to a credit reference or fraud prevention
              agency, which may keep a record of that information.
              <br />
              <br />
              You will be offered the opportunity to opt out of our email
              newsletter and other update services. If you choose to opt-out for
              this service, we will not send you alerts for new products,
              features or enhancements.
              <br />
              <br />
              USE OF COOKIES ON OUR WEBSITE
              <br />
              <br />
              In common with many websites, we use “cookies” to help us gather
              and store information about visitors to our Site. A cookie is a
              small data file that our server sends to your browser when you
              visit the Site. The use of cookies helps us to assist your use of
              certain aspects of the Site. You can delete cookies at any time or
              you can set your browser to reject or disable cookies. Unless you
              have adjusted your browser setting so that it will refuse cookies,
              our system will issue cookies when you log on to the Site.
              <br />
              <br />
              We may use information from cookies for the following purposes:
              <br />
              <br />
              Traffic monitoring, for example, the IP address from which you
              access the Site, the type of browser and operating system used to
              access the site, the date and time of your access to the site, the
              pages you visit, and the Internet address of the website from
              which you accessed our Site; To recognize repeat visitors for
              statistical/analytical purposes; or Anonymous tracking of
              interaction with online advertising, for example, to monitor the
              number of times that a banner ad is displayed and the number of
              times it is clicked.
              <br />
              <br />
              We may connect the information that we collect through cookies
              with other Personal Information that you provide to us. Such
              purposes are:
              <br />
              <br />
              To customize or personalize your experience of the Site; for
              example, so that we can greet you on the site by name; For
              transactional purposes, such as credit/debit card sales; or To
              monitor your use of the Site in order to make our communications
              with you as relevant as possible; for example, by sending you
              email communications relevant to the parts of the Site that you
              visit most often or by letting you know about features of the Site
              that you have not accessed previously.
              <br />
              <br />
              We may compile and report to third parties (such as advertisers)
              aggregate statistics about our users in terms of numbers, traffic
              patterns and related site information. If you choose not to
              receive cookies, you may still use most of the features of our
              website, including the ability to purchase items.
              <br />
              <br />
              OPT-IN AND OPT-OUT PROVISION
              <br />
              <br />
              When you place a purchase, you will be given the option to opt-out
              of subscribing to our newsletter.
              <br />
              <br />
              At all times, we will offer you the opportunity to opt-out of any
              service to which you have subscribed. Any email we send you will
              contain an easy automated opt-out link. Simply follow the
              instructions in the email or send an email to kingsdesigning@gmail.com
              and put “UNSUBSCRIBE” in the subject line.
              <br />
              <br />
              HOW YOU CAN ACCESS AND, IF NECESSARY, CHANGE THE PERSONAL
              INFORMATION WE MAINTAIN
              <br />
              <br />
              If for any reason you are concerned that the personal information
              held by us is not correct, please contact us at
              kingsdesigning@gmail.com.
              <br />
              <br />
              YOUR CONSENT
              <br />
              <br />
              By visiting www.kingsdesigning.netlify.app, you are accepting and consenting
              to the practices described in this Privacy Policy.
            </Row>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row id="privacymid"></Row>
        <Row>
            <Footer/>
        </Row>
      </Container>
    </>
  );
}
