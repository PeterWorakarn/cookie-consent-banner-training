// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
// example please see: https://orestbida.com/demo-projects/cookieconsent/
cc.run({
  current_lang: 'th',
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: false,                  // default: false
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  gui_options: {
    consent_modal: {
      layout: 'box', // box/cloud/bar
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
    typeof window.setJsonCookie === 'function' &&
      window.setJsonCookie();
  },

  onAccept: function (cookie) {
    // START OnAccept

    // END OnAccept

    typeof window.setJsonCookie === 'function' &&
      window.setJsonCookie();
  },

  onChange: function (
    cookie,
    changed_preferences,
  ) {
    // ...

    // START OnChange

    // END OnChange

    typeof window.setJsonCookie === 'function' &&
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
        title: 'การตั้งค่าความเป็นส่วนตัว',
        save_settings_btn: 'ยืนยันตัวเลือกของฉัน',
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
            title: 'คุ้กกี้ที่ใช้ในเว็บไซต์ 📢',
            description:
              'เว็บไซต์นี้มีการใช้คุกกี้เพื่อการปรับปรุงการใช้บริการออนไลน์ของท่าน โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์. คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่ <a href="https://google.com" target="_blank" rel=”noopener noreferrer” class="cc-link">Privacy Policy</a>.',
          },
          {
            title: 'คุกกี้พื้นฐานที่จำเป็น',
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
            title: 'คุกกี้ในส่วนวิเคราะห์',
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
            title: 'คุกกี้ในส่วนการตลาด',
            description:
              'คุกกี้ในส่วนการตลาด ใช้เพื่อติดตามพฤติกรรมผู้เข้าชมเว็บไซต์เพื่อแสดงโฆษณาที่เหมาะสมสำหรับผู้ใช้งานแต่ละรายและเพื่อเพิ่มประสิทธิผลการโฆษณาสำหรับผู้เผยแพร่และผู้โฆษณาสำหรับบุคคลที่สาม',
            toggle: {
              value: 'marketing',
              enabled: false,
              readonly: false,
            },
          },
          {
            title: 'รายละเอียดเพิ่มเติม',
            description: `หากท่านมีปัญหาข้อสงสัยโปรดติดต่อเราที่ <a target="_blank" rel=”noopener noreferrer” class="cc-link" href="https://google.com">ติดต่อเรา</a>.`,
          },
        ],
      },
    },
  },
});
