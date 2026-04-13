import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, MapPin, Zap } from 'lucide-react'

const MotionDiv = motion.div
const MotionButton = motion.button

const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
]

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

function ContactSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const calendarDays = useMemo(() => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }, [daysInMonth, firstDayOfMonth])

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(day)
      setSelectedTime(null)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedDate && selectedTime && formData.name && formData.email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', company: '', phone: '' })
        setSelectedDate(null)
        setSelectedTime(null)
      }, 3500)
    }
  }

  const isFormValid = selectedDate && selectedTime && formData.name && formData.email

  return (
    <section id="contact" className="relative py-24 bg-brand-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-large" />
      </div>

      {/* Glows */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
        }}
      />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
        }}
      />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="site-container relative z-10 flex flex-col"
      >
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/30">
              <Zap size={20} className="text-brand-accent" />
            </div>
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            <span className="bg-gradient-to-r from-brand-accent to-brand-electric bg-clip-text text-transparent">
              Schedule Your Discovery Session
            </span>
          </h2>
          <p className="text-lg text-brand-muted">
            Meet with our engineering team to discuss your automation needs and explore customized solutions for your facility.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Calendar & Info */}
          <div className="space-y-6">
            {/* Calendar Card */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8"
            >
              {/* Month Header */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-xl text-brand-text">{monthName}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="rounded-lg bg-brand-accent/10 border border-brand-accent/30 p-2 text-brand-accent transition-all hover:bg-brand-accent/20"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="rounded-lg bg-brand-accent/10 border border-brand-accent/30 p-2 text-brand-accent transition-all hover:bg-brand-accent/20"
                    aria-label="Next month"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="mb-4 grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs font-bold uppercase tracking-[0.08em] text-brand-muted">
                    {day[0]}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    disabled={!day}
                    className={`aspect-square rounded-lg font-semibold transition-all text-xs ${
                      !day
                        ? 'bg-transparent'
                        : selectedDate === day
                          ? 'border-2 border-brand-accent bg-brand-accent text-brand-bg shadow-glow'
                          : 'bg-brand-surface border-2 border-transparent text-brand-text hover:bg-brand-panel hover:border-brand-accent/40'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </MotionDiv>

            {/* Slot Availability Card */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-brand-accent/40 bg-brand-accent/10 backdrop-blur-sm p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-brand-accent/20 border border-brand-accent/40 p-3">
                    <Clock size={20} className="text-brand-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">Available Slots</p>
                    <p className="text-lg font-bold text-brand-accent mt-1">Multiple Options</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-xl border border-brand-border bg-brand-surface/50 backdrop-blur-sm p-5 text-center hover:border-brand-accent/40 transition-colors"
              >
                <MapPin size={20} className="mx-auto mb-2 text-brand-accent" />
                <p className="text-sm font-bold text-brand-text">Virtual</p>
                <p className="text-xs text-brand-muted mt-1">Video Conference</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl border border-brand-border bg-brand-surface/50 backdrop-blur-sm p-5 text-center hover:border-brand-electric/40 transition-colors"
              >
                <Clock size={20} className="mx-auto mb-2 text-brand-electric" />
                <p className="text-sm font-bold text-brand-text">30 Minutes</p>
                <p className="text-xs text-brand-muted mt-1">Discovery Call</p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Time Slots & Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Time Slots Card */}
            <div className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock size={20} className="text-brand-accent" />
                <h3 className="font-bold text-xl text-brand-text">Available Times</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    disabled={!selectedDate}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                      !selectedDate
                        ? 'bg-brand-surface border-2 border-brand-border text-brand-muted cursor-not-allowed'
                        : selectedTime === time
                          ? 'border-2 border-brand-accent bg-brand-accent text-brand-bg shadow-glow'
                          : 'bg-brand-surface border-2 border-transparent text-brand-text hover:bg-brand-panel hover:border-brand-accent/40'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="mt-6 rounded-lg bg-brand-accent/10 border-2 border-brand-accent/40 p-4">
                  <p className="text-sm font-semibold text-brand-accent">
                    ✓ Selected: <span className="font-bold text-brand-accent">{selectedTime}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="rounded-2xl border border-brand-border bg-brand-panel/50 backdrop-blur-sm p-8">
              <h3 className="mb-6 font-bold text-xl text-brand-text">Your Details</h3>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                    Full Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border-2 border-brand-border bg-brand-surface px-4 py-3 text-sm font-medium text-brand-text outline-none transition-all placeholder:text-brand-muted focus:border-brand-accent focus:bg-brand-panel focus:shadow-glow"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                    Email Address
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full rounded-lg border-2 border-brand-border bg-brand-surface px-4 py-3 text-sm font-medium text-brand-text outline-none transition-all placeholder:text-brand-muted focus:border-brand-accent focus:bg-brand-panel focus:shadow-glow"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                    Company
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corporation"
                    className="w-full rounded-lg border-2 border-brand-border bg-brand-surface px-4 py-3 text-sm font-medium text-brand-text outline-none transition-all placeholder:text-brand-muted focus:border-brand-accent focus:bg-brand-panel focus:shadow-glow"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-brand-muted">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border-2 border-brand-border bg-brand-surface px-4 py-3 text-sm font-medium text-brand-text outline-none transition-all placeholder:text-brand-muted focus:border-brand-accent focus:bg-brand-panel focus:shadow-glow"
                  />
                </label>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-lg bg-green-500/10 border-2 border-green-500/40 px-4 py-3 text-sm font-semibold text-green-400"
                >
                  ✓ Meeting scheduled! Check your email for confirmation.
                </motion.div>
              )}

              <MotionButton
                whileHover={isFormValid ? { y: -2 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                type="submit"
                disabled={!isFormValid}
                className={`mt-6 w-full rounded-lg px-6 py-3 font-bold transition-all ${
                  isFormValid
                    ? 'bg-gradient-to-r from-brand-accent to-brand-electric text-brand-bg shadow-glow hover:shadow-glow-electric hover:opacity-90'
                    : 'bg-brand-surface text-brand-muted cursor-not-allowed border border-brand-border'
                }`}
              >
                {isFormValid ? 'Confirm Appointment' : 'Select Date & Time'}
              </MotionButton>
            </form>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}

export default ContactSection
