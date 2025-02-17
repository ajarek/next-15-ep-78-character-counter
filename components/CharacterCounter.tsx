'use client'

import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const CharacterCounter = () => {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  return (
    <div className='flex flex-col mt-4 gap-8'>
      <Textarea
        value={text}
        onChange={handleChange}
        placeholder='Type something...'
        className='border border-gray-300'
        autoFocus
      />
      <div className='grid grid-cols-3 gap-4'>
        <Card className='bg-gradient-to-br from-violet-800 via-violet-500 to-violet-300'>
          <CardHeader>
            <CardTitle className='text-3xl '>{text.length}</CardTitle>
          </CardHeader>

          <CardFooter>
            <p>Total Characters</p>
          </CardFooter>
        </Card>
        <Card className=' bg-gradient-to-br from-orange-800 via-orange-500 to-orange-300'>
          <CardHeader>
            <CardTitle className='text-3xl '>
              {text.trim().replace(/[^a-zA-Z]/g, '').length}
            </CardTitle>
          </CardHeader>

          <CardFooter>
            <p>Letters Count</p>
          </CardFooter>
        </Card>
        <Card className='bg-gradient-to-br from-green-800 via-green-500 to-green-300'>
          <CardHeader>
            <CardTitle className='text-3xl '>
              {text ? text.split(' ').length : 0}
            </CardTitle>
          </CardHeader>

          <CardFooter>
            <p>Word Count</p>
          </CardFooter>
        </Card>

        <Card className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 col-span-3'>
          <CardHeader>
            <CardTitle className='text-xl'>Letter Statistics</CardTitle>
          </CardHeader>
          <CardContent className='grid grid-cols-6 gap-2'>
            {Object.entries(
              text
                .toLowerCase()
                .split('')
                .reduce((acc, char) => {
                  if (/[a-z]/.test(char)) {
                    acc[char] = (acc[char] || 0) + 1
                  }
                  return acc
                }, {} as Record<string, number>)
            )
              .sort(([, a], [, b]) => b - a)
              .map(([letter, count]) => (
                <div
                  key={letter}
                  className='flex items-center justify-between bg-white/10 p-2 rounded'
                >
                  <span className='font-bold'>{letter.toUpperCase()}</span>
                  <span>{count}</span>
                </div>
              ))}
          </CardContent>
        </Card>

        <Button
          onClick={() => setText('')}
          className='[grid-area:3/2] bg-gradient-to-br from-red-800 via-red-500 to-red-300 hover:text-xl font-bold transition-all delay-200'
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export default CharacterCounter
