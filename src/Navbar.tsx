import React from 'react';

const Navbar = () => {
	const img = require('./biale.png');

	return (
		<nav className='flex items-center justify-between max-w-3xl p-4 mx-auto bg-gray-900'>
			<a className='inline-flex items-center justify-center bg-gray-900 rounded-lg' href='/'>
				<img src={img} alt='Mascotas logo' className='w-26 h-16' />
			</a>

			<ul className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
				<li className='hidden lg:block'>
					<a className='px-3 py-2 rounded-lg text-gray-50' href='#details'>
						{' '}
						Szczegóły{' '}
					</a>
				</li>

				<li className='hidden lg:block'>
					<a className='px-3 py-2 rounded-lg text-gray-50' href='#reviews'>
						{' '}
						Opinie{' '}
					</a>
				</li>

				<li>
					<a className='px-3 py-2 rounded-lg text-gray-50' href='#contact'>
						{' '}
						Kontakt{' '}
					</a>
				</li>

				<li>
					<a className='inline-flex items-center px-3 py-2 rounded-lg text-gray-50' href='#contact' target='_blank'>
						FAQ
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='ml-1.5 w-4 h-4'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
