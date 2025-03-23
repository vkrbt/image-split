import React, { memo, useCallback } from 'react'
import * as Slider from '@radix-ui/react-slider'
import { GridIcon, SplitSquareHorizontal, SplitSquareVertical } from 'lucide-react'
import { SplitControlsProps } from '../../types'

const DirectionButton = memo(({ 
  direction, 
  currentDirection, 
  onClick, 
  icon: Icon, 
  label 
}: { 
  direction: string
  currentDirection: string
  onClick: () => void
  icon: React.ElementType
  label: string
}) => (
  <button 
    onClick={onClick}
    className={`toggle-button ${currentDirection === direction ? 'toggle-button-active' : 'toggle-button-inactive'}`}
    aria-pressed={currentDirection === direction}
  >
    <Icon className="w-5 h-5" />
    {label}
  </button>
))

DirectionButton.displayName = 'DirectionButton'

const SliderControl = memo(({
  label,
  value,
  onChange,
  min,
  max
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
}) => (
  <div className="flex-1 min-w-[250px]">
    <label className="control-label">{label}: {value}</label>
    <Slider.Root
      value={[value]}
      onValueChange={([newValue]) => onChange(newValue)}
      min={min}
      max={max}
      step={1}
      className="relative flex items-center select-none touch-none w-full h-10"
    >
      <Slider.Track className="bg-[rgb(var(--secondary)_/_0.5)] relative grow rounded-full h-2">
        <Slider.Range className="absolute bg-primary rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-6 h-6 bg-primary rounded-full hover:bg-primary/80 focus:outline-none shadow-md transition-colors" />
    </Slider.Root>
    
    <div className="flex justify-between mt-1 text-xs">
      <span>{min}</span>
      <span>{max}</span>
    </div>
  </div>
))

SliderControl.displayName = 'SliderControl'

export const SplitControls = memo(({
  direction,
  parts,
  gridCols,
  gridRows,
  onDirectionChange,
  onPartsChange,
  onGridColsChange,
  onGridRowsChange,
}: SplitControlsProps) => {
  const handleDirectionChange = useCallback((newDirection: string) => {
    onDirectionChange(newDirection as any)
  }, [onDirectionChange])

  return (
    <div className="control-container">
      <div className="mb-6">
        <label className="control-label">Split Direction</label>
        <div className="flex flex-wrap gap-3">
          <DirectionButton
            direction="vertical"
            currentDirection={direction}
            onClick={() => handleDirectionChange('vertical')}
            icon={SplitSquareHorizontal}
            label="Vertical"
          />
          <DirectionButton
            direction="horizontal"
            currentDirection={direction}
            onClick={() => handleDirectionChange('horizontal')}
            icon={SplitSquareVertical}
            label="Horizontal"
          />
          <DirectionButton
            direction="grid"
            currentDirection={direction}
            onClick={() => handleDirectionChange('grid')}
            icon={GridIcon}
            label="Grid"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-wrap gap-6">
          {direction === 'grid' ? (
            <>
              <SliderControl
                label="Columns"
                value={gridCols}
                onChange={onGridColsChange}
                min={2}
                max={10}
              />
              <SliderControl
                label="Rows"
                value={gridRows}
                onChange={onGridRowsChange}
                min={2}
                max={10}
              />
            </>
          ) : (
            <SliderControl
              label="Number of parts"
              value={parts}
              onChange={onPartsChange}
              min={2}
              max={10}
            />
          )}
        </div>
      </div>
    </div>
  )
})

SplitControls.displayName = 'SplitControls' 