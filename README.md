# cookie-consent-banner-training

Cookie Consent Training based on
[Cookie Consent](https://github.com/orestbida/cookieconsent)

## **Guide to use in Wordpress**
---

[Demo Wordpress site](https://cookies-demo.datayolk.net/)

- Install Plugin
  [Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/)
- Use the below code in HTML tag <details>
  <summary>Scripts in Header</summary>
  
  <!-- 1. START Styling Cookie | cookieconsent.css -->
  <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css"
          />
  <!-- 1. END Styling Cookie | cookieconsent.css -->

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap"
            rel="stylesheet"
          />

          <style>
            .cc_div {
              font-family: 'Mitr', sans-serif;
            }
          </style>

    </details>

    <details>
    <summary>Scripts in Footer</summary>
  
  <!-- 2. START Reconsent Button -->
      <button
        data-cc="c-settings"
        class="cc-link cc-reconsent"
        style="
          position: fixed;
          left: 8px;
          bottom: 16px;
          border-radius: 999px;
          padding: 4px;
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          box-shadow: rgb(204 204 204 / 50%) 0 2px
            10px 0;
          border: 1px solid #e8e8e8;
          background-color: #fff;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0a0b0c"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
          ></path>
          <path d="M8.5 8.5v.01"></path>
          <path d="M16 15.5v.01"></path>
          <path d="M12 12v.01"></path>
          <path d="M11 17v.01"></path>
          <path d="M7 14v.01"></path>
        </svg>
      </button>
      <!-- 2. END Reconsent Button -->

      <!-- 3. START CookieConsent | cookieconsent.js -->
      <script
        defer
        src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js"
      ></script>
      <!-- 3. END CookieConsent | cookieconsent.js -->

      <!-- 4. START CookieConsent Customization  | consent-init.js -->
      <script defer>
        window.addEventListener(
          'load',
          function () {
            // obtain plugin
            var cc = initCookieConsent();

            // run plugin with your configuration
            // example please see: https://orestbida.com/demo-projects/cookieconsent/
            cc.run({
              current_lang: 'th',
              autoclear_cookies: true, // default: false
              page_scripts: true, // default: false
              gui_options: {
                consent_modal: {
                  layout: 'cloud', // box/cloud/bar
                  position: 'bottom center', // bottom/middle/top + left/right/center
                  transition: 'slide', // zoom/slide
                  swap_buttons: false, // enable to invert buttons
                },
                settings_modal: {
                  layout: 'box', // box/bar
                  position: 'left', // left/right
                  transition: 'slide', // zoom/slide
                },
              },

              onFirstAction: function (
                user_preferences,
                cookie,
              ) {
                // callback triggered only once
                typeof window.setJsonCookie ===
                  'function' &&
                  window.setJsonCookie();
              },

              onAccept: function (cookie) {
                // START OnAccept
                if (
                  !cc.allowedCategory('analytics')
                ) {
                  document.cookie = `_ga_0JGXXQLT3H=; path=/; domain=${
                    location.hostname
                  }; expires=' + ${new Date(
                    0,
                  ).toUTCString()}`;
                  document.cookie = `_ga=; path=/; domain=${
                    location.hostname
                  }; expires=' + ${new Date(
                    0,
                  ).toUTCString()}`;
                }
                // END OnAccept

                typeof window.setJsonCookie ===
                  'function' &&
                  window.setJsonCookie();
              },

              onChange: function (
                cookie,
                changed_preferences,
              ) {
                // ...

                // START OnChange
                if (
                  !cc.allowedCategory('analytics')
                ) {
                  sessionStorage.removeItem(
                    '_ga_0JGXXQLT3H',
                  );
                  sessionStorage.removeItem('^_ga');
                }
                // END OnChange

                typeof window.setJsonCookie ===
                  'function' &&
                  window.setJsonCookie();
              },

              languages: {
                th: {
                  consent_modal: {
                    title: 'เว็บไซต์นี้ใช้ Cookie',
                    description:
                      'เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก "การตั้งค่าคุกกี้"  <button type="button" data-cc="c-settings" class="cc-link">การตั้งค่าคุกกี้</button>',
                    primary_btn: {
                      text: 'ยอมรับทั้งหมด',
                      role: 'accept_all', // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                      text: 'ปฏิเสธทั้งหมด',
                      role: 'accept_necessary', // 'settings' or 'accept_necessary'
                    },
                  },
                  settings_modal: {
                    title:
                      'การตั้งค่าความเป็นส่วนตัว',
                    save_settings_btn:
                      'ยืนยันตัวเลือกของฉัน',
                    accept_all_btn: 'ยอมรับทั้งหมด',
                    reject_all_btn: 'ปฏิเสธทั้งหมด',
                    close_btn_label: 'ปิด',
                    cookie_table_headers: [
                      { col1: 'Name' },
                      { col2: 'Domain' },
                      { col3: 'Expiration' },
                      { col4: 'Description' },
                    ],
                    blocks: [
                      {
                        title:
                          'คุ้กกี้ที่ใช้ในเว็บไซต์ 📢',
                        description:
                          'เว็บไซต์นี้มีการใช้คุกกี้เพื่อการปรับปรุงการใช้บริการออนไลน์ของท่าน โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์. คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่ <a href="/privacy-policy" target="_blank" rel=”noopener noreferrer” class="cc-link">Privacy Policy</a>.',
                      },
                      {
                        title:
                          'คุกกี้พื้นฐานที่จำเป็น',
                        description:
                          'คุกกี้พื้นฐานที่จำเป็น เพื่อช่วยให้การทำงานหลักของเว็บไซต์ใช้งานได้ รวมถึงการเข้าถึงพื้นที่ที่ปลอดภัยต่าง ๆ ของเว็บไซต์ หากไม่มีคุกกี้นี้เว็บไซต์จะไม่สามารถทำงานได้อย่างเหมาะสม และจะใช้งานได้โดยการตั้งค่าเริ่มต้น โดยไม่สามารถปิดการใช้งานได้',
                        toggle: {
                          value: 'necessary',
                          enabled: true,
                          readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [
                          // list of all expected cookies
                          {
                            col1: '^_ga', // match all cookies starting with "_ga"
                            col2: 'google.com',
                            col3: '2 years',
                            col4: `description ...`,
                            is_regex: true,
                          },
                        ],
                      },
                      {
                        title:
                          'คุกกี้ในส่วนวิเคราะห์',
                        description:
                          'คุกกี้ในส่วนวิเคราะห์ จะช่วยให้เว็บไซต์เข้าใจรูปแบบการใช้งานของผู้เข้าชมและจะช่วยปรับปรุงประสบการณ์การใช้งาน โดยการเก็บรวบรวมข้อมูลและรายงานผลการใช้งานของผู้ใช้งาน ',
                        toggle: {
                          value: 'analytics', // your cookie category
                          enabled: false,
                          readonly: false,
                        },
                        cookie_table: [
                          // list of all expected cookies
                          {
                            col1: '_ga', // match all cookies starting with "_ga"
                            col2: '.thematter.co',
                            col3: '2 years',
                            col4: `The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.`,
                            is_regex: true,
                          },
                          {
                            col1: '_gid',
                            col2: '.thematter.co',
                            col3: '1 day',
                            col4: `Installed by Google Analytics, _gid cookie stores information on how visitors use a website, while also creating an analytics report of the website's performance. Some of the data that are collected include the number of visitors, their source, and the pages they visit anonymously.`,
                          },
                          {
                            col1: '_ga_0JGXXQLT3H',
                            col2: '.thematter.co',
                            col3: '1 minute',
                            col4: `A variation of the _gat cookie set by Google Analytics and Google Tag Manager to allow website owners to track visitor behaviour and measure site performance. The pattern element in the name contains the unique identity number of the account or website it relates to.`,
                          },
                        ],
                      },
                      {
                        title:
                          'คุกกี้ในส่วนการตลาด',
                        description:
                          'คุกกี้ในส่วนการตลาด ใช้เพื่อติดตามพฤติกรรมผู้เข้าชมเว็บไซต์เพื่อแสดงโฆษณาที่เหมาะสมสำหรับผู้ใช้งานแต่ละรายและเพื่อเพิ่มประสิทธิผลการโฆษณาสำหรับผู้เผยแพร่และผู้โฆษณาสำหรับบุคคลที่สาม',
                        toggle: {
                          value: 'marketing',
                          enabled: false,
                          readonly: false,
                        },
                      },
                      {
                        title:
                          'รายละเอียดเพิ่มเติม',
                        description: `หากท่านมีปัญหาข้อสงสัยโปรดติดต่อเราที่ <a target="_blank" rel=”noopener noreferrer” class="cc-link" href="/privacy-policy">ติดต่อเรา</a>.`,
                      },
                    ],
                  },
                },
              },
            });
          },
        );
      </script>
      <!-- 4. END CookieConsent Customization  | consent-init.js -->

      <!-- 5. START Script Blocking Analytics -->
      <script
        async
        type="text/plain"
        data-cookiecategory="analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-0JGXXQLT3H"
      ></script>

      <script
        type="text/plain"
        data-cookiecategory="analytics"
      >
        console.log('"analytics" category accepted');
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-0JGXXQLT3H');
      </script>
      <!-- 5. END Script Blocking Analytics -->

  </details>
