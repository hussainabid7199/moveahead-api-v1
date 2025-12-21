const enquiryEmailTemplate = (appName: string, fullName: string, email: string, phone: string, service: string, message: string) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry – ${appName}</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color:#1f2937;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:18px 10px;">
<tr>
<td align="center">

<!-- Main Container -->
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
<td style="padding:18px 36px 10px;">
<h2 style="margin:0; font-size:18px; font-weight:600;">
New Enquiry Received
</h2>
<p style="margin:4px 0 0; font-size:13px; color:#6b7280;">
A new service enquiry has been submitted
</p>
</td>
</tr>

<!-- Info Grid -->
<tr>
<td style="padding:6px 36px 18px;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
style="font-size:13.5px; border-collapse:collapse;">

<tr>
<td style="padding:6px 0; width:140px; color:#6b7280; font-weight:500;">Name</td>
<td style="padding:6px 0; font-weight:500;">${fullName}</td>

<td style="padding:6px 0 6px 40px; width:120px; color:#6b7280; font-weight:500;">Service</td>
<td style="padding:6px 0; font-weight:600; color:#92400e;">${service.toUpperCase()}</td>
</tr>

<tr>
<td style="padding:6px 0; color:#6b7280; font-weight:500;">Email</td>
<td style="padding:6px 0;">
<a href="mailto:${email}" style="color:#4f46e5; text-decoration:none; font-weight:500;">
${email}
</a>
</td>

<td style="padding:6px 0 6px 40px; color:#6b7280; font-weight:500;">Phone</td>
<td style="padding:6px 0; font-weight:500;">${phone || 'N/A'}</td>
</tr>

</table>
</td>
</tr>

<!-- Message -->
<tr>
<td style="padding:0 36px 20px;">
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:14px 16px;">
<p style="margin:0 0 4px; font-size:12px; color:#6b7280; font-weight:600; text-transform:uppercase;">
Message
</p>
<p style="margin:0; font-size:13.5px; color:#374151; line-height:1.55; white-space:pre-wrap;">
${message || 'No message provided'}
</p>
</div>
</td>
</tr>

<!-- Actions -->
<tr>
<td style="padding:0 36px 24px; text-align:right;">
<a href="mailto:${email}"
style="display:inline-block; padding:10px 22px; background:#4f46e5; color:#ffffff;
font-size:13.5px; font-weight:600; border-radius:6px; text-decoration:none; margin-right:8px;">
Reply
</a>

<a href="tel:${phone || ''}"
style="display:inline-block; padding:10px 22px; background:#10b981; color:#ffffff;
font-size:13.5px; font-weight:600; border-radius:6px; text-decoration:none;">
Call
</a>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:18px 36px; background:#f9fafb; border-top:1px solid #e5e7eb;">
<p style="margin:0; font-size:12.5px; color:#6b7280;">
<strong style="color:#1f2937;">${appName}</strong> — Empowering individuals with neuro-developmental,
speech, behavioural, and hearing challenges.
</p>
<p style="margin:6px 0 0; font-size:11.5px; color:#9ca3af;">
Automated notification · Please do not reply directly
</p>
</td>
</tr>

</table>
</td>
</tr>
</table>

</body>
</html>




  `;
};

export default enquiryEmailTemplate;
