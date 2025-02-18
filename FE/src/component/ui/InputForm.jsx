"use client"

import { useState } from "react"
import Button from "./button"
import Input from "./input"
import Textarea from "./TextArea"
import Label from "./Label"

export default function InputForm({ onSubmit }) {
  const defaultFormData = {
    brandName: "Deep Blue Health",
    logoUrl: "https://www.deepbluehealth.co.nz/cdn/shop/files/DBH-Logo-Stack-Website-RGB-224x148px-v2_128x96.png?v=1671741678",
    segment: "Past buyers of joint health products + site visitors who viewed joint-related pages",
    goal: "Promote best-selling joint health supplement to convert interested customers",
    tone: "Informative and persuasive",
    productName: "Green Lipped Mussel",
    productDescription: "Natural joint health supplement sourced from New Zealand",
    customerTestimonial: "I was in so much pain before I got the Green Lipped Mussel. I don't think my knees would still be working if I didn't have it! I am a customer for life!",
    testimonials: [
      {
        content: "I was in so much pain before I got the Green Lipped Mussel. I don't think my knees would still be working if I didn't have it! I am a customer for life!",
        author: "Dawn Harrell"
      },
      {
        content: "I've been taking green lipped mussel for a month now. Slowly I can feel my knees allowing me more movement. Prior I couldn't get up without using both hands. Best product! I never want to run out!",
        author: "Maria Biedermann"
      },
      {
        content: "I've been taking green lipped mussel for a month now. Slowly I can feel my knees allowing me more movement. Prior I couldn't get up without using both hands. Best product! I never want to run out!",
        author: "Maria Biedermann"
      }
    ],
    productOptions: [
      {
        name: "Green Lipped Mussel 30-60-90 Caps",
        link: "#"
      },
      {
        name: "Green Lipped Mussel 90 caps - Twin Pack Special",
        link: "#"
      }
    ],
    benefits: [
      "Reduces joint pain and stiffness",
      "Improves mobility and flexibility",
      "Supports healthy cartilage and joint function"
    ],
    pricing: [
      "Starting at $29.99 for 30-60-90 Caps",
      "Starting at $49.99 for 90 Caps - Twin Pack Special"
    ],
    socialProof: [
      "Trusted by thousands of customers",
      "100% satisfaction guarantee"
    ],
    scarcity: [
      "Limited time offer",
      "Only 100 left in stock"
    ],
    brandStory: [
      "Founded by a New Zealand doctor",
      "100% natural and made in New Zealand"
    ],
    footerContent: [
      "Contact us: support@deepbluehealth.co.nz",
      "Phone: 1-800-BRAND-SUPPORT",
      "© ${new Date().getFullYear()} Deep Blue Health. All rights reserved."
    ],
    imagePlacement: "Left",
    colorScheme: "Blue and Green"
  };

  const [formData, setFormData] = useState({});
  const [useDefault, setUseDefault] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleUseDefault = () => {
    setFormData(defaultFormData);
    setUseDefault(true);
    // Do not automatically submit the form after using default details
  }

  const handleClear = () => {
    setFormData({});
    setUseDefault(false);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Email Campaign Information</h2>
      <div className="mb-4">
        <Button type="button" onClick={handleUseDefault} className="mr-2">
          Use Blue Health Default Details
        </Button>
        <br />
        <Button type="button" onClick={handleClear}>
          Clear Details
        </Button>
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="brandName">Brand Name</Label>
          <Input id="brandName" name="brandName" value={formData.brandName || ''} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="logoUrl">Logo URL</Label>
          <Input id="logoUrl" name="logoUrl" value={formData.logoUrl || ''} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="segment">Segment</Label>
          <Input id="segment" name="segment" value={formData.segment || ''} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="goal">Goal</Label>
          <Input id="goal" name="goal" value={formData.goal || ''} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="tone">Tone</Label>
          <Input id="tone" name="tone" value={formData.tone || ''} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="productName">Product Name</Label>
          <Input id="productName" name="productName" value={formData.productName || ''} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="productDescription">Product Description</Label>
          <Textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="testimonial">Customer Testimonial</Label>
          <Textarea id="testimonial" name="testimonial" value={formData.customerTestimonial || ''} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full">
          Generate Email Template
        </Button>
        
      </div>
    </form>
  )
}
