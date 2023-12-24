import { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'

interface FormSelectProps {
	label: string
	register: UseFormRegisterReturn
	error?: string
	options: Array<string>
}

const FormSelect = ({ label, register, error, options }: FormSelectProps) => {
	return (
		<label className='grid text-base font-semibold capitalize'>
			{label}

			<select
				{...register}
				className={cn(
					'peer mt-2 appearance-none rounded-lg border border-gray-500 bg-white px-4 py-2 text-base font-normal focus:border-transparent focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800',
					{ 'border-transparent focus:ring-red-500': error }
				)}
			>
				{options.map(role => (
					<option key={role} value={role}>
						{role}
					</option>
				))}
			</select>

			{error && <p className='text-xs text-red-500'>{error}</p>}
		</label>
	)
}

export default FormSelect
