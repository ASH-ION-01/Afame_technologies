import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="relative flex flex-col md:flex-row px-20 py-20 mx-auto scroll-smooth  gap-8 bg-green-100">

            <div className="md:w-1/2 flex flex-col">
                <h2 className="text-[50px] font-bold text-orange-500 leading-none mb-4">
                    <span className="text-[90px]">M</span>e and<br />MyTech Stack
                </h2>

                <div className="mt-4 w-11/12 text-justify text-lg text-gray-700">
                    <p className="mb-4">
                        Hello! I'm Ashish Kumar, a passionate developer with experience in creating beautiful and functional websites and applications. My skills include React, Tailwind CSS, JavaScript, and more.
                    </p>
                    <p className="mb-4">
                        I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring the latest technology trends, or spending time with my family and friends.
                    </p>
                    <p>
                        With over three years of experience in the industry, I am currently working with a budding startup in the USA and also engaging in full-time freelance projects. My current focus is on leveraging Next.js to build efficient and scalable applications while creating stunning UI/UX designs.
                    </p>
                </div>
            </div>

            <div className="md:w-1/2 flex flex-wrap relative gap-8 justify-center">
                <img src="src/skills/blob vector.png" className="absolute bg-white top-1/2 left-1/2 z-[-5] transform -translate-x-1/2 -translate-y-1/2 animate-blob" alt="Blob" />

                <img src="src/skills/HTML.png" alt="HTML" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/CSS.png" alt="CSS" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Javascript.svg" alt="JavaScript" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/React.png" alt="React" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/NodeJs.svg" alt="Node.js" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Next.svg" alt="Next.js" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Redux.svg" alt="Redux" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Tailwind.png" alt="Tailwind CSS" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Bootstrap.svg" alt="Bootstrap" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/MaterialUI.svg" alt="Material-UI" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Express.png" alt="Express.js" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Git.svg" alt="Git" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Github.svg" alt="GitHub" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Graphql.svg" alt="GraphQL" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/MongoDB.svg" alt="MongoDB" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Vercel.svg" alt="Vercel" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/ChartJs.svg" alt="Chart.js" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Bash.svg" alt="Bash" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="src/skills/Docker.svg" alt="Docker" className="w-24 transition-transform duration-500 transform hover:scale-125" />
                <img src="/src/skills/K8s.svg" alt="Kubernetes" className="w-24 transition-transform duration-500 transform hover:scale-125" />
            </div>
        </div>
    );
}

export default Skills;
