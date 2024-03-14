import React from "react";
import tableStyles from "./Hero.module.css";
import { FaPlus } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import CheckBox from "../utils/CustomCheckBox";

const Hero = () => {
  return (
    <div>
      <section className={tableStyles.tableBody}>
        <table>
          <thead>
            <tr>
              <th width="270.28px"> Brand</th>
              <th width="257px">Description</th>
              <th width="170.28px">Members</th>
              <th width="250.28px">Categories</th>
              <th width="218.88px">Tags</th>
              <th width="122.10px">Next Meeting</th>
              <th width="49.68px">
                <FaPlus />
              </th>
            </tr>
          </thead>
          <tbody>
          {/* Wix Profile */}
            <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/external-others-inmotus-design/67/external-W-qwerty-keypad-others-inmotus-design-3.png"
                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Wix <LuMessagesSquare />
              </td>
              <td><p>Develop a personalized fit...</p></td>
              <td></td>
              <td><h4>Automation</h4></td>
              <td className={tableStyles.hashtag}><p>#DigitalTransformation</p></td>
              <td className={tableStyles.tags}><p>in 30 minutes</p></td>
              <td></td>
            </tr>
                {/* Shopify Profile */}
            <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/bubbles/25/shopify.png"


                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Shopify
              </td>
              <td><p>Introduce a cloud-based p...</p></td>
              <td></td>
              <td><h4>Ecommerce</h4><h5>B2B</h5></td>
              <td className={tableStyles.hashtag}><p>#OnlineShopping</p></td>
              <td className={tableStyles.tags}><p>Tomorrow</p></td>
              <td></td>
            </tr>
                {/* MailChimp Profile */}
                <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/bubbles/25/mailchimp.png"

                  alt="mailchimp"
                />{" "}
                MailChimp
              </td>
              <td><p>Develop a mobile app aim...</p></td>
              <td></td>
              <td><h4>SAAS</h4><h5>Mobile</h5></td>
              <td className={tableStyles.hashtag}><p>#Techinnovation</p></td>
              <td className={tableStyles.tags}><p>Tomorrow</p></td>
              <td></td>
            </tr>
                {/* Paypal Profile */}
                <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/fluency/25/paypal.png"
                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Paypal <LuMessagesSquare />
                7
              </td>
              <td><p>This program could include...</p></td>
              <td></td>
              <td><h4>Marketplace</h4></td>
              <td className={tableStyles.hashtag}><p>#BuySellOnline</p></td>
              <td className={tableStyles.tags}><p>in 6 hours</p></td>
              <td></td>
            </tr>
              {/* Disney Profile */}
              <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/doodle/25/disney-plus.png"

                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Disney
              </td>
              <td><p>Introduce a B2B soluton f...</p></td>
              <td></td>
              <td><h4>B2B</h4><h5>B2C</h5></td>
              <td className={tableStyles.hashtag}><p>#BusinessPartnerships</p></td>
              <td  className={tableStyles.disneytags}><span>No contact</span></td>
              <td></td>
            </tr>
              {/* Intercom Profile */}
              <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ultraviolet/25/pincode-keyboard.png"

                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Intercom <LuMessagesSquare />
                9
              </td>
              <td><p>Implement an AI-driven C...</p></td>
              <td></td>
              <td><h4>Technology</h4><h5>SAAS</h5></td>
              <td className={tableStyles.hashtag}><p>#SmartFinance</p></td>
              <td className={tableStyles.tags}><p>in 30 minutes</p></td>
              <td></td>
            </tr>
             {/* Google Profile */}
             <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/25/google-logo.png"

                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Google <LuMessagesSquare />
                5
              </td>
              <td><p>Offer a comprehensive cy...</p></td>
              <td></td>
              <td><h4>Finance</h4><h5>Automation</h5></td>
              <td className={tableStyles.hashtag}><p>#SmartFinance</p></td>
              <td className={tableStyles.tags}><p>in 30 minutes</p></td>
              <td></td>
            </tr>
            {/*Evernote Profile */}
            <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/25/external-evernote-a-multi-platform-applicaion-for-making-to-do-list-logo-tritone-tal-revivo.png"
                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Evernote
              </td>
              <td><p>This could include smart li...</p></td>
              <td></td>
              <td><h4>Transportaion</h4></td>
              <td className={tableStyles.hashtag}><p>#LogisticsTech</p></td>
              <td className={tableStyles.evermoteTags}><span>Next Month</span></td>
              <td></td>
            </tr>
            {/*Microsoft Profile*/}
            <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/25/microsoft.png"
                  alt="external-W-qwerty-keypad-others-inmotus-design-3"
                />{" "}
                Microsoft <LuMessagesSquare /> 7
              </td>
              <td><p>Launch an advisory servic...</p></td>
              <td></td>
              <td><h4>Publishing</h4><h5>B2C</h5></td>
              <td className={tableStyles.hashtag}><p>#B2CMarketing</p></td>
              <td className={tableStyles.disneytags}><span>No Contact</span></td>
              <td></td>
            </tr>
            {/*Invision Profile*/}
            <tr className={tableStyles.brand}>
              <td>
                <CheckBox />
                <img
                  width="25"
                  height="25"
                  
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-invision-is-the-digital-product-design-platform-logo-color-tal-revivo.png"
                   alt="external-invision-is-the-digital-product-design-platform-logo-color-tal-revivo"/>
                {" "}
                  Invision
              </td>
              <td><p>The tool would analyze tre...</p></td>
              <td></td>
              <td><h4>WebServices</h4></td>
              <td className={tableStyles.hashtag}><p>#APIintegration</p></td>
              <td className={tableStyles.evermoteTags}><span>Next month</span></td>
              <td></td>
            </tr>
                 {/*Total Count*/}
                 <tr className={tableStyles.brand}>
              <td>
               10 Count
              </td>
              <td><p>+ Add calculation</p></td>
              <td><p>+ Add calculation</p></td>
              <td><p>+ Add calculation</p></td>
              <td><p>+ Add calculation</p></td>
              <td ></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Hero;
