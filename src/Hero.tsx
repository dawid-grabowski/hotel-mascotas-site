import React from 'react';

const Hero = () => {
	return (
		<section className='text-white bg-gray-900'>
			<div className='max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
				<div className='max-w-3xl mx-auto text-center'>
					<h1 className='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
						<span className='sm:block'>Profesjonalna opieka.</span>
						<span className='sm:block'>Spokojny właściciel.</span>
					</h1>

					<p className='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl'>
						Jesteśmy hotelem dla kotów który stawia na komfort futrzaków oraz właścicieli ponad wszystko, zapewniamy
						spokój rodzicom pociech oraz najlepsze wakacje dla przyjezdnych.
					</p>

					<div className='flex flex-wrap justify-center gap-4 mt-8'>
						<a
							className='block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
							href='#details'>
							Dowiedz się więcej
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
