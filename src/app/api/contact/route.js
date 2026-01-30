import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    /* ================= ADMIN EMAIL ================= */
    await transporter.sendMail({
      from: `"Everest Yatra Inquiries" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: ` New Inquiry from ${body.name} - ${body.pax} Travelers`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:650px; margin:40px auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding:40px 30px; text-align:center;">
      <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700;">New Customer Inquiry</h1>
      <p style="margin:10px 0 0 0; color:rgba(255,255,255,0.9); font-size:14px;">Received ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
    </div>

    <!-- Content -->
    <div style="padding:40px 30px;">
      
      <!-- Customer Info Card -->
      <div style="background:#f8fafc; border-left:4px solid #3b82f6; border-radius:8px; padding:20px; margin-bottom:25px;">
        <h2 style="margin:0 0 15px 0; color:#1e293b; font-size:18px; font-weight:600;">Customer Information</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px; width:140px;"><strong>Full Name:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px;"><strong>Email:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;"><a href="mailto:${body.email}" style="color:#3b82f6; text-decoration:none;">${body.email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px;"><strong>Phone:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px;"><strong>Country:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.country || "Not specified"}</td>
          </tr>
        </table>
      </div>

      <!-- Trip Details Card -->
      <div style="background:#ecfdf5; border-left:4px solid #10b981; border-radius:8px; padding:20px; margin-bottom:25px;">
        <h2 style="margin:0 0 15px 0; color:#1e293b; font-size:18px; font-weight:600;">Trip Details</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px; width:140px;"><strong>Travelers:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.pax} ${body.pax === 1 ? 'Person' : 'Persons'}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px;"><strong>Start Date:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.startDate ? new Date(body.startDate).toLocaleDateString('en-US', { dateStyle: 'long' }) : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b; font-size:14px;"><strong>End Date:</strong></td>
            <td style="padding:8px 0; color:#1e293b; font-size:14px;">${body.endDate ? new Date(body.endDate).toLocaleDateString('en-US', { dateStyle: 'long' }) : "Not specified"}</td>
          </tr>
        </table>
      </div>

      <!-- Message Card -->
      ${body.message ? `
      <div style="background:#fef3c7; border-left:4px solid #f59e0b; border-radius:8px; padding:20px;">
        <h2 style="margin:0 0 15px 0; color:#1e293b; font-size:18px; font-weight:600;">Customer Message</h2>
        <p style="margin:0; color:#1e293b; font-size:14px; line-height:1.7; white-space:pre-wrap;">${body.message}</p>
      </div>
      ` : ''}

      <!-- Action Button -->
      <div style="text-align:center; margin-top:30px;">
        <a href="mailto:${body.email}" style="display:inline-block; background:linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color:#ffffff; padding:14px 32px; border-radius:8px; text-decoration:none; font-weight:600; font-size:15px; box-shadow:0 4px 12px rgba(59,130,246,0.3);">Reply to Customer</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc; padding:25px 30px; text-align:center; border-top:1px solid #e2e8f0;">
      <p style="margin:0; color:#64748b; font-size:13px;">
        <strong>Everest Yatra</strong> • Travel Expert Team<br>
        <a href="https://everestyatra.com" style="color:#3b82f6; text-decoration:none;">everestyatra.com</a> • info@everestyatra.com
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    /* ================= CUSTOMER AUTO-REPLY ================= */
    await transporter.sendMail({
      from: `"Everest Yatra Team" <${process.env.GMAIL_USER}>`,
      to: body.email,
      subject: "✅ Your Himalayan Adventure Inquiry Received",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background:#f0f9ff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,0.15);">
    
    <!-- Hero Header with Mountain Background -->
    <div style="background:linear-gradient(135deg, rgba(6,20,33,0.95) 0%, rgba(6,20,33,0.85) 100%), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200') center/cover; padding:50px 30px; text-align:center; position:relative;">
      <div style="position:relative; z-index:1;">
        <h1 style="margin:0 0 10px 0; color:#ffffff; font-size:32px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.3);">Thank You, ${body.name}!</h1>
        <p style="margin:0; color:rgba(255,255,255,0.95); font-size:16px; text-shadow:0 1px 4px rgba(0,0,0,0.2);">Your Himalayan Adventure Begins Here</p>
      </div>
    </div>

    <!-- Content -->
    <div style="padding:40px 30px;">
      
      <!-- Welcome Message -->
      <div style="text-align:center; margin-bottom:35px;">
        <div style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#ffffff; padding:8px 20px; border-radius:50px; font-size:13px; font-weight:600; margin-bottom:20px;">
          ✓ Inquiry Received Successfully
        </div>
        <p style="margin:0; color:#475569; font-size:15px; line-height:1.7;">
          Thank you for reaching out to <strong style="color:#0f172a;">Everest Yatra</strong>. We're thrilled to help you plan your dream Himalayan journey!
        </p>
      </div>

      <!-- Your Details Card -->
      <div style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius:16px; padding:25px; margin-bottom:25px; border:1px solid #bbf7d0;">
        <h2 style="margin:0 0 20px 0; color:#065f46; font-size:18px; font-weight:700; display:flex; align-items:center;">
          <span style="display:inline-block; width:32px; height:32px; background:#10b981; border-radius:50%; color:#ffffff; text-align:center; line-height:32px; margin-right:10px; font-size:18px;">📋</span>
          Your Inquiry Summary
        </h2>
        <table style="width:100%; border-collapse:collapse;">
          ${body.country ? `
          <tr>
            <td style="padding:10px 0; color:#065f46; font-size:14px; font-weight:600; width:150px;">Country</td>
            <td style="padding:10px 0; color:#047857; font-size:14px;">${body.country}</td>
          </tr>` : ''}
          <tr>
            <td style="padding:10px 0; color:#065f46; font-size:14px; font-weight:600;">Travelers</td>
            <td style="padding:10px 0; color:#047857; font-size:14px;">${body.pax} ${body.pax === 1 ? 'Person' : 'Persons'}</td>
          </tr>
          ${body.startDate ? `
          <tr>
            <td style="padding:10px 0; color:#065f46; font-size:14px; font-weight:600;">Travel Dates</td>
            <td style="padding:10px 0; color:#047857; font-size:14px;">${new Date(body.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} → ${body.endDate ? new Date(body.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBD'}</td>
          </tr>` : ''}
        </table>
      </div>

      <!-- What Happens Next -->
      <div style="background:#f8fafc; border-radius:16px; padding:25px; margin-bottom:30px; border-left:4px solid #3b82f6;">
        <h2 style="margin:0 0 20px 0; color:#1e293b; font-size:18px; font-weight:700; display:flex; align-items:center;">
          <span style="display:inline-block; width:32px; height:32px; background:#3b82f6; border-radius:50%; color:#ffffff; text-align:center; line-height:32px; margin-right:10px; font-size:18px;">⏱️</span>
          What Happens Next?
        </h2>
        <ul style="margin:0; padding:0 0 0 20px; color:#475569; font-size:14px; line-height:1.9;">
          <li style="margin-bottom:10px;">Our expert travel consultants will review your inquiry</li>
          <li style="margin-bottom:10px;">You'll receive a <strong>personalized itinerary</strong> within 24 hours</li>
          <li style="margin-bottom:10px;">We'll answer all your questions and customize your adventure</li>
          <li>Your dream Himalayan trek awaits! 🏔️</li>
        </ul>
      </div>

      <!-- CTA Buttons -->
      <div style="text-align:center; margin:35px 0;">
        <a href="https://everestyatra.com/packages" style="display:inline-block; background:linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color:#ffffff; padding:16px 36px; border-radius:50px; text-decoration:none; font-weight:700; font-size:15px; margin:0 5px 10px 5px; box-shadow:0 6px 20px rgba(59,130,246,0.4); transition:all 0.3s;">
           Explore Our Packages
        </a>
        <a href="https://everestyatra.com" style="display:inline-block; background:#ffffff; color:#3b82f6; padding:16px 36px; border-radius:50px; text-decoration:none; font-weight:700; font-size:15px; margin:0 5px 10px 5px; border:2px solid #3b82f6; transition:all 0.3s;">
          Visit Our Website
        </a>
      </div>



      <!-- Contact Support -->
      <div style="text-align:center; margin-top:30px; padding-top:30px; border-top:2px solid #e2e8f0;">
        <p style="margin:0 0 15px 0; color:#64748b; font-size:14px;">
          Have questions? We're here to help!
        </p>
        
      </div>
    </div>

    <!-- Footer -->
    <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding:30px; text-align:center;">
      <div style="margin-bottom:15px;">
        <h3 style="margin:0 0 8px 0; color:#ffffff; font-size:22px; font-weight:700;">Everest Yatra</h3>
        <p style="margin:0; color:rgba(255,255,255,0.7); font-size:13px;">Your Gateway to Himalayan Adventures</p>
      </div>
      
      <p style="margin:15px 0 0 0; color:rgba(255,255,255,0.5); font-size:12px;">
        © ${new Date().getFullYear()} Everest Yatra. All rights reserved.<br>
         Nepal 🇳🇵
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send email. Please try again later." 
      }), 
      { status: 500 }
    );
  }
}