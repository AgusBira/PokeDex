import React from 'react'

export default function Card({ data }) {
    return (
        <div className='w-[350px] h-[400px] flex flex-col items-center border-2 bg-red-500 '>
            <img src={data.image} className='w-50' alt="" />
            <h2 className='text-[30px] font-bold'>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <div className='flex gap-2'>
                {data.types.map((type, index) => (
                
                    <img key={index} src={`https://play.pokemonshowdown.com/sprites/types/${type.charAt(0).toUpperCase() + type.slice(1)}.png`} className='w-[40px] h-[20px]' alt="" />
                ))}
            </div>
            <p><span className='italic opacity-60'>HP: </span>{data.hp}</p>
            
            <div className='grid grid-cols-2 text-center gap-5'>
                <p>Attack: {data.atk}</p>
                <p>Defense: {data.def}</p>
                <p>Special Attack: {data.atks}</p>
                <p>Special Defense: {data.defs}</p>
            </div>

        </div>
    )
}
