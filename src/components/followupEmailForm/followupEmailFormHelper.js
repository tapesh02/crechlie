export function buildCrecheEmail({
  parentName,
  childName,
  status,
  crecheName = 'Your Creche Name', // Fetched from user profile
}) {
  const displayChild = childName ? `for your child, <strong>${childName}</strong>` : 'creche availability';
  const signature = `[Name of Creche] - Via Crechlie`.replace('[Name of Creche]', crecheName);

  let subject = '';
  let body = '';

  switch (status) {
    case 'waiting':
      subject = 'Creche Enquiry – Waiting List Confirmation';
      body = `
Dear <strong>${parentName}</strong>,<br/><br/>
Thank you for your enquiry regarding ${displayChild}.<br/>
We would like to confirm that we have received your request and your child has been added to our waiting list. At present, we do not have an available place, but we will contact you as soon as a space becomes available.<br/><br/>
If you have any questions in the meantime or if your circumstances change, please feel free to contact us.<br/><br/>
Kind regards,<br/>
${signature}`;
      break;

    case 'accepted':
      subject = 'Creche Enquiry – Place Available';
      body = `
Dear <strong>${parentName}</strong>,<br/><br/>
Thank you for your enquiry regarding ${displayChild}.<br/>
We are pleased to inform you that a place is currently available. A member of our team will contact you shortly to discuss next steps, enrolment details, and start dates.<br/><br/>
If you have any immediate questions, please do not hesitate to get in touch.<br/><br/>
Kind regards,<br/>
${signature}`;
      break;

    case 'rejected':
      subject = 'Creche Enquiry – Update on Availability';
      body = `
Dear <strong>${parentName}</strong>,<br/><br/>
Thank you for contacting us regarding ${displayChild}.<br/>
Unfortunately, we do not currently have availability and are unable to offer a place at this time. We appreciate your interest in our creche and thank you for taking the time to contact us.<br/><br/>
We wish you every success in securing suitable childcare arrangements.<br/><br/>
Kind regards,<br/>
${signature}`;
      break;

    default:
      subject = 'Creche Enquiry Update';
      body = `Dear ${parentName},<br/><br/>[Type your Custom email here]<br/><br/>Kind regards,<br/>${signature}`;
  }

  return { subject, body };
}

export const getStatusColor = (status, theme) => {
  const colors = {
    'new': 'warning',
    'waiting': 'info', 
    'accepted': 'success',
    'contacted': 'primary',
    'rejected': 'error'
  };
  
  const color = colors[status] || 'default';
  
  // ✅ Use theme light variants for lighter colors
  return `${color}.light` in theme.palette ? `${color}.light` : color;
};
