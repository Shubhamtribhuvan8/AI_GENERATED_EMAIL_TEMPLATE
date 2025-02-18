import Image from "./Image"

export default function EmailTemplate({ emailData }) {
  if (!emailData || typeof emailData !== "object") {
    return <div className="text-red-500 text-center">No email data provided.</div>
  }

  const productUrl = emailData?.productUrl || "https://www.deepbluehealth.co.nz/";

  // Parse the email content HTML
  const emailContentHtml = emailData?.emailContent;

  // Parse the email data text content 
  const emailDataText = emailData?.emailData;


  console.log(emailDataText, "emailDataText");

  // Extract sections from emailDataText
  const sections = {};
  emailDataText?.split('\n\n').forEach(section => {
    if (section.startsWith('**')) {
      const [title, ...content] = section.split(':');
      sections[title.replace(/\*\*/g, '').trim()] = content.join(':').trim();
    }
  });

  // Function to download the email template as HTML
  const downloadTemplate = () => {
    const element = document.createElement("a");
    const file = new Blob([emailContentHtml], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "email_template.html";
    document.body.appendChild(element);
    element.click();
  };


  const downloadResponse = async () => {
    const response=emailDataText;
    const element = document.createElement("a");
    const file = new Blob([response], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "email_response.txt";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <>
      <div className="email-preview">
        {emailContentHtml ? (
          <div dangerouslySetInnerHTML={{ __html: emailContentHtml }} />
        ) : (
          <p>Loading email preview...</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
        <a
          href={productUrl}
          className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105"
        >
          {sections['10. Call-to-Action (CTAs)']?.split('\n')[0] || 'Shop Now & Save 20%'}
        </a>
        <button
          onClick={downloadTemplate}
          className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 transition-all transform hover:scale-105"
        >
          Download Template
        </button>

        <button
          onClick={downloadResponse}
          className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 transition-all transform hover:scale-105"
        >
          Download Response
        </button>
      </div>
    </>
  )
}
