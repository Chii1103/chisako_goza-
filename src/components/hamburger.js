import './hamburger.scss'

export default function HambugerButton({ className, onClick }) {
	return <div className={['hamburgerButton', className].join(' ')}>
		<button onClick={onClick} >
			<span className='line-1'/> 
            <span className='line-1'/> 
            <span className='line-1'/>
		</button>
	</div>
}