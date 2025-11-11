'use client'

import { useState } from 'react'
import './booking.css'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const bookingText = `📅 YANGI BRON\n\n` +
      `👤 Ism: ${formData.name}\n` +
      `📞 Telefon: ${formData.phone}\n` +
      `📅 Sana: ${formData.date}\n` +
      `🕐 Vaqt: ${formData.time}\n` +
      `👥 Mehmonlar soni: ${formData.guests}\n` +
      (formData.message ? `💬 Xabar: ${formData.message}\n` : '')

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: bookingText,
          type: 'booking'
        }),
      })

      let data
      try {
        data = await response.json()
      } catch (e) {
        const text = await response.text()
        console.error('Response is not JSON:', text)
        alert(`Xatolik yuz berdi: Server javob bermadi. Iltimos, qayta urinib ko'ring.`)
        return
      }
      
      if (response.ok) {
        alert('Bron muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.')
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        })
      } else {
        console.error('API Error:', data)
        alert(`Xatolik yuz berdi: ${data.details || data.error || 'Noma\'lum xatolik'}. Iltimos, qayta urinib ko'ring.`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Tarmoq xatosi. Iltimos, internetingizni tekshiring va qayta urinib ko\'ring.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get tomorrow's date as minimum date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <main className="booking-page">
      <div className="container">
        <h1 className="page-title">Stol bron qilish</h1>
        <p className="page-subtitle">
          Bizning restoranimizda stol bron qilish uchun quyidagi formani to'ldiring.
          Tez orada siz bilan bog'lanamiz.
        </p>

        <form className="booking-form card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ism *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon raqami *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Sana *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={minDate}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Vaqt *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Mehmonlar soni *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="1">1 kishi</option>
              <option value="2">2 kishi</option>
              <option value="3">3 kishi</option>
              <option value="4">4 kishi</option>
              <option value="5">5 kishi</option>
              <option value="6">6 kishi</option>
              <option value="7">7+ kishi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Qo'shimcha xabar</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Maxsus talablar yoki xabarlar..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Yuborilmoqda...' : 'Bron qilish'}
          </button>
        </form>
      </div>
    </main>
  )
}

