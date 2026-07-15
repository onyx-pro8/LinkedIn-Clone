import { Ionicons } from "@expo/vector-icons"

export default function CustomIcon({ name, size, color, ...props }) {
  return (
    <Ionicons name={name} size={size} color={color} {...props} />
  )
}