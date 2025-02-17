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
    testimonial:
      "The Green Lipped Mussel supplement has significantly reduced my joint pain. I can now enjoy my daily activities without discomfort!",
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
          <Textarea id="testimonial" name="testimonial" value={formData.testimonial || ''} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full">
          Generate Email Template
        </Button>
        
      </div>
    </form>
  )
}
