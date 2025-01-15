'use client'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { CardDescription } from '../ui/card'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

import CalculatorForm210 from './calculator-form210'
import { AnimatePresence } from 'framer-motion'
import CalculatorForm460 from './calculator-form460'

type CsClass = 'CS 210' | 'CS 460'

const Calculator = () => {
  const [csClass, setCsClass] = useState<CsClass | undefined>(undefined)

  const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false)

  const handleDialogChange = () => {
    setIsGradeDialogOpen((prev) => !prev)
  }
  const handleDialogTrigger = () => {
    setIsGradeDialogOpen(true)
    setCsClass(undefined)
  }
  return (
    <Dialog open={isGradeDialogOpen} onOpenChange={setIsGradeDialogOpen}>
      <DialogTrigger
        onClick={() => handleDialogTrigger}
        className="font-roboto_condensed text-gray-50 opacity-50 hover:opacity-100"
      >
        GradeCalc
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grade Calculator</DialogTitle>
          <CardDescription>
            Select which class you are in and then fill out the form.
          </CardDescription>
        </DialogHeader>

        <ToggleGroup type="single">
          <ToggleGroupItem onClick={() => setCsClass('CS 210')} value="CS 210">
            CS 210
          </ToggleGroupItem>
          <ToggleGroupItem onClick={() => setCsClass('CS 460')} value="CS 460">
            CS 460
          </ToggleGroupItem>
        </ToggleGroup>
        <AnimatePresence>
          {csClass === 'CS 210' ? (
            <CalculatorForm210
              handleDialogChange={handleDialogChange}
              csClass={csClass}
            />
          ) : csClass === 'CS 460' ? (
            <CalculatorForm460
              handleDialogChange={handleDialogChange}
              csClass={csClass}
            />
          ) : (
            <></>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

export default Calculator
