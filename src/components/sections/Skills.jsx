import React from 'react'

const Skills = () => {
  return (
    <section
        id="skills"
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl font-bold mb-8"
          >
            Skills
          </h2>
          <div 
            className="grid md:grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded">
                    <div
                      className="bg-blue-600 text-xs font-medium text-white text-center p-2 rounded"
                    >
                      React
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills