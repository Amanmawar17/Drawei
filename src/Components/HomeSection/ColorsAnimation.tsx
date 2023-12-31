const ColorsAnimation = () => {

  return (
    <div className="relative bottom-4 blur-xl animate-pulse -z-50">
        <div className="bg-gradient-to-l from-amber-100 to-yellow-400 w-72 h-72 rounded-full absolute top-8 left-8 -z-40  "></div>
        <div className="bg-gradient-to-tr from-blue-200 to-cyan-400 w-48 h-48 rounded-full absolute -top-2 -left-14 -z-30  "></div>
        <div className="bg-gradient-to-br from-red-200 to-red-600 w-40 h-40 rounded-full absolute top-20 -left-1 -z-30  "></div>
        <div className="bg-gradient-to-t from-teal-200 to-teal-500 w-60 h-60 rounded-full absolute top-40 -left-14 -z-50  mix-blend-lighten"></div>
    </div>
  )
}

export default ColorsAnimation