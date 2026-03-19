import * as React from "react"
import { format } from "date-fns"
import { CalendarBlankIcon, ClockIcon } from "@phosphor-icons/react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export interface DateTimePickerProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  datePlaceholder?: string
  timePlaceholder?: string
  disabled?: boolean
  className?: string
}

function buildDateTime(date: Date, hour: string, minute: string, ampm: string): Date {
  const d = new Date(date)
  let h = parseInt(hour)
  if (ampm === "PM" && h < 12) h += 12
  if (ampm === "AM" && h === 12) h = 0
  d.setHours(h, parseInt(minute), 0, 0)
  return d
}

export default function DateTimePicker({
  value,
  onChange,
  datePlaceholder = "Pick a date",
  timePlaceholder,
  disabled = false,
  className,
}: DateTimePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value.getFullYear(), value.getMonth(), value.getDate()) : undefined)
  const [hour, setHour] = React.useState(() => {
    if (value) {
      const h = value.getHours() % 12
      return h === 0 ? "12" : h.toString().padStart(2, "0")
    }
    return "12"
  })
  const [minute, setMinute] = React.useState(value ? value.getMinutes().toString().padStart(2, "0") : "00")
  const [ampm, setAmpm] = React.useState(value ? (value.getHours() >= 12 ? "PM" : "AM") : "AM")

  const isControlled = value !== undefined

  React.useEffect(() => {
    if (isControlled && value) {
      setDate(new Date(value.getFullYear(), value.getMonth(), value.getDate()))
      const h = value.getHours() % 12
      setHour(h === 0 ? "12" : h.toString().padStart(2, "0"))
      setMinute(value.getMinutes().toString().padStart(2, "0"))
      setAmpm(value.getHours() >= 12 ? "PM" : "AM")
    } else if (isControlled && !value) {
      setDate(undefined)
      setHour("12")
      setMinute("00")
      setAmpm("AM")
    }
  }, [isControlled, value])

  const notifyChange = React.useCallback(
    (d: Date | null) => {
      onChange?.(d)
    },
    [onChange]
  )

  const handleDateSelect = (d: Date | undefined) => {
    setDate(d)
    const baseDate = d ?? new Date()
    baseDate.setHours(0, 0, 0, 0)
    if (d) {
      notifyChange(buildDateTime(d, hour, minute, ampm))
    } else {
      notifyChange(null)
    }
  }

  const handleHourChange = (v: string) => {
    setHour(v)
    const baseDate = date ?? new Date()
    baseDate.setHours(0, 0, 0, 0)
    notifyChange(buildDateTime(baseDate, v, minute, ampm))
  }

  const handleMinuteChange = (v: string) => {
    setMinute(v)
    const baseDate = date ?? new Date()
    baseDate.setHours(0, 0, 0, 0)
    notifyChange(buildDateTime(baseDate, hour, v, ampm))
  }

  const handleAmpmChange = (v: string) => {
    setAmpm(v)
    const baseDate = date ?? new Date()
    baseDate.setHours(0, 0, 0, 0)
    notifyChange(buildDateTime(baseDate, hour, minute, v))
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Line 1: Date picker */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              disabled={disabled}
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300 rounded-md h-10 px-4 focus:border-[#00bfb3] focus:ring-[#00bfb3]/30",
                !date && "text-gray-500"
              )}
            >
              <CalendarBlankIcon className="mr-2 h-4 w-4" weight="regular" />
              {date ? format(date, "PPP") : <span>{datePlaceholder}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0 w-auto border border-gray-300 rounded-lg shadow-lg bg-white"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(d) => d < today}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Line 2: Time picker - works independently of date */}
      <div className="flex items-center gap-2">
        <ClockIcon className="h-4 w-4 text-gray-500 shrink-0" weight="regular" />
        <Select value={hour} onValueChange={handleHourChange} disabled={disabled}>
          <SelectTrigger className="w-[62px] border-gray-300 rounded-md focus:border-[#00bfb3]">
            <SelectValue placeholder={timePlaceholder} />
          </SelectTrigger>
          <SelectContent className="border-gray-300 rounded-lg shadow-lg">
            {Array.from({ length: 12 }, (_, i) => {
              const h = i + 1
              return (
                <SelectItem key={h} value={h.toString().padStart(2, "0")}>
                  {h.toString().padStart(2, "0")}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
        <span className="text-gray-600">:</span>
        <Select value={minute} onValueChange={handleMinuteChange} disabled={disabled}>
          <SelectTrigger className="w-[70px] border-gray-300 rounded-md focus:border-[#00bfb3]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-gray-300 rounded-lg shadow-lg">
            {["00", "15", "30", "45"].map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={ampm} onValueChange={handleAmpmChange} disabled={disabled}>
          <SelectTrigger className="w-[70px] border-gray-300 rounded-md focus:border-[#00bfb3]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-gray-300 rounded-lg shadow-lg">
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
