import React from 'react'

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-96 flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4">遥感技术的未来</h1>
        <p className="text-xl mb-8">探索地球，洞察未来</p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">联系我们</a>
      </div>
    </div>
  )
}

export default Hero