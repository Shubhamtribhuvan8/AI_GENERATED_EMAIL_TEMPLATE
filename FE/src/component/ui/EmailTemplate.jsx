import Image from "./Image"

export default function EmailTemplate({ emailData }) {
  console.log(emailData, "email data");
  if (!emailData || typeof emailData !== "object") {
    return <div className="text-red-500 text-center">No email data provided.</div>
  }

  const productUrl = emailData.productUrl || "https://www.deepbluehealth.co.nz/";

  console.log(emailData.emailContent, "email data");

  // Extract subject from email content
  const subject = emailData.emailContent && typeof emailData.emailContent === "string" && emailData.emailContent.includes("Subject:") 
    ? emailData.emailContent.split("Subject:")[1].split("\n")[0].trim() 
    : "No subject";

  // Extract body content (everything after the subject line)
  const bodyContent = typeof emailData.emailContent === "string" ? emailData.emailContent.split("\n").slice(1).join("\n") : "";

  console.log(bodyContent, "body content");

  // Function to download the email template as HTML
  const downloadTemplate = () => {
    const element = document.createElement("a");
    const file = new Blob([`<html><body>${bodyContent}</body></html>`], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "email_template.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg">
        {/* Header */}
        <header className="text-center mb-8">
          <Image
            src="https://www.deepbluehealth.co.nz/cdn/shop/files/DBH-Logo-Stack-Website-RGB-224x148px-v2_128x96.png?v=1671741678"
            alt="Logo"
            width={200}
            height={50}
            className="mx-auto mb-4"
          />
        </header>

        {/* Subject Line */}
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">{subject}</h1>

        {/* Main Content */}
        <main className="space-y-6">
          <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
        </main>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a href={productUrl} style={{ display: 'inline-block', padding: '15px 25px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '18px', marginTop: '20px' }}>
            Try Green Lipped Mussel Today
          </a>
        </div>

        {/* Download Button */}
        <div className="text-center mt-4">
          <button onClick={downloadTemplate} style={{ display: 'inline-block', padding: '15px 25px', backgroundColor: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '18px' }}>
            Download Email Template
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2023 Deep Blue Health. All rights reserved.</p>
          <p className="mt-2">
            <a href="unsubscribe_link" className="text-blue-500 hover:underline">
              Unsubscribe
            </a>{" "}
            |
            <a href="#" className="text-blue-500 hover:underline ml-2">
              Privacy Policy
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Instagram
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Twitter
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
