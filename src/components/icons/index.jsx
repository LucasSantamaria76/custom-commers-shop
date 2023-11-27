import { icons } from 'lucide-react'

export const Icon = ({ name, ...props }) => {
  const LucideIcon = icons[name]

  return <LucideIcon {...props}  strokeWidth={1.5}/>
}