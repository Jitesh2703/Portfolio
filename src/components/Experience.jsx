import {
  Box,
  Code2,
  Coffee,
  Coins,
  Cpu,
  Database,
  Flame,
  FolderKanban,
  GitBranch,
  Globe,
  Layers,
  Server,
  Share2,
  Smartphone,
  TableProperties,
  Terminal,
  TestTube,
  Wrench
} from 'lucide-react';
import React from 'react';

const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: Coffee,
      title: "Java",
      style: "shadow-red-500 bg-gray-700",
      iconColor: "#E06C00"
    },
    {
      id: 2,
      icon: Code2,
      title: "Kotlin",
      style: "shadow-purple-500 bg-gray-700",
      iconColor: "#A334F0"
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Android SDK",
      style: "shadow-green-500 bg-gray-700",
      iconColor: "#3DDC84"
    },
    {
      id: 4,
      icon: Flame,
      title: "Firebase",
      style: "shadow-yellow-500 bg-gray-700",
      iconColor: "#FFCA28"
    },
    {
      id: 5,
      icon: Box,
      title: "React Native",
      style: "shadow-blue-500 bg-gray-700",
      iconColor: "#61DAFB"
    },
    {
      id: 6,
      icon: Layers,
      title: "Spring Boot",
      style: "shadow-green-400 bg-gray-700",
      iconColor: "#6DB33F"
    },
    {
      id: 7,
      icon: Server,
      title: "Node.js",
      style: "shadow-green-600 bg-gray-700",
      iconColor: "#339933"
    },
    {
      id: 8,
      icon: Database,
      title: "MongoDB",
      style: "shadow-green-500 bg-gray-700",
      iconColor: "#47A248"
    },
    {
      id: 9,
      icon: TableProperties,
      title: "SQLite",
      style: "shadow-blue-400 bg-gray-700",
      iconColor: "#003B57"
    }
  ];

  const additionalSkills = [
    {
      title: "Development Tools",
      items: [
        {
          name: "Git",
          icon: GitBranch,
          color: "#F05032"
        },
        {
          name: "Gradle",
          icon: Wrench,
          color: "#02303A"
        },
        {
          name: "Android Studio",
          icon: Terminal,
          color: "#3DDC84"
        },
        {
          name: "IntelliJ IDEA",
          icon: Cpu,
          color: "#000000"
        }
      ]
    },
    {
      title: "APIs",
      items: [
        {
          name: "REST",
          icon: Globe,
          color: "#61DAFB"
        },
        {
          name: "GraphQL",
          icon: Share2,
          color: "#E535AB"
        },
        {
          name: "CoinGecko",
          icon: Coins,
          color: "#8DC63F"
        }
      ]
    },
    {
      title: "Methodologies",
      items: [
        {
          name: "Agile",
          icon: FolderKanban,
          color: "#0052CC"
        },
        {
          name: "TDD",
          icon: TestTube,
          color: "#FF0000"
        }
      ]
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">Technologies I've mastered throughout my journey</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon: Icon, title, style, iconColor }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
            >
              <div className="flex justify-center items-center w-full">
                <Icon size={48} color={iconColor} className="mb-2" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Additional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {additionalSkills.map((category) => (
              <div key={category.title} className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-4 text-lg">{category.title}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <item.icon size={20} color={item.color} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;