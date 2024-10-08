import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">联系我们</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">姓名</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">邮箱</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">消息</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">发送消息</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact