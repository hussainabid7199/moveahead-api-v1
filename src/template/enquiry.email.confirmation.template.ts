const enquiryConfirmationEmailTemplate = (
  appName: string,
  fullName: string,
  service: string
) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Enquiry Submitted – ${appName}</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color:#1f2937;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:18px 10px;">
<tr>
<td align="center">

<table width="860" cellpadding="0" cellspacing="0" role="presentation"
style="width:100%; max-width:860px; background:#ffffff; border-radius:10px; box-shadow:0 5px 18px rgba(0,0,0,0.05); overflow:hidden;">

<!-- Header -->
<tr>
<td style="padding:22px 36px; border-bottom:1px solid #e5e7eb;">
<h1 style="margin:0; font-size:24px; font-weight:700; color:#4f46e5;">
${appName}
</h1>
<p style="margin:4px 0 0; font-size:13px; color:#6b7280;">
Holistic Rehab & Habilitation Centre
</p>
</td>
</tr>

<!-- Title -->
<tr>
<td style="padding:22px 36px 10px;">
<h2 style="margin:0; font-size:20px; font-weight:600;">
Your Enquiry Has Been Submitted
</h2>
<p style="margin:6px 0 0; font-size:14px; color:#6b7280;">
Thank you for reaching out to us
</p>
</td>
</tr>

<!-- Message -->
<tr>
<td style="padding:10px 36px 24px;">
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:18px;">
<p style="margin:0 0 10px; font-size:15px; font-weight:600;">
Hello ${fullName},
</p>

<p style="margin:0 0 12px; font-size:14px; line-height:1.6; color:#374151;">
We have successfully received your enquiry for
<strong style="color:#92400e;">${service}</strong>.
</p>

<p style="margin:0; font-size:14px; line-height:1.6; color:#374151;">
Our team will review your request and
<strong>will be connected with you soon</strong>
to assist you further.
</p>
</div>
</td>
</tr>

<!-- Support Note -->
<tr>
<td style="padding:0 36px 26px;">
<p style="margin:0; font-size:13px; color:#6b7280;">
If you have any additional information to share, feel free to reply on <a href="mailto:info@moveahead.life" style="color:#1f2937; text-decoration:none;">info@moveahead.life</a>.
</p>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:18px 36px; background:#f9fafb; border-top:1px solid #e5e7eb;">
<p style="margin:0; font-size:12.5px; color:#6b7280;">
<strong style="color:#1f2937;">${appName}</strong> — Empowering individuals with neuro-developmental,
speech, behavioural, hearing challenges and special education.
</p>
<p style="margin:6px 0 0; font-size:11.5px; color:#9ca3af;">
This is an automated confirmation email
</p>
</td>
</tr>

</table>
</td>
</tr>
</table>

</body>
</html>`;
};

export default enquiryConfirmationEmailTemplate;
