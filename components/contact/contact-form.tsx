"use client"

import { useState } from "react"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/30 dark:border-primary/40 rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-7 h-7 text-primary-foreground"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">預約已收到！</h3>
        <p className="text-sm text-muted-foreground mb-4">
          我們已收到您的預約請求，將於一個工作天內聯絡您確認。感謝您的查詢！
        </p>
        <Button variant="outline" onClick={() => setSuccess(false)} className="mt-2">
          提交新預約
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name" required>
            姓名 Name
          </FieldLabel>
          <Input id="name" name="name" placeholder="請輸入您的全名" required />
        </Field>
      </FieldGroup>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email" required>
              電郵 Email
            </FieldLabel>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="phone" required>
              電話 Phone
            </FieldLabel>
            <Input id="phone" name="phone" type="tel" placeholder="+852 1234 5678" required />
          </Field>
        </FieldGroup>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="service">服務類型 Service Type</FieldLabel>
          <select
            id="service"
            name="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">請選擇服務類型</option>
            <option value="sports-injury">運動傷患治療</option>
            <option value="chronic-pain">慢性痛症管理</option>
            <option value="posture-correction">姿勢矯正</option>
            <option value="post-surgery-rehab">術後復康</option>
            <option value="general">一般諮詢</option>
          </select>
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="message">訊息 Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="請描述您的情況或查詢內容..."
            rows={4}
          />
        </Field>
      </FieldGroup>

      <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
        {loading && <Spinner className="mr-2" />}
        {loading ? "提交中..." : "提交預約 Submit Booking"}
      </Button>
    </form>
  )
}
