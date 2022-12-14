export interface ButtonProps {
  label: string
  primary: boolean
  size: 'small' | 'medium' | 'large'
}

export const Button = ({
  label, 
  primary,
  size,
}: ButtonProps) => {
  return (
    <button className="bg-red-500 p-2">
      {label}
    </button>
  )
}