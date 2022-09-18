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
    <div>
      {label}
    </div>
  )
}