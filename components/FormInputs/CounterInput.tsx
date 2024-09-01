"use client"


import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { Button } from '../ui/button';
import { Card, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
const CounterInput = ({ detail, defaultValue }: { detail: string; defaultValue?: number }) => {
    const [count, setCount] = useState(defaultValue || 0)
    
    const increaseCount = () => {
        setCount((prevCount)=>prevCount + 1) 
    }
    
    const decreaseCount = () => {
        setCount((prevCount) => {
            if (prevCount > 0) {
                return prevCount - 1
            }
            return prevCount
        }) 
    }
     

  return (
      <Card className="mb-5">
          <Input   type='hidden' name={detail} value={count} />
          <CardHeader className='py-1 mb-.5 mt-.5 flex flex-col'>
              <div className="flex flex-wrap items-center justify-between">
                  <div className="flex flex-col">
                      <h2 className="font-medium capitalize">
                          {detail}
                      </h2>
                      <p className="text-muted-foreground text-md ">Number of {detail}</p>
                  </div>
                  <div className="flex items-center gap-x-4 ">
                      <Button variant="outline" size="icon" type='button' onClick={decreaseCount} className='bg-muted' >
                          <LuMinus  className='w-5 h-5 text-primary font-extrabold'/>
                      </Button>
                      <span  className='text-xl w-5 font-bold text-center'>{count }</span>
                      <Button variant="outline" size="icon" type='button' onClick={increaseCount} className='bg-muted'>
                          <LuPlus  className='w-5 h-5 text-primary'/>
                      </Button>
                  </div>
              </div>
     </CardHeader>
    </Card>
  )
}

export default CounterInput
