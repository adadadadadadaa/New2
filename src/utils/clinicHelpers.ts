import { DOCTOR_INFO } from '../data/doctorData';

export function downloadVCard() {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Amin;Md. Ruhul;Dr.;;',
    'FN:Dr. Md. Ruhul Amin (Homeopathic Doctor)',
    'ORG:Homeopathic Healthcare & Research Chamber',
    'TITLE:Homeopathic Physician - BHMS (DU), MPH (BOU)',
    'TEL;TYPE=WORK,VOICE:01627585412',
    'TEL;TYPE=CELL:+8801627585412',
    'ADR;TYPE=WORK:;;House No 3, Road No 2, Behind Shah Ali Market (Bag Alley), Mirpur-10;Dhaka;;1216;Bangladesh',
    'NOTE:Qualifications: BHMS (DU), MPH (BOU). Classical Homeopathic Doctor in Mirpur 10, Dhaka.',
    'URL:' + window.location.origin,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Dr_Md_Ruhul_Amin_Homeopath.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getChamberStatus(): {
  isOpen: boolean;
  statusText: string;
  nextTimeInfo: string;
} {
  // Use Bangladesh timezone (UTC+6)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const bdTime = new Date(utc + (3600000 * 6));
  
  const day = bdTime.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const hours = bdTime.getHours();
  const minutes = bdTime.getMinutes();
  const currentDecimalHour = hours + minutes / 60;

  // Friday: 4:30 PM (16.5) to 9:30 PM (21.5)
  if (day === 5) {
    if (currentDecimalHour >= 16.5 && currentDecimalHour < 21.5) {
      return {
        isOpen: true,
        statusText: "Open · Closes 9:30 PM",
        nextTimeInfo: "Evening consultation shift in session"
      };
    } else if (currentDecimalHour < 16.5) {
      return {
        isOpen: false,
        statusText: "Closed · Opens 4:30 PM",
        nextTimeInfo: "Friday evening shift opens at 4:30 PM"
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed · Opens Sat 10:00 AM",
        nextTimeInfo: "Next consultation on Saturday at 10:00 AM"
      };
    }
  }

  // Saturday to Thursday: 10:00 AM - 1:30 PM (10 to 13.5) & 4:30 PM - 9:30 PM (16.5 to 21.5)
  if (currentDecimalHour >= 10 && currentDecimalHour < 13.5) {
    return {
      isOpen: true,
      statusText: "Open · Morning Shift (Closes 1:30 PM)",
      nextTimeInfo: "Evening shift resumes at 4:30 PM"
    };
  } else if (currentDecimalHour >= 13.5 && currentDecimalHour < 16.5) {
    return {
      isOpen: false,
      statusText: "Break · Reopens 4:30 PM",
      nextTimeInfo: "Chamber reopens for evening shift at 4:30 PM"
    };
  } else if (currentDecimalHour >= 16.5 && currentDecimalHour < 21.5) {
    return {
      isOpen: true,
      statusText: "Open · Closes 9:30 PM",
      nextTimeInfo: "Evening consultation shift until 9:30 PM"
    };
  } else if (currentDecimalHour < 10) {
    return {
      isOpen: false,
      statusText: "Closed · Opens 10:00 AM",
      nextTimeInfo: "Morning consultation begins at 10:00 AM"
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed for today",
      nextTimeInfo: "Opens tomorrow at 10:00 AM"
    };
  }
}
