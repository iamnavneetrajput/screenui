'use client'

import { useState } from 'react'
import type { JSX } from 'react'
import {
  StepCardContainer,
  StepCard,
  StepConnector,
} from '@/packages/StepCard'
import { Button } from '@/packages/Button'

export const stepcardDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [step, setStep] = useState(1)

    return (
      <div className="space-y-6 max-w-md mx-auto">
        <StepCardContainer currentStep={step}>
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
  },

  vertical: () => {
    const [step, setStep] = useState(2)

    return (
      <div className="space-y-6 max-w-md">
        <StepCardContainer
          currentStep={step}
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
  },
}
