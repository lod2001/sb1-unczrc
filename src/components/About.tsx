import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">关于我们</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900d7e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our team" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              我们是一家专注于遥感应用的创新公司，致力于利用先进的遥感技术为客户提供高质量的地理信息服务。
            </p>
            <p className="text-lg mb-4">
              我们的团队由经验丰富的遥感专家、数据科学家和软件工程师组成，能够为各行各业提供定制化的遥感解决方案。
            </p>
            <p className="text-lg">
              无论是环境监测、城市规划还是农业管理，我们都能为您提供准确、及时的遥感数据和分析结果。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About