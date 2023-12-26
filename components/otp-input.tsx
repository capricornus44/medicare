import ReactOtpInput from 'react-otp-input'

interface OtpInputProps {
	error?: string
	code: string
	onChange: (code: string) => void
}

const OtpInput = ({ code, error, onChange }: OtpInputProps) => {
	return (
		<div className='grid gap-2'>
			<ReactOtpInput
				value={code}
				onChange={onChange}
				numInputs={4}
				shouldAutoFocus
				renderInput={props => <input {...props} />}
				containerStyle='flex items-center justify-center gap-3'
				inputStyle='otp'
			/>

			{error && <p className='text-xs text-red-500'>{error}</p>}
		</div>
	)
}

export default OtpInput
