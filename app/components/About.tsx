'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { skills } from '@/app/lib/constants'

export default function About() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pb-20 pt-5"
            id="about"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <p className="text-gray-400 mb-6">
                        I'm a passionate full-stack developer specializing in modern web applications. With expertise in Next.js and React for frontend development,
                         and Node.js, NestJS, Fastify, Laravel, and PHP for backend systems, I deliver end-to-end solutions that combine elegant interfaces with robust server architecture.
                         </p>
                    <p className="text-gray-400 mb-6">My versatile skill set spans both JavaScript and PHP ecosystems. I excel at architecting RESTful APIs,
                         implementing complex business logic, and creating responsive user experiences.
                         Whether building real-time applications or enterprise solutions, 
                        I bring technical proficiency and problem-solving expertise to every project.
                    </p>
                    <p className="text-gray-400">
                        Beyond coding, I stay current with industry best practices and emerging technologies. I believe in collaboration and clear communication to transform ideas into production-ready applications. When not developing, I explore new frameworks, contribute to open-source, and share knowledge with the developer community.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <h3 className="text-xl font-semibold mb-6">My Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-4 py-2 bg-gray-900 rounded-full flex items-center gap-2"
                            >
                                <skill.icon className="w-5 h-5 text-blue-400" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
