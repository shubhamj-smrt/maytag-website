"use client"

import * as React from "react"
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar-rac"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function toCalendarDate(d: Date): CalendarDate {
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

function formatTimeForInput(d: Date): string {
  return [
    d.getHours().toString().padStart(2, "0"),
    d.getMinutes().toString().padStart(2, "0"),
  ].join(":")
}

export interface NewDateTimePickerProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  datePlaceholder?: string
  dateLabel?: string
  timeLabel?: string
  disabled?: boolean
  className?: string
}

export function NewDateTimePicker({
  value,
  onChange,
  datePlaceholder = "Select date",
  dateLabel = "Date",
  timeLabel = "Time",
  disabled = false,
  className,
}: NewDateTimePickerProps) {
  const [dateOpen, setDateOpen] = React.useState(false)
  const calendarValue = value ? toCalendarDate(value) : null
  const systemTime = React.useMemo(() => formatTimeForInput(new Date()), [])
  const timeValue = value ? formatTimeForInput(value) : systemTime
  const minValue = today(getLocalTimeZone())

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeStr = e.target.value
    if (!timeStr) return
    const [h, m] = timeStr.split(":").map(Number)
    const hourNum = h ?? 0
    const minuteNum = m ?? 0
    if (!calendarValue) {
      const d = new Date()
      d.setHours(hourNum, minuteNum, 0, 0)
      onChange?.(d)
      return
    }
    const d = new Date(calendarValue.year, calendarValue.month - 1, calendarValue.day, hourNum, minuteNum, 0)
    onChange?.(d)
  }

  const handleDateChange = (cal: CalendarDate | null) => {
    if (!cal) {
      onChange?.(null)
      setDateOpen(false)
      return
    }
    const [h, m] = timeValue.split(":").map(Number)
    const d = new Date(cal.year, cal.month - 1, cal.day, h ?? 0, m ?? 0, 0)
    onChange?.(d)
    setDateOpen(false)
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className ?? ""}`}>
      <div className="flex flex-col flex-1">
        <label htmlFor="date" className="block text-sm font-semibold text-black mb-1">
          {dateLabel}
        </label>
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              disabled={disabled}
              className="w-full sm:w-auto justify-between text-base font-normal border border-gray-300 rounded px-4 py-2.5 min-h-[46px] focus:border-[#00bfb3] focus:ring-[#00bfb3]/30 focus:outline-none"
            >
              {value ? value.toLocaleDateString() : datePlaceholder}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0 border border-gray-300 rounded-lg shadow-lg bg-white" align="start">
            <Calendar
              value={calendarValue}
              onChange={handleDateChange}
              minValue={minValue}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col flex-1">
        <label htmlFor="time" className="block text-sm font-semibold text-black mb-1">
          {timeLabel}
        </label>
        <input
          type="time"
          id="time"
          step="60"
          value={timeValue}
          onChange={handleTimeChange}
          disabled={disabled}
          className="w-full text-base px-4 py-2.5 min-h-[46px] border border-gray-300 rounded focus:outline-none focus:border-[#00bfb3] transition-colors appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}
