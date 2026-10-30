import type { ProcessStepData } from '../../types'

interface ProcessStepProps {
  step: ProcessStepData
}

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <li className="process-step">
      <span aria-hidden="true" className="process-step__number">
        {step.number}
      </span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </li>
  )
}