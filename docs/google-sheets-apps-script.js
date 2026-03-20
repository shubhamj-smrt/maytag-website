/**
 * Google Apps Script for Schedule Pickup form → Google Sheet
 *
 * Setup:
 * 1. Create a Google Sheet with headers in row 1:
 *    Name | Phone | Address | Preferred Date | Preferred Time | Notes | Timestamp
 *
 * 2. Extensions → Apps Script
 * 3. Replace the default code with this script
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL and update GOOGLE_SHEETS_WEB_APP_URL in SchedulePickupFormPage.tsx
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Supports form-urlencoded (e.parameter) - avoids CORS preflight from the website
    const data = e.parameter || {};

    sheet.appendRow([
      data.name || '',
      data.phone || '',
      data.address || '',
      data.preferredDate || '',
      data.preferredTime || '',
      data.notes || '',
      new Date().toISOString(),
    ]);

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
