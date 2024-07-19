import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner/PageBanner";
import Link from "next/link";
import React, { FC } from "react";
import type { Metadata } from "next";

interface IProps {}

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.adaired.com/terms-and-conditions",
  },
  robots:{
    index:true,
    follow:true
},
};
const Terms: FC<IProps> = (props) => {
  return (
    <>
      <PageBanner title="Terms and Conditions" />
      <MaxWidthWrapper className="py-10 lg:py-16 ">
        <div className="space-y-6">
          <p>
            AdAired Digital Media deals with its clients in the most
            professional way considering the terms & conditions that are
            mentioned below.
          </p>

          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl">The Contract</h3>
            <ul>
              <li>
                There will be an independent contractor relationship between the
                client and AdAired Digital Media. No partnership or joint
                venture will be intended and implied by either party.
              </li>
              <li>
                Both the parties have to agree on the date of commencement of
                the services and the charges for the same will be applicable
                according to the date.
              </li>
              <li>
                A bi-weekly report of the performance of the service will be
                sent to the client.
              </li>
              <li>
                Either pay cannot cancel or transfer the service to some other
                service provider without prior notice of minimum 10 business
                days.
              </li>
              <li>
                AdAired Digital Media has the right to outsource a third party
                service providers in order to fulfil the demands of some service
                tasks.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl">Payment</h3>
            <ul>
              <li>
                In case clients avail any monthly service package of any service
                of AdAired Digital Media then they would have to pay a complete
                chargeable amount before the commencement of the service.
              </li>
              <li>
                AdAired shall inform the clients prior to the date of monthly
                service package payment.
              </li>
              <li>
                If the payment of the service is not made on the said date,
                AdAired Digital Media shall terminate the requested services
                immediately. Also, we will not give the flexibility of 10 days’
                notice.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl">Liability</h3>
            <ul>
              <li>
                The liability for any kind of indirect or subsequential losses
                due to any delay in the delivery of obligated services will not
                be borne by AdAired Digital Media, in case if the
                procrastination has been due to causes that have originated from
                natural reasons or causes that could not be controlled.
              </li>
              <li>
                AdAired Digital Media cannot be held responsible and accountable
                for any activity that goes against the interests of the company.
                All the clients of the company would render and hold the firm
                without any charges and claims, liabilities, and expenses
                related to all the services given by AdAired Digital Media to
                its clients under this very agreement, which is inclusive of the
                not the limitation claims formed by the third parties that are
                related to any kind of falsified advertising claims, the
                liability claims of all the products and services being sold by
                the client, patent claims, infringement of copyright or
                trademark, professes made because of disruption or
                malfunctioning of the provided services or for any kind of
                content submitted by you for publication by AdAired Digital
                Media
              </li>
              <li>
                The nature of the digital media industry is such that the
                information that is given to the firm by its clients will get
                access by the public as soon as the publication is put out.
                AdAired Digital Media cannot be termed accountable to screen the
                material or any damages suffered or losses and reduction of any
                kind of profits, losses, goodwill, or business asset because of
                the published content nature.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl">Waiver</h3>
            <ul>
              <li>
                This needs to be remembered that by chance if a time comes in
                the due course of the tenure of a service contract that we are
                not as successful to be insisting upon the utmost diligent
                performance and adherence to any of the obligations meant to be
                followed by you under the contract or any of the aforementioned
                terms and conditions, then, in that case, it should not result
                in your freedom from abiding them and will definitely not be
                reflective of a waiver for any time in the future.
              </li>
              <li>
                In case there has to be any kind of waiver for any terms and
                conditions, those will only be understood to be valid officially
                only in the condition if they are communicated to you in a
                written manner in an official document.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl lg:text-3xl">Privacy Rights</h3>
            <ul>
              <li>
                All the pieces of information such as name, email, contact
                number, website URL provided by the clients through the contact
                form will be kept confidential. We don’t expose any information
                to a third party without the content of clients. However, the
                employees of AdAired Digital Media will be given the information
                of the clients in order to complete the service tasks.
              </li>
              <li>
                AdAired Digital Media doesn’t guarantee any security regarding
                the transfer of data over the internet which is inherently
                insecure.
              </li>
              <li>
                SSL encrypted technology is used by AdAired Digital Media for
                making any kind of financial transaction because it ensures
                maximum security against any cybercrime.
              </li>
              <li>
                The website of AdAired Digital Media may use Cookies to gather
                some important data about the browsing pattern of the visitor
                for better website optimization and user experience. Some
                third-party advertisers who are promoting their products or
                services on the website of AdAired Digital Media may also use
                cookies to gather statistical information about the traffic of
                the website. Cookies don’t give access to the personal
                information of the visitor to us or any third-party entity.
              </li>
              <li>
                Know more about our{" "}
                <Link href="/privacy-policy" className="text-blue-600/100">
                  <strong>Privacy Policy</strong>
                </Link>
              </li>
              <li>
                AdAired Digital Media has the right to amend the above-mentioned
                terms and conditions at any time. We can bring change to the T&C
                to the time of an ongoing contract. However, any change made
                will be brought to the client through us.
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Terms;
