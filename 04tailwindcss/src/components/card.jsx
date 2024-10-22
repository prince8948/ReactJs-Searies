import React from 'react'

const card = ({username, Designation, city, btntext="Click me"}) => {
    console.log({username});
    
    return (
        <figure className="bg-slate-100 rounded-xl mt-5 p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        <p className='text-base'>{username}</p>
                    </div>
                    <div>
                        <h2>{Designation} {city}</h2>
                    </div>
                </figcaption>
            </div>
            <button className='mt-3'>{btntext}</button>
        </figure>
    )
}

export default card