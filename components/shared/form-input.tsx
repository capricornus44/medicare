import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface FormInputProps {
	type?: string
	label: string
	register: UseFormRegisterReturn
	error?: string
	placeholder?: string
}

const FormInput = ({
	type = 'text',
	label,
	register,
	error,
	placeholder
}: FormInputProps) => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		setVisible(prev => !prev)
	}

	return (
		<div className='grid'>
			<label className='mb-2 text-base font-semibold capitalize'>{label}</label>

			<div className='relative mb-1 grid grid-cols-subgrid'>
				<input
					type={type !== 'password' ? type : visible ? 'text' : type}
					placeholder={placeholder}
					{...register}
					className={cn(
						'peer rounded-lg border border-gray-500 bg-white p-4 focus:border-transparent focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800',
						{ 'border-transparent focus:ring-red-500': error }
					)}
				/>

				{type === 'password' && (
					<Button
						type='button'
						onClick={toggleVisible}
						variant='ghost'
						size='icon'
						className='absolute right-4 top-0 translate-y-1/3'
					>
						{visible ? (
							<EyeOffIcon className='stroke-indigo-500' />
						) : (
							<EyeIcon className='stroke-indigo-500' />
						)}
					</Button>
				)}
			</div>

			{error && <p className='text-xs text-red-500'>{error}</p>}
		</div>
	)
}

export default FormInput
