/**
 * Cloudflare Pages Function: /api/contact
 * Handles inbound lead submissions from remainllc.com
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const data = await request.json();
    const { name, business, type, phone, email, message } = data;

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const recipientEmail = (env && env.CONTACT_EMAIL) ? env.CONTACT_EMAIL : 'info@remainllc.com';

    const emailSubject = `🔔 New Lead: ${name} (${business || 'Small Business'})`;
    const emailBody = [
      `New Lead Submission from RemainLLC.com:`,
      ``,
      `Name: ${name}`,
      `Business Name: ${business || 'Not specified'}`,
      `Industry / Trade: ${type || 'Not specified'}`,
      `Phone Number: ${phone || 'Not specified'}`,
      `Email Address: ${email}`,
      `Challenges / Message: ${message || 'None provided'}`,
      ``,
      `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Detroit' })}`
    ].join('\n');

    // 1. Resend API (if configured in Cloudflare Pages Environment Variables)
    if (env && env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: env.FROM_EMAIL || 'Remain Leads <notifications@remainllc.com>',
            to: [recipientEmail],
            reply_to: email,
            subject: emailSubject,
            text: emailBody
          })
        });
      } catch (resendError) {
        console.error('Resend delivery error:', resendError);
      }
    } 
    // 2. Free Cloudflare MailChannels Relay (Zero setup)
    else {
      try {
        await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: recipientEmail, name: 'Remain LLC' }] }],
            from: { email: 'leads@remainllc.com', name: 'Remain Website' },
            reply_to: { email: email, name: name },
            subject: emailSubject,
            content: [{ type: 'text/plain', value: emailBody }]
          })
        });
      } catch (mcError) {
        console.warn('MailChannels delivery error:', mcError);
      }
    }

    // 3. Optional Webhook (Discord / Slack / CRM webhook if configured in Cloudflare env)
    if (env && env.WEBHOOK_URL) {
      try {
        await fetch(env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `**🔔 New Lead from RemainLLC.com**\n**Name:** ${name}\n**Business:** ${business || 'N/A'}\n**Trade:** ${type || 'N/A'}\n**Phone:** ${phone || 'N/A'}\n**Email:** ${email}\n**Message:** ${message || 'N/A'}`
          })
        });
      } catch (webhookError) {
        console.warn('Webhook delivery error:', webhookError);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Lead received successfully' }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
