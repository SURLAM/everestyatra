// import nodemailer from "nodemailer";


// function formatDate(dateStr) {
//   if (!dateStr) return "-";
//   const date = new Date(dateStr);
//   return date.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function generateBookingId() {
//   const rand = Math.floor(1000 + Math.random() * 9000);
//   const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
//   return `EV-${date}-${rand}`;
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const required = [
//       "package",
//       "firstName",
//       "lastName",
//       "email",
//       "country",
//       "startDate",
//       "endDate",
//       "pax",
//     ];

//     for (const field of required) {
//       if (!body[field]) {
//         return new Response(JSON.stringify({ error: `${field} is required` }), {
//           status: 400,
//         });
//       }
//     }

//     const bookingId = generateBookingId();
//     const offer = getRandomOffer();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASS,
//       },
//     });

//     /* ================= ADMIN EMAIL ================= */
//     await transporter.sendMail({
//       from: `"Everestyatra Booking" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       subject: `🆕 Booking Request – ${body.package}`,
//       html: `
//         <h2>New Booking Request</h2>
//         <p><strong>Booking ID:</strong> ${bookingId}</p>
//         <p><strong>Package:</strong> ${body.package}</p>
//         <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
//         <p><strong>Email:</strong> ${body.email}</p>
//         <p><strong>Phone:</strong> ${body.phone || "-"}</p>
//         <p><strong>Country:</strong> ${body.country}</p>
//         <p><strong>Pax:</strong> ${body.pax}</p>
//         <p><strong>Trip Dates:</strong> ${formatDate(
//           body.startDate
//         )} → ${formatDate(body.endDate)}</p>
//         <p><strong>Message:</strong><br/>${body.message || "-"}</p>
//       `,
//     });

//     /* ================= CUSTOMER AUTO-REPLY ================= */
//     await transporter.sendMail({
//       from: `"Everestyatra.com" <${process.env.GMAIL_USER}>`,
//       to: body.email,
//       subject: `Booking Received – ${body.package}`,
//       html: `
// <!DOCTYPE html>
// <html>
// <head>
// <style>
// body { background:#fff; font-family: Arial, sans-serif; }
// .container { max-width:600px; margin:auto; background:#f0f8ff; border-radius:5px; overflow:hidden; }
// .header { background:#020b24; color:#fff; text-align:center; padding:30px; }
// .header h1 { margin:0; }
// .content { padding:30px; color:#333; }
// .highlight { color:#000; font-weight:bold; }
// .card { background:#cde2f7; border-radius:5px; padding:20px; margin-top:20px; }
// .btn { display:inline-block; margin-top:24px; padding:14px 30px; background:
// #fff
// ; color:
// #000
// ; text-decoration:none; border-radius:10px; font-weight:bold; }
// .footer { text-align:center; font-size:16px; padding:16px; background:#020b24; color:#fcfafa; }
// </style>
// </head>
// <body>
// <div class="container">
//   <div class="header">
//     <h1>Thank You ${body.firstName} !</h1>
//     <p>Your EverestYatra Himalayan journey begins here, EverestYatra team excited to offer best services for your dream yatra  </p>
//   </div>

//   <div class="content">
//     <p>Hi ${body.firstName} , Your booking request for ${
//         body.package
//       } has been successfully received by everestyatra.com  team.</p>

//     <div class="card">
//       <p><strong>Booking ID:</strong> <span class="highlight">${bookingId}</span></p>
//       <p><strong>Package Name :</strong> ${body.package}</p>
//       <p><strong>Number of Pax:</strong> ${body.pax}</p>
//       <p><strong>Dates:</strong> ${formatDate(body.startDate)} → ${formatDate(
//         body.endDate
//       )}</p>
//       <p><strong>Country:</strong> ${body.country}</p>
//     </div>

//     <p style="margin-top:20px;">
//       Our EverestYatra expert team  will contact you within <strong>24 hours</strong>.Thankyou for your patience.Appreciate your trust.
//     </p>

//     <div class="card">
//       <img src="https://ik.imagekit.io/2x1rpp2vh/Everest-Base-Camp-trekking" style="width:100%; border-radius:2px;" />
//       <p style="margin-top:20px;"><strong>Explore  more Himalayas Adventure</strong></p>
//       <a class="btn" href="https://everestyatra.com/packages">Explore More Packages → </a>
//     </div>

//     <p style="margin-top:30px;">Best regards ,<br />Everestyatra.com Team</p>
//     <p style="margin-top:20px;">www.everestyatra.com <br />  info@everestyatra.com</p>
    
//   </div>

//   <div class="footer" 
//      <p style="color-white;">www.everestyatra.com  </p>
//   </div>
// </div>
// </body>
// </html>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error("Booking error:", err);
//     return new Response(JSON.stringify({ error: "Booking email failed" }), {
//       status: 500,
//     });
//   }
// }


import nodemailer from "nodemailer";

// Utility Functions
function formatDate(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function generateBookingId() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `EV-${date}-${rand}`;
}

// Customer Email Template
function getCustomerEmailTemplate(data, bookingId) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header Section -->
          <tr>
            <td style="background: linear-gradient(135deg, #020b24 0%, #0a1f44 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                🏔️ Thank You, ${data.firstName}!
              </h1>
              <p style="margin: 0; color: #e0e7ff; font-size: 16px; line-height: 1.6;">
                Your Himalayan adventure begins here. The EverestYatra team is excited to make your dream journey unforgettable!
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong>${data.firstName}</strong>,
              </p>
              <p style="margin: 0 0 30px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                Your booking request for <strong style="color: #020b24;">${data.package}</strong> has been successfully received by the EverestYatra team.
              </p>

              <!-- Booking Details Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%); border-radius: 12px; overflow: hidden; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 20px 0; color: #020b24; font-size: 18px; font-weight: 700; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
                      📋 Booking Summary
                    </h2>
                    
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #4b5563; font-size: 14px; font-weight: 600; width: 40%;">Booking ID:</td>
                        <td style="padding: 8px 0; color: #020b24; font-size: 15px; font-weight: 700;">${bookingId}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #4b5563; font-size: 14px; font-weight: 600;">Package:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${data.package}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #4b5563; font-size: 14px; font-weight: 600;">Travelers:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${data.pax} ${parseInt(data.pax) > 1 ? 'people' : 'person'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #4b5563; font-size: 14px; font-weight: 600;">Dates:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formatDate(data.startDate)} → ${formatDate(data.endDate)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #4b5563; font-size: 14px; font-weight: 600;">Country:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${data.country}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What's Next Section -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0; color: #92400e; font-size: 15px; line-height: 1.6;">
                      ⏰ <strong>What's Next?</strong><br>
                      Our expert team will contact you within <strong>24 hours</strong> to confirm your booking and provide detailed itinerary information. Thank you for your patience and trust!
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Explore More Section -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; overflow: hidden; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <img src="https://ik.imagekit.io/2x1rpp2vh/Everest-Base-Camp-trekking" alt="Himalayan Adventure" style="width: 100%; max-width: 500px; border-radius: 8px; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;" />
                    <h3 style="margin: 0 0 12px 0; color: #020b24; font-size: 20px; font-weight: 700;">
                      🌄 Discover More Himalayan Adventures
                    </h3>
                    <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                      Explore our curated collection of trekking and adventure packages across the majestic Himalayas.
                    </p>
                    <a href="https://everestyatra.com/packages" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #020b24 0%, #0a1f44 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 15px; box-shadow: 0 4px 6px rgba(2, 11, 36, 0.3);">
                      Explore Packages →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Closing -->
              <p style="margin: 0 0 8px 0; color: #333333; font-size: 15px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #020b24;">EverestYatra Team</strong>
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                🌐 <a href="https://www.everestyatra.com" style="color: #3b82f6; text-decoration: none;">www.everestyatra.com</a><br>
                📧 <a href="mailto:info@everestyatra.com" style="color: #3b82f6; text-decoration: none;">info@everestyatra.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #020b24; padding: 24px 30px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #e0e7ff; font-size: 14px;">
                © ${new Date().getFullYear()} EverestYatra. All rights reserved.
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                Your trusted partner for Himalayan adventures
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
}

// Admin Email Template
function getAdminEmailTemplate(data, bookingId) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 650px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                🆕 New Booking Request
              </h1>
              <p style="margin: 0; color: #d1fae5; font-size: 14px;">
                ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </td>
          </tr>

          <!-- Booking ID Banner -->
          <tr>
            <td style="background-color: #fef3c7; padding: 16px 30px; border-bottom: 3px solid #f59e0b;">
              <p style="margin: 0; text-align: center; color: #92400e; font-size: 16px; font-weight: 700;">
                📌 Booking ID: <span style="color: #b45309; font-size: 18px; letter-spacing: 0.5px;">${bookingId}</span>
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 30px;">
              
              <!-- Customer Information -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #1f2937; padding: 12px 20px;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 700;">
                      👤 Customer Information
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #f9fafb;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 35%;">Full Name:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 700;">${data.firstName} ${data.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Email:</td>
                        <td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${data.email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Phone:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px;">${data.phone || '<span style="color: #9ca3af;">Not provided</span>'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Country:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${data.country}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Trip Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #1f2937; padding: 12px 20px;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 700;">
                      🏔️ Trip Details
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #f9fafb;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 35%;">Package:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 700;">${data.package}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Number of Travelers:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 700;">${data.pax} ${parseInt(data.pax) > 1 ? 'people' : 'person'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Start Date:</td>
                        <td style="padding: 6px 0; color: #059669; font-size: 14px; font-weight: 700;">${formatDate(data.startDate)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">End Date:</td>
                        <td style="padding: 6px 0; color: #dc2626; font-size: 14px; font-weight: 700;">${formatDate(data.endDate)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Customer Message -->
              ${data.message ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                <tr>
                  <td style="background-color: #1f2937; padding: 12px 20px;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 700;">
                      💬 Customer Message
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #fffbeb; border-left: 4px solid #f59e0b;">
                    <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Action Required -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border-left: 4px solid #ef4444; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px 0; color: #991b1b; font-size: 15px; font-weight: 700;">
                      ⚠️ Action Required
                    </p>
                    <p style="margin: 0; color: #7f1d1d; font-size: 14px; line-height: 1.6;">
                      Please contact the customer within 24 hours to confirm their booking and provide detailed itinerary information.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px;">
                    <a href="mailto:${data.email}" style="display: inline-block; margin: 5px; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px;">
                      📧 Email Customer
                    </a>
                    ${data.phone ? `
                    <a href="tel:${data.phone}" style="display: inline-block; margin: 5px; padding: 12px 24px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px;">
                      📞 Call Customer
                    </a>
                    ` : ''}
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This is an automated notification from EverestYatra booking system
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
}

// Main API Route Handler
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    const required = [
      "package",
      "firstName",
      "lastName",
      "email",
      "country",
      "startDate",
      "endDate",
      "pax",
    ];

    for (const field of required) {
      if (!body[field]) {
        return new Response(
          JSON.stringify({ 
            success: false,
            error: `${field} is required` 
          }), 
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "Invalid email format" 
        }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Generate booking ID
    const bookingId = generateBookingId();

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send admin notification email
    await transporter.sendMail({
      from: `"EverestYatra Booking System" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🆕 New Booking Request – ${body.package} (${bookingId})`,
      html: getAdminEmailTemplate(body, bookingId),
    });

    // Send customer confirmation email
    await transporter.sendMail({
      from: `"EverestYatra" <${process.env.GMAIL_USER}>`,
      to: body.email,
      subject: `✅ Booking Received – ${body.package}`,
      html: getCustomerEmailTemplate(body, bookingId),
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        bookingId: bookingId,
        message: "Booking request received successfully"
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err) {
    console.error("Booking error:", err);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: "Failed to process booking request. Please try again later." 
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}