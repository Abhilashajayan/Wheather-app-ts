type temp = {
   condition : string,
   temps : string | number,

}

export const Display = ({condition , temps}:temp) => {
  return (
    <div>
    <p className='font-pacifico text-yellow-200 text-6xl  mb-5'>{temps}&deg;</p>
    <h1 className='font-pacifico text-6xl mb-10 font-extrabold tracking-tight'>
      <span className='text-yellow-400 font-stroke'>
        Today's
      </span>
      <br />
      <span className='text-green-400 font-stroke'>
      {condition} 
      </span>
    </h1>
  </div>
  )
}
