import React from 'react'
import { Map, Camera, BarChart } from 'lucide-react'

const Services = () => {
  const services = [
    { icon: <Map className="w-12 h-12 mb-4 text-blue-600" />, title: '地图制作', description: '高精度地图制作和更新服务' },
    { icon: <Camera className="w-12 h-12 mb-4 text-blue-600" />, title: '影像分析', description: '卫星和航空影像的深度分析' },
    { icon: <BarChart className="w-12 h-12 mb-4 text-blue-600" />, title: '数据处理', description: '大规模遥感数据的处理和解释' },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-lg">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services