import React from 'react';
import style from "./privacyPolicy.module.css"


const PrivacyPolicy = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <p className={style.title}>Personal information we collect</p>
                <p className={style.description}>When you visit the Site, we automatically collect certain information about your device, including
                    information about your web browser, IP address, time zone, and some of the cookies that are
                    installed on your device. Additionally, as you browse the Site, we collect information about the
                    individual web pages or products that you view, what websites or search terms referred you to the
                    Site, and information about how you interact with the Site. We refer to this automatically-collected
                    information as "Device Information".

                    We collect Device Information using the following technologies:

                    "Cookies" are data files that are placed on your device or computer and often include an anonymous
                    unique identifier. For more information about cookies, and how to disable cookies, visit
                    "Log files", and User Accounts, track actions occurring on the Site, and collect data including your
                    IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                    "Web beacons", "tags", and "pixels" are electronic files used to record information about how you
                    browse the Site.
                    Additionally when you make a purchase or attempt to make a purchase through the Site, we collect
                    certain information from you, including your name, billing address, shipping address, payment
                    information (including credit card numbers, email address, and phone number. We refer to this
                    information as "Order Information".</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Personal User Information</p>
                <p className={style.description}>When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device
                    Information and Order Information.

                    How do we use your personal information?

                    We use the Order Information that we collect generally to fulfill any orders placed through the Site
                    (including processing your payment information, arranging for shipping, and providing you with
                    invoices and/or order confirmations). Additionally, we use this Order Information to:

                    Communicate with you;
                    Screen our orders for potential risk or fraud; and
                    When in line with the preferences you have shared with us, provide you with information or
                    advertising relating to our products or services.
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in
                    particular, your IP address), and more generally to improve and optimize our Site (for example, by
                    generating analytics about how our customers browse and interact with the Site, and to assess the
                    success of our marketing and advertising campaigns).

                    We use your account information that we collect generally to generate statistics for you, and
                    provide personalized roadmaps. Additionally, we use this information to:

                    Communicate with you;
                    When in line with the preferences you have shared with us, provide you with information or
                    advertising relating to our products or services.</p>
            </div>
            <div className={style.container}>
                <p className={style.title}>Your rights</p>
                <p className={style.description}>If you are a European resident, you have the right to access personal information we hold about you
                    and to ask that your personal information be corrected, updated, or deleted. If you would like to
                    exercise this right, please contact us through the contact information below.

                    Additionally, if you are a European resident we note that we are processing your information in
                    order to fulfill contracts we might have with you (for example if you make an order through the
                    Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please
                    note that your information will be transferred outside of Europe, including to Canada and the United
                    States.</p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;