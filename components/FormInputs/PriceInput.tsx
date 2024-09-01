import { Prisma } from '@prisma/client';
import { Input } from '../ui/input';
import { Label } from '../ui/label';



type PriceInputProps = {
    defaultValue?: number;

}
const PriceInput = ({defaultValue}:PriceInputProps) => {
    const name= Prisma.PropertyScalarFieldEnum.price
    
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
       Price (XAF)
      </Label>
      <Input 
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue  || 1000}
        type="number"
        required
      />
    </div>
  )
}

export default PriceInput
