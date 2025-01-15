import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'

type FinalGradeDialogProps = {
  finalGrade: number | null
  handleDialogChange: () => void
}

export default function FinalGradeDialog({
  finalGrade,
  handleDialogChange,
}: FinalGradeDialogProps) {
  return (
    <AlertDialog open={!!finalGrade} onOpenChange={handleDialogChange}>
      <AlertDialogContent>
        <AlertDialogHeader>Final Grade</AlertDialogHeader>
        <AlertDialogDescription></AlertDialogDescription>
        {finalGrade}
        <AlertDialogFooter>
          <Button onClick={handleDialogChange}>Ok</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
