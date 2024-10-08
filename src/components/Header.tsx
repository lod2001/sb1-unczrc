import React from 'react'
import { Satellite } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Satellite className="mr-2" />
          <span className="text-xl font-bold">遥感应用</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:text-blue-200">服务</a></li>
            <li><a href="#about" className="hover:text-blue-200">关于我们</a></li>
            <li><a href="#contact" className="hover:text-blue-200">联系我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header