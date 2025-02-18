"use client"

import { useState } from "react"
import InputForm from "../ui/InputForm"
import EmailTemplate from "../ui/EmailTemplate"
import EmailMarketingTemplate from "../ui/EmailMarketingTemplate"
import { generateEmail } from "../../apis/generateEmail"
import Spinner from "../ui/spinner"

export default function GenerateEmailContent() {
  const [emailData, setEmailData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = (data) => {
    setEmailData(data)
    handleGenerateEmail(data) // Pass data directly to generate email
  }

  const handleGenerateEmail = async (data) => {
    setIsLoading(true);
    try {
      const emailContent = await generateEmail(data); // Use the passed data
      setEmailData(emailContent);
    } catch (error) {
      console.error("Error generating email:", error);
      // Optionally, you can set an error state here to display a message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Deep Blue Health Email Template Generator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputForm onSubmit={handleFormSubmit} />
          {isLoading ? <Spinner /> : <EmailTemplate emailData={emailData} />}
          <div>
            {isLoading ? <Spinner /> : <EmailMarketingTemplate emailData={emailData} />}
          </div>
        </div>  
      </div>
    </main>
  )
}
