import type { Example } from '@/docs/schema'

const basicCode = `'use client'
import { useState } from 'react'
import { StepCardContainer, StepCard, StepConnector,} from '@/components/StepCard'
import { Button } from '@/components/Button'

export default function BasicStepCard() {
  const [step, setStep] = useState(1)

  return (
    <div className="space-y-6 max-w-md">
      <StepCardContainer
        currentStep={step}
        onStepChange={setStep}
      >
        <StepCard step={1} title="Step 1" />
        <StepConnector completed={step > 1} />

        <StepCard step={2} title="Step 2" />
        <StepConnector completed={step > 2} />

        <StepCard step={3} title="Step 3" />
      </StepCardContainer>

      <div className="flex gap-3">
        <Button
          size="sm"
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
        >
          Previous
        </Button>

        <Button
          size="sm"
          disabled={step === 3}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
`.trim()

const verticalCode = `'use client'
import { useState } from 'react'
import { StepCardContainer, StepCard, StepConnector,} from '@/components/StepCard'
import { Button } from '@/components/Button'

export default function VerticalStepCard() {
  const [step, setStep] = useState(2)

  return (
    <div className="space-y-6 max-w-md">
      <StepCardContainer
        currentStep={step}
        onStepChange={setStep}
        orientation="vertical"
      >
        <StepCard step={1} title="Step 1" />
        <StepConnector completed={step > 1} />

        <StepCard step={2} title="Step 2" />
        <StepConnector completed={step > 2} />

        <StepCard step={3} title="Step 3" />
      </StepCardContainer>

      <div className="flex gap-3">
        <Button
          size="sm"
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
        >
          Previous
        </Button>

        <Button
          size="sm"
          disabled={step === 3}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
`.trim()

export const stepcardExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Steps',
    description: 'A simple horizontal step flow.',
    code: [
      { language: 'typescript', code: basicCode },
      { language: 'javascript', code: basicCode },
    ],
  },
  {
    id: 'vertical',
    title: 'Vertical Steps',
    description: 'A vertical layout for detailed step content.',
    code: [
      { language: 'typescript', code: verticalCode },
      { language: 'javascript', code: verticalCode },
    ],
  },
]
