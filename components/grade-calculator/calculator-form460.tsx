'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import FinalGradeDialog from './final-grade-dialog'

type CalculatorFormProps = {
  csClass: string | undefined
  handleDialogChange: () => void
}

const formAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const CalculatorForm460 = ({
  csClass,
  handleDialogChange,
}: CalculatorFormProps) => {
  const [values, setValues] = useState({
    assignment: '',
    midterm: '',
    final: '',
    zybooks: '',
  })

  const [finalGrade, setFinalGrade] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(`${e.target.name}: ${e.target.value}`)
  }

  const handleCalculation = () => {
    const { assignment, midterm, final, zybooks } = values

    const assignmentInt = Number(assignment)
    const midtermInt = Number(midterm)
    const finalInt = Number(final)

    const zybooksInt = Number(zybooks)

    const total = assignmentInt + midtermInt + finalInt + zybooksInt

    console.log('Totals added: ', total)
    setFinalGrade(total)
  }

  const handleInputChange = () => {}

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={formAnimation}
      className="flex flex-col items-center justify-center w-full gap-y-2"
    >
      <h2 className="text-2xl font-poppins mb-4">{csClass}</h2>
      <form className="w-full space-y-2">
        <Label>Assignment Score</Label>
        <Input
          placeholder="Enter total written Assignment Scores"
          value={values.assignment}
          name="assignment"
          onChange={(e) => handleChange(e)}
        />

        <Label>Midterm Score</Label>
        <Input
          placeholder="Enter total of both Midterms"
          value={values.midterm}
          name="midterm"
          onChange={(e) => handleChange(e)}
        />
        <Label>Final Score</Label>
        <Input
          placeholder="Enter Final Score /75"
          value={values.final}
          name="final"
          onChange={(e) => handleChange(e)}
        />

        <Label>Zybooks Score</Label>
        <Input
          placeholder="Enter Zybooks score /10"
          value={values.zybooks}
          name="zybooks"
          onChange={(e) => handleChange(e)}
        />

        <FinalGradeDialog
          handleDialogChange={handleDialogChange}
          finalGrade={finalGrade}
        />
        <Button type="button" className="w-full" onClick={handleCalculation}>
          Calculate Grade
        </Button>
      </form>
    </motion.div>
  )
}

export default CalculatorForm460
