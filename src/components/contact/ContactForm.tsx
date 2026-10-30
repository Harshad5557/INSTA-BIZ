import { useState, type FormEvent } from 'react'
import { puppies } from '../../data/puppies'
import { whatsappUrl } from '../../data/site'

interface ContactFields {
  name: string
  phone: string
  email: string
  area: string
  puppy: string
  message: string
}

type ContactField = keyof ContactFields
type ContactErrors = Partial<Record<ContactField, string>>

const initialFields: ContactFields = {
  name: '',
  phone: '',
  email: '',
  area: '',
  puppy: '',
  message: '',
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submissionUnavailable, setSubmissionUnavailable] = useState(false)

  function updateField(field: ContactField, value: string) {
    setFields((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmissionUnavailable(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors: ContactErrors = {}
    if (!fields.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!fields.phone.trim()) nextErrors.phone = 'Please enter your phone or WhatsApp number.'
    else if (!/^\+?[\d\s().-]{7,25}$/.test(fields.phone) || fields.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Enter a valid phone number, including your country code.'
    }
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      nextErrors.email = 'Enter a valid email address or leave this field empty.'
    }

    setErrors(nextErrors)
    const firstInvalidField = Object.keys(nextErrors)[0] as ContactField | undefined
    if (firstInvalidField) {
      document.getElementById(`contact-${firstInvalidField}`)?.focus()
      setSubmissionUnavailable(false)
      return
    }

    setSubmissionUnavailable(true)
  }

  function fieldProps(field: ContactField) {
    return {
      'aria-invalid': Boolean(errors[field]),
      'aria-describedby': errors[field] ? `${field}-error` : undefined,
      onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        updateField(field, event.target.value),
      value: fields[field],
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <p className="contact-form__salutation">Dear TeddyPups,</p>
      <div className="contact-form__sentence">
        <label htmlFor="contact-name">my name is</label>
        <input
          autoComplete="name"
          id="contact-name"
          maxLength={100}
          placeholder="Your name"
          required
          type="text"
          {...fieldProps('name')}
        />
        <label htmlFor="contact-phone">and you can reach me on</label>
        <input
          autoComplete="tel"
          id="contact-phone"
          maxLength={30}
          placeholder="+971 50 123 4567"
          required
          type="tel"
          {...fieldProps('phone')}
        />
        <label htmlFor="contact-email">or by email at</label>
        <input
          autoComplete="email"
          id="contact-email"
          maxLength={150}
          placeholder="optional"
          type="email"
          {...fieldProps('email')}
        />
      </div>
      <div className="contact-form__errors" aria-live="polite">
        {Object.entries(errors).map(([field, message]) => (
          <p id={`${field}-error`} key={field} role="alert">{message}</p>
        ))}
      </div>
      <div className="contact-form__sentence">
        <label htmlFor="contact-area">I live in</label>
        <input
          autoComplete="address-level2"
          id="contact-area"
          maxLength={100}
          placeholder="e.g. Dubai Marina"
          type="text"
          {...fieldProps('area')}
        />
        <label htmlFor="contact-puppy">and I'm curious about</label>
        <select id="contact-puppy" {...fieldProps('puppy')}>
          <option value="">any puppy (not sure yet)</option>
          {puppies.map((puppy) => (
            <option key={puppy.id} value={puppy.id}>
              {puppy.name} ({puppy.breed}, {puppy.gender === 'male' ? 'boy' : puppy.gender === 'female' ? 'girl' : 'boy & girl'})
            </option>
          ))}
        </select>
      </div>
      <label className="contact-form__message-label" htmlFor="contact-message">Your message (optional)</label>
      <textarea
        id="contact-message"
        maxLength={2000}
        placeholder="Anything else you'd like to tell us…"
        rows={4}
        {...fieldProps('message')}
      />
      <div className="contact-form__closing">
        <p>with love, a future puppy parent</p>
        <button className="button button--primary" type="submit">Post my letter</button>
      </div>
      {submissionUnavailable && (
        <div aria-live="assertive" className="contact-form__unavailable" role="alert">
          <strong>Your details were not sent.</strong>
          <p>This form is not connected to a submission service. Please contact TeddyPups directly:</p>
          <div>
            <a href={whatsappUrl} rel="noreferrer" target="_blank">WhatsApp</a>
            <a href="mailto:teddypupsadmin@gmail.com">Email</a>
          </div>
        </div>
      )}
      <p className="contact-form__privacy-note">
        Nothing is transmitted by this form. Your browser will not send these details to the site.
      </p>
    </form>
  )
}