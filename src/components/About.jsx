import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                I'm saifuddin completed my graduation as Mechanical Engineer & I'm looking for a web developer job. I choose this role bec i wanna be updated in this growing world where techonolgy has became the head of every stream.

            </p>

            <br />

            <p className="text-xl">
                I've gained knowledge in different techonolgies with the help of six months certified internship from ascent software training institute,Bangalore. Where i learnt full stack development course with python language and Frontend frameworks like javascript, reactjs, Tailwind CSS and Backend frameworks as Django,ORM, RESTFul API's, postman and for database postgresSQL & kafka for messaging service.
            </p>
        </div>
    </div>
  );
};

export default About;
