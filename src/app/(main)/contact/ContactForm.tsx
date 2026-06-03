'use client'

import Script from 'next/script'

export default function ContactForm() {
  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
      <div
        className="kit-contact-form"
        dangerouslySetInnerHTML={{
          __html: `
<form
  action="https://app.kit.com/forms/9505510/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="9505510"
  data-uid="730f86c8d2"
  data-format="inline"
  data-version="5"
  data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Your message has been sent. We will get back to you within 48 hours. Please check your email for updates.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
  min-width="400 500 600 700 800"
>
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="true" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input class="formkit-input" aria-label="First Name" name="fields[first_name]" placeholder="First Name" type="text" />
      </div>
      <div class="formkit-field">
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" />
      </div>
      <div class="formkit-field">
        <input class="formkit-input" aria-label="Subject" name="fields[subject]" placeholder="Subject" type="text" />
      </div>
      <div class="formkit-field">
        <input class="formkit-input" aria-label="Message" name="fields[message]" placeholder="Message" type="text" />
      </div>
      <button data-element="submit" class="formkit-submit formkit-submit">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Send Message</span>
      </button>
    </div>
    <div class="formkit-powered-by-convertkit-container">
      <a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow noopener">Built with Kit</a>
    </div>
  </div>
</form>
          `,
        }}
      />
    </>
  )
}
